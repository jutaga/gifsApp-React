import { useState } from "react";


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const newInputValue = inputValue.trim();

        if(newInputValue.length <= 1) return;  

        onNewCategory(newInputValue);
        setInputValue('');

    };

    return (

        <form onSubmit={onSubmit} >
            <input value={inputValue} onChange={onInputChange} type="text" className="form-control mb-2" placeholder="Search Gifs" />
        </form>
    )
}


