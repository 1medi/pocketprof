import React, { useState } from 'react';
import styles from "./FontSize.module.css"; 
import Button3 from '../../Buttons/Button3';
import RadioButton from '@/Components/Buttons/RadioButton';

const fontSizeOptions = [
    { label: 'Small', value: 'small'},
    { label: 'Medium', value: 'medium'},
    { label: 'Large', value: 'large'},
];

export default function FontSize({ onClose, onSave, style }) {
    const [selectedFontSize, setSelectedFontSize] = useState('medium');

    const handleFontSizeSelect = (value) => {
        setSelectedFontSize(value);
    };

    const handleSubmit = () => {
        if (selectedFontSize) {
            onSave(selectedFontSize);
        } else {
            alert("Please select a font size.");
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.popupContainer} style={style}>
                <div className={styles.popup} style={style}>
                    <div>
                    <h1 className={styles.title} style={style}>Select Font Size</h1>
                    <RadioButton options={fontSizeOptions} onSelect={handleFontSizeSelect} style={style} tabIndex={1}/>
                    </div>
                    <div className={styles.buttonInnerContainer} style={style}>
                        <div className={styles.buttonContainer}>
                            <Button3 name={"Save"} onClick={handleSubmit} style={style} tabIndex={2} >
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
}
