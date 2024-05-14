import React, { useState } from 'react';
import styles from "./ColorMode.module.css";
import Button3 from '../../Buttons/Button3';
import RadioButton from '@/Components/Buttons/RadioButton';

const options = [
    { label: 'Light Mode', value: 'option1', color: 'black' },
    { label: 'Dark Mode', value: 'option2', color: 'black' },
];

export default function ColorMode({ onClose, onSave, style }) {

    const [selectedOption, setSelectedOption] = useState('option1');
    const handleOptionSelect = (value) => {
        setSelectedOption(value);
    };
    const handleSubmit = () => {
        if (selectedOption) {
            onSave(selectedOption);
        } else {
            alert("Please select an option.");
        }
    };

    return (
        <div className={styles.overlay} tabIndex={0}>
            <div className={styles.popupContainer} style={style}>
                <div className={styles.popup} style={style}>
                    <div>
                        <h1 className={styles.title} style={style}>Color Mode</h1>
                        <RadioButton options={options} onSelect={handleOptionSelect} style={style} tabIndex={1} />
                    </div>
                    <div className={styles.buttonInnerContainer} style={style}>
                        <div className={styles.buttonContainer} style={style}>
                            <Button3 className={styles.closeButton} name={"Save"} onClick={handleSubmit} style={style} tabIndex={2}>
                                Save
                            </Button3>
                            <Button3 name={"Close"} onClick={onClose} style={style} tabIndex={3}>
                                Close
                            </Button3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
