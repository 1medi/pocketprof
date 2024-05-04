import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import styles from "./OscarHome.module.css"

export default function OscarHome() {
  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'HOMEPAGE_OSCAR.json',
    });
  }, []);

  return (
    <>
        <div className={styles.container} style={{ height: '200px', width: '200px' }}ref={animationContainer}></div>
    </>
  );
}