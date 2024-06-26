import styles from "./Pencil.module.css"

export default function Pencil(){ 
    return (
      <svg
        xmlns="http://www.w3.org/1999/xlink"
        className={styles.pencil}
        fill="none"
        viewBox="0 0 512 512"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    );
  };
