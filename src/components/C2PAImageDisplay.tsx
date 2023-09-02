import { useEffect, useState } from 'react';
import C2PAImageDisplayWithURL from './C2PAImageDisplayWithURL';

async function getBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      resolve(reader.result as string);
    };
    reader.onerror = reject;
  });
}

export default function C2PAImageDisplay({ image }: { image: File }) {
  const [imageURL, setImageURL] = useState<string | null>(null);

  useEffect(() => {
    if (!image) {
      setImageURL(null);
    } else {
      getBase64(image).then(url => {
        console.log(url);
        setImageURL(url);
      });
    }
  }, [image]);

  return <C2PAImageDisplayWithURL imageURL={imageURL} />;
}
