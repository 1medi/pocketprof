import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import styles from "./OscarHome.module.css"

export default function OscarHome() {
  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'HOMEPAGE_OSCAR.json',
    });
  }, []);

  return (
    <>
      <div className={styles.lottieContainer}>
        <div className={styles.container} ref={animationContainer}></div>
      </div>
    </>
  );
}