import { useWeb3Modal } from '@web3modal/react';
import { BigNumberish, ethers, FixedNumber, Signer, Wallet } from 'ethers';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { useProvider, useSigner } from 'wagmi';
import * as Yup from 'yup';
import StarterKitContext from '../../context/starterKit';
import ServiceRegistry from '../../contracts/ABI/TalentLayerService.json';
import { postToIPFS } from '../../utils/ipfs';
import { createMultiStepsTransactionToast, showErrorTransactionToast } from '../../utils/toast';
import { parseRateAmount } from '../../utils/web3';
import SubmitButton from './SubmitButton';
import useAllowedTokens from '../../hooks/useAllowedTokens';
import { getServiceSignature } from '../../utils/signature';
import { IToken } from '../../types';
import { SkillsInput } from './skills-input';
import { delegateCreateService } from '../request';
import { useChainId } from '../../hooks/useChainId';
import { useConfig } from '../../hooks/useConfig';

interface IFormValues {
  title: string;
  about: string;
  latitude: number;
  longitude: number;
  rateToken: string;
  rateAmount: number;
}

const initialValues: IFormValues = {
  title: '',
  about: '',
  latitude: 0,
  longitude: 0,
  rateToken: '',
  rateAmount: 0,
};

function ServiceForm() {
  const config = useConfig();
  const chainId = useChainId();

  const { open: openConnectModal } = useWeb3Modal();
  const { user, account } = useContext(StarterKitContext);
  const provider = useProvider({ chainId });
  const { data: signer } = useSigner({
    chainId,
  });

  const router = useRouter();
  const allowedTokenList = useAllowedTokens();
  const [selectedToken, setSelectedToken] = useState<IToken>();
  const { isActiveDelegate } = useContext(StarterKitContext);

  const validationSchema = Yup.object({
    title: Yup.string().required('Please provide a title for your image'),
    about: Yup.string().required('Please provide a description of your image'),
    latitude: Yup.number().required('Please provide latitude'),
    longitude: Yup.number().required('Please provide longitude'),
    rateToken: Yup.string().required('Please select a payment token'),
    rateAmount: Yup.number()
      .required('Please provide an amount for your image')
      .when('rateToken', {
        is: (rateToken: string) => rateToken !== '',
        then: schema =>
          schema.moreThan(
            selectedToken
              ? FixedNumber.from(
                  ethers.utils.formatUnits(
                    selectedToken?.minimumTransactionAmount as BigNumberish,
                    selectedToken?.decimals,
                  ),
                ).toUnsafeFloat()
              : 0,
            `Amount must be greater than ${
              selectedToken
                ? FixedNumber.from(
                    ethers.utils.formatUnits(
                      selectedToken?.minimumTransactionAmount as BigNumberish,
                      selectedToken?.decimals,
                    ),
                  ).toUnsafeFloat()
                : 0
            }`,
          ),
      }),
  });

  const onSubmit = async (
    values: IFormValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void },
  ) => {
    const token = allowedTokenList.find(token => token.address === values.rateToken);
    if (account?.isConnected === true && provider && signer && token && user) {
      try {
        const parsedRateAmount = await parseRateAmount(
          values.rateAmount.toString(),
          values.rateToken,
          token.decimals,
        );
        const parsedRateAmountString = parsedRateAmount.toString();
        const cid = await postToIPFS(
          JSON.stringify({
            title: values.title,
            about: values.about,
            latitude: values.latitude,
            longitude: values.longitude,
            role: 'buyer',
            rateToken: values.rateToken,
            rateAmount: parsedRateAmountString,
          }),
        );

        // Get platform signature
        const signature = await getServiceSignature({ profileId: Number(user?.id), cid });

        let tx;

        if (isActiveDelegate) {
          const response = await delegateCreateService(chainId, user.id, user.address, cid);
          tx = response.data.transaction;
        } else {
          const contract = new ethers.Contract(
            config.contracts.serviceRegistry,
            ServiceRegistry.abi,
            signer,
          );

          tx = await contract.createService(
            user?.id,
            process.env.NEXT_PUBLIC_PLATFORM_ID,
            cid,
            signature,
          );
        }

        const newId = await createMultiStepsTransactionToast(
          chainId,
          {
            pending: 'Creating your job...',
            success: 'Congrats! Your job has been added',
            error: 'An error occurred while creating your job',
          },
          provider,
          tx,
          'service',
          cid,
        );
        setSubmitting(false);
        resetForm();
        if (newId) {
          router.push(`/dashboard/services/${newId}`);
        }
      } catch (error) {
        showErrorTransactionToast(error);
      }
    } else {
      openConnectModal();
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ isSubmitting, setFieldValue }) => (
        <Form>
          <div className='grid grid-cols-1 gap-6 border border-gray-700 rounded-xl p-6 bg-endnight'>
            <label className='block'>
              <span className='text-gray-100'>Title</span>
              <Field
                type='text'
                id='title'
                name='title'
                className='mt-1 mb-1 block w-full rounded-xl border border-gray-700 bg-midnight shadow-sm focus:ring-opacity-50'
                placeholder=''
              />
              <span className='text-red-500'>
                <ErrorMessage name='title' />
              </span>
            </label>

            <label className='block'>
              <span className='text-gray-100'>About</span>
              <Field
                as='textarea'
                id='about'
                name='about'
                className='mt-1 mb-1 block w-full rounded-xl border border-gray-700 bg-midnight shadow-sm focus:ring-opacity-50'
                placeholder=''
              />
              <span className='text-red-500'>
                <ErrorMessage name='about' />
              </span>
            </label>

            <div className='flex'>
              <label className='block flex-1 mr-4'>
                <span className='text-gray-100'>Latitude</span>
                <Field
                  type='number'
                  id='latitude'
                  name='latitude'
                  className='mt-1 mb-1 block w-full rounded-xl border border-gray-700 bg-midnight shadow-sm focus:ring-opacity-50'
                  placeholder=''
                />
                <span className='text-red-500 mt-2'>
                  <ErrorMessage name='latitude' />
                </span>
              </label>
              <label className='block flex-1 mr-4'>
                <span className='text-gray-100'>Longitude</span>
                <Field
                  type='number'
                  id='longitude'
                  name='longitude'
                  className='mt-1 mb-1 block w-full rounded-xl border border-gray-700 bg-midnight shadow-sm focus:ring-opacity-50'
                  placeholder=''
                />
                <span className='text-red-500 mt-2'>
                  <ErrorMessage name='longitude' />
                </span>
              </label>
            </div>

            <div className='flex'>
              <label className='block flex-1 mr-4'>
                <span className='text-gray-100'>Amount</span>
                <Field
                  type='number'
                  id='rateAmount'
                  name='rateAmount'
                  className='mt-1 mb-1 block w-full rounded-xl border border-gray-700 bg-midnight shadow-sm focus:ring-opacity-50'
                  placeholder=''
                />
                <span className='text-red-500 mt-2'>
                  <ErrorMessage name='rateAmount' />
                </span>
              </label>
              <label className='block'>
                <span className='text-gray-100'>Token</span>
                <Field
                  component='select'
                  id='rateToken'
                  name='rateToken'
                  className='mt-1 mb-1 block w-full rounded-xl border border-gray-700 bg-midnight shadow-sm focus:ring-opacity-50'
                  placeholder=''
                  onChange={(e: { target: { value: string } }) => {
                    const token = allowedTokenList.find(token => token.address === e.target.value);
                    setSelectedToken(token);
                    setFieldValue('rateToken', e.target.value);
                  }}>
                  <option value=''>Select a token</option>
                  {allowedTokenList.map((token, index) => (
                    <option key={index} value={token.address}>
                      {token.symbol}
                    </option>
                  ))}
                </Field>
                <span className='text-red-500'>
                  <ErrorMessage name='rateToken' />
                </span>
              </label>
            </div>

            <SubmitButton isSubmitting={isSubmitting} label='Post' />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ServiceForm;
