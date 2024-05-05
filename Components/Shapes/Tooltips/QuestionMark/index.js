import styles from "./QuestionMark.module.css"
import Image from "next/image"
import Question from "@/public/img/question.png"
import { useState } from "react";

export default function QuestionMark({
  tip
}) {
  const [tooltip, setTooltip] = useState();
  return (
    <>
      <div className={`${styles.tooltip}`}>

        <Image 
        height={32}
        width={32}
        src={Question}
        onMouseLeave={() => setTooltip()} onClick={() => setTooltip('copied')} className=
          {`${styles.tooltip_button}`}/>
        <div className={`${styles.tooltip_container}`}>
          <div className={`${styles.tooltip_text}`}>{tip}</div>
        </div>
      </div>
    </>
  )
}
