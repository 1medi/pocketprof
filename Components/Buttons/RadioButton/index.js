import React, { useState } from 'react';
import styles from "./RadioButton.module.css";


export default function RadioButtons({ options, onSelect }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        onSelect(value);
    };

    return (
        <div>
            {options.map((option) => (
                <div key={option.value}>
                    <input
                        type="radio"
                        id={option.value}
                        name="radioButtons"
                        value={option.value}
                        checked={selectedOption === option.value}
                        onChange={handleOptionChange}
                    />
                    <label
                        className={styles.label} 
                        htmlFor={option.value}
                        style={{ color: option.color }}
                    >{option.label}</label>
                </div>
            ))}
        </div>
    );
};