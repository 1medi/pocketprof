import styles from "./CategoriesButton.module.css";
import Image from "next/image";

export default function CategoryButton({
    title = "",
    backgroundImage
}) {

    const buttonBackground = {
        backgroundImage: `url(${backgroundImage})`
    };

    return (
        <div className={styles.button__container} style={buttonBackground}>
            <button className={styles.category__button}>
                <div className={styles.heading__container}>
                    <h3 className={styles.button__heading}>
                        {title}
                    </h3>
                </div>
            </button>
        </div>
    )
}