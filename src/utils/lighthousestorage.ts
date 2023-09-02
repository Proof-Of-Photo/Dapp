import lighthouse from '@lighthouse-web3/sdk';

const apiKey = process.env.NEXT_PUBLIC_LIGHTHOUSE_STORAGE_KEY || '';

export async function uploadImage(image: File) {
  const uploadResponse = await lighthouse.uploadBuffer(image, apiKey);
  return `https://gateway.lighthouse.storage/ipfs/${uploadResponse.data.Hash}`;
}
