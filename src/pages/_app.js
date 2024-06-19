import { setWebsiteIcon } from '@/utils';
import { useEffect } from 'react';
import '../globalStyle.scss';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // tableWidthAdaptation();
    setWebsiteIcon(document);
  }, []);

  return <Component {...pageProps} />;
}
