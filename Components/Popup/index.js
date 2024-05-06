import React, { useState } from 'react'
import styles from "./Popup.module.css"

export default function Popup({ onClose }) {
   const [accountName, setAccountName] = useState("");
   const [show, setShow] = useState(false);

   const handleChange = (fieldSetter, validationFunction) => (event) => {
      const value = event.target.value;
      fieldSetter(value);
  };

  const handleSubmit = () => {
      if (validate()) {
          setShow(true);
      }
  };

   function isValidAccountName(firstName) {
       return firstName.length >= 2;
   }




   return (
      <div className={styles.overlay}>
         <div className={styles.popup}>
            <div className={styles.content}>
            <form>
                    <div className={styles.form}>
                        <div className={styles.innerBox}>
                            <div className={styles.title}>Have any questions?</div>
                            <div className={styles.innerBox}></div>
                            <label className={styles.label}>Account Name:</label>
                            <input htmlFor="accountName" className={styles.input}
                                type="text"
                                name="firstName"
                                size="40"
                                value={accountName}
                                onChange={handleChange(setAccountName, isValidAccountName)}
                            />
                        </div>
                    </div>
      
            </form>
               <button className={styles.closeButton} onClick={onClose}>
               save
            </button>
            </div>
         </div>
      </div>
   );
};
