import { useC2pa } from '@contentauth/react';
import { C2paReadResult, generateVerifyUrl, L2ManifestStore, createL2ManifestStore } from 'c2pa';
import 'c2pa-wc/dist/components/Icon';
import 'c2pa-wc/dist/components/Indicator';
import 'c2pa-wc/dist/components/ManifestSummary';
import 'c2pa-wc/dist/components/PanelSection';
import 'c2pa-wc/dist/components/Popover';
import { ManifestSummary } from 'c2pa-wc/dist/components/ManifestSummary';
import { useEffect, useRef, useState } from 'react';

interface WebComponentsProps {
  imageUrl: string;
  provenance: C2paReadResult;
  viewMoreUrl: string;
}

function WebComponents({ imageUrl, provenance, viewMoreUrl }: WebComponentsProps) {
  const [manifestStore, setManifestStore] = useState<L2ManifestStore | null>(null);
  const summaryRef = useRef<ManifestSummary>();

  useEffect(() => {
    let disposeFn = () => {
      console.log('Disposal Function');
    };

    if (!provenance.manifestStore?.activeManifest) {
      return;
    }

    createL2ManifestStore(provenance.manifestStore).then(({ manifestStore, dispose }) => {
      setManifestStore(manifestStore);
      disposeFn = dispose;
    });

    return disposeFn;
  }, [provenance.manifestStore?.activeManifest]);

  useEffect(() => {
    const summaryElement = summaryRef.current;
    if (summaryElement && manifestStore) {
      summaryElement.manifestStore = manifestStore;
      summaryElement.viewMoreUrl = viewMoreUrl;
    }
  }, [summaryRef, manifestStore]);

  return (
    <div className='web-components'>
      <div className='wrapper'>
        <img src={imageUrl} />
        {manifestStore ? (
          <div>
            <cai-popover interactive class='theme-spectrum'>
              <cai-indicator slot='trigger'></cai-indicator>
              <cai-manifest-summary
                ref={summaryRef}
                slot='content'
                class='theme-spectrum'></cai-manifest-summary>
            </cai-popover>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function C2PAImageDisplayWithURL({ imageURL }: { imageURL: string | null }) {
  const provenance = useC2pa(imageURL || '');
  const viewMoreUrl = generateVerifyUrl(imageURL || '');

  if (!imageURL || !provenance?.manifestStore || !viewMoreUrl) return <></>;

  return <WebComponents imageUrl={imageURL} provenance={provenance} viewMoreUrl={viewMoreUrl} />;
}
