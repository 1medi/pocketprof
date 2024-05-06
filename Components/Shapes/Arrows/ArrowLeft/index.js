import styles from "./ArrowLeft.module.css"
import { useRouter } from 'next/router'; 

export default function ArrowLeft() {
  const router = useRouter(); 

  return (
    <>
    <div 
    className={styles.arrowLeft} 
    onClick={() => router.back()} 
    style={{
            position: 'absolute',
            cursor: 'pointer'
        }}>
        </div>
    </>
  )
}
