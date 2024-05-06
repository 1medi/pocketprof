import React, { useState } from 'react';
import styles from "./Popup.module.css";
import Button3 from '../Buttons/Button3';

export default function Popup({ onClose, onSave }) {
    const [accountName, setAccountName] = useState("");

    const handleChange = (event) => {
        setAccountName(event.target.value);
    };

    const handleSubmit = () => {
        if (isValidAccountName(accountName)) {
            onSave(accountName);
            onClose();
        } else {
            alert("Account name must be at least 2 characters long.");
        }
    };

    function isValidAccountName(name) {
        return name.length >= 2;
    }

    return (
        <div className={styles.overlay} tabIndex={-1}>
            <div className={styles.popupContainer}>
                <div className={styles.popup}>
                    <form onSubmit={(e) => e.preventDefault()} tabIndex={0}>
                        <div className={styles.form}>
                            <div className={styles.innerBox}>
                                <div>
                                    <p className={styles.title}>New Account Name:</p>
                                </div>
                                <input htmlFor="accountName" className={styles.input}
                                    type="text"
                                    name="firstName"
                                    size="40"
                                    value={accountName}
                                    onChange={handleChange}
                                    tabIndex={1} 
                                />
                            </div>
                        </div>
                    </form>
                    <div className={styles.buttonInnerContainer}>
                        <div className={styles.buttonContainer}>
                            <Button3 className={styles.closeButton} name={"Save"} onClick={handleSubmit} tabIndex={2}>
                                Save
                            </Button3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
