import { createRef, useState } from 'react';
import { IService } from '../../types';
import C2PAImageDisplay from '../C2PAImageDisplay';
import { uploadImage } from '../../utils/lighthousestorage';
import axios from 'axios';

interface IImageUploadModalProps {
  service: IService;
}

function ImageUploadModal({ service }: IImageUploadModalProps) {
  const [show, setShow] = useState(false);
  const imageFieldRef = createRef<HTMLInputElement>();

  async function submitImage() {
    if (!image) return;
    const imageURL = await uploadImage(image);
    const id = service.id;
    const response = await axios.post('/api/uploadImage', { id, imageURL });
    console.log(response);
  }

  const [image, setImage] = useState<File | null>(null);

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className={`block text-redpraha bg-green-50 hover:bg-redpraha hover:text-white rounded-xl px-5 py-2.5 text-center`}
        type='button'
        data-modal-toggle='defaultModal'>
        Upload Image
      </button>

      <div
        className={`${
          !show ? 'hidden' : ''
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal h-full bg-black/75 flex flex-col items-center justify-center`}>
        <div className='relative p-4 w-full max-w-2xl h-auto'>
          <div className='relative bg-white rounded-xl shadow '>
            <div className='flex justify-between items-start p-4 rounded-t border-b '>
              <h3 className='text-xl font-semibold text-gray-900 '>Upload Image</h3>
              <button
                onClick={() => setShow(false)}
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-xl text-sm p-1.5 ml-auto inline-flex items-center '
                data-modal-toggle='defaultModal'>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>
            <div className='p-6 space-y-6'>
              {image ? (
                <C2PAImageDisplay image={image} />
              ) : (
                <div className='max-w-xl'>
                  <label className='flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none'>
                    <span className='flex items-center space-x-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-6 h-6 text-gray-600'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                        />
                      </svg>
                      <span className='font-medium text-gray-600'>
                        Drop files to Attach, or{' '}
                        <span className='text-blue-600 underline'>browse</span>
                      </span>
                    </span>
                    <input
                      type='file'
                      name='file_upload'
                      ref={imageFieldRef}
                      onChange={e => setImage(e.target.files ? e.target.files[0] : null)}
                      className='hidden'
                    />
                  </label>
                </div>
              )}
              {image && (
                <div className='flex'>
                  <button
                    onClick={() => {
                      setImage(null);
                      console.log(imageFieldRef.current);
                    }}
                    className={`block text-redpraha bg-red-50 hover:bg-redpraha hover:text-white rounded-xl px-5 py-2.5 text-center`}
                    type='button'
                    data-modal-toggle='defaultModal'>
                    Clear Image
                  </button>

                  <button
                    onClick={() => {
                      submitImage();
                    }}
                    className={`ml-5 block text-green-600 bg-green-50 hover:bg-green-800 hover:text-white rounded-xl px-5 py-2.5 text-center`}
                    type='button'
                    data-modal-toggle='defaultModal'>
                    Submit Image
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageUploadModal;
