import { RequestNetwork } from '@requestnetwork/request-client.js';
import { Web3SignatureProvider } from '@requestnetwork/web3-signature';
import { Types, Utils } from '@requestnetwork/request-client.js';
import { ICreateRequestParameters } from '@requestnetwork/request-client.js/dist/types';

export async function createPaymentRequest({
  chainName,
  tokenAddress,
  amount,
  reason,
  dueDate,
  payeeIdentity,
  payerIdentity,
  paymentRecipient,
  feeRecipient,
  provider,
}: {
  chainName: string;
  tokenAddress: string;
  amount: string;
  reason: string;
  dueDate: string;
  payeeIdentity: string;
  payerIdentity: string;
  paymentRecipient: string;
  feeRecipient: string;
  provider: any;
}) {
  const web3SignatureProvider = new Web3SignatureProvider(provider);

  const requestClient = new RequestNetwork({
    nodeConnectionConfig: {
      baseURL: 'https://goerli.gateway.request.network/',
    },
    signatureProvider: web3SignatureProvider,
  });

  const requestCreateParameters = {
    requestInfo: {
      // The currency in which the request is denominated
      currency: {
        type:
          tokenAddress === '0x0000000000000000000000000000000000000000'
            ? Types.RequestLogic.CURRENCY.ETH
            : Types.RequestLogic.CURRENCY.ERC20,
        value: tokenAddress !== '0x0000000000000000000000000000000000000000' ? tokenAddress : 'ETH',
        network: chainName,
      },

      // The expected amount as a string, in parsed units, respecting `decimals`
      // Consider using `parseUnits()` from ethers or viem
      expectedAmount: amount,

      // The payee identity. Not necessarily the same as the payment recipient.
      payee: {
        type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
        value: payeeIdentity,
      },

      // The payer identity. If omitted, any identity can pay the request.
      payer: {
        type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
        value: payerIdentity,
      },

      // The request creation timestamp.
      timestamp: Utils.getCurrentTimestampInSecond(),
    },

    // The paymentNetwork is the method of payment and related details.
    paymentNetwork: {
      id:
        tokenAddress === '0x0000000000000000000000000000000000000000'
          ? Types.Extension.PAYMENT_NETWORK_ID.ETH_FEE_PROXY_CONTRACT
          : Types.Extension.PAYMENT_NETWORK_ID.ERC20_FEE_PROXY_CONTRACT,
      parameters: {
        paymentNetworkName: chainName,
        paymentAddress: paymentRecipient,
        feeAddress: feeRecipient,
        feeAmount: '0',
      },
    },

    // The contentData can contain anything.
    // Consider using rnf_invoice format from @requestnetwork/data-format
    contentData: {
      reason,
      dueDate, // : '2023.06.16',
    },

    // The identity that signs the request, either payee or payer identity.
    signer: {
      type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
      value: payeeIdentity,
    },
  } as any as ICreateRequestParameters;

  const request = await requestClient.createRequest(requestCreateParameters);
  return request;
}
