import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import styles from "./Oscar.module.css"

export default function Oscar() {
  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'ilovehao.json',
    });
  }, []);

  return (
    <>
        <div className={styles.container} style={{ height: '300px', width: '300px' }}ref={animationContainer}></div>
    </>
  );
}