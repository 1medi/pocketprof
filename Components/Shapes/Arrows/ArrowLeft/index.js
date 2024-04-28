import styles from "./ArrowLeft.module.css"

export default function ArrowLeft({
  top,
  left,
  right,
  bottom
}){
  const arrowStyle = {
    top,
    left,
    right,
    bottom
  };
  return (
    <>
    <div className={styles.arrowLeft} style={arrowStyle}></div>
    </>
  )
}