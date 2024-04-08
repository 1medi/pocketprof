import styles from "./Button3.module.css"

export default function Button3({
  name
}){
  return (
    <>
    <button className={styles.button}>{name}</button>
    </>
  )
}