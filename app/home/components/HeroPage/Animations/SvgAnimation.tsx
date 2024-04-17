import { useEffect } from 'react';

const SushiSVG = ({ path, containerId }) => {
  useEffect(() => {
    const isClient = typeof window !== 'undefined';
    if (!isClient) return;

    import('lottie-web').then((lottie) => {
      const animation = lottie.default.loadAnimation({
        container: document.getElementById(containerId),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: path,
      });
    });
  }, [path, containerId]);

  return <div id={containerId} />;
};

export default SushiSVG;