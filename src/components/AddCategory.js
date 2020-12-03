import React, { useState } from 'react'
import Protypes from 'prop-types';
export const AddCategory = ( { setCategories } ) => {


    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }


    const handleSubmit = (e) =>{
        e.preventDefault();

        if ( inputValue.trim().length>1) {
        //console.log('Submit realizado')
        setCategories( cats => [ inputValue, ...cats, ]);
        setInputValue('');
        }
    }

    return (
        <form onSubmit= { handleSubmit }>
            {/*<h1> { inputValue }</h1> */}

            <input
            type="text"
            value= {inputValue}
            onChange= { handleInputChange }
            ></input>

        </form>
    )
}



AddCategory.Protypes ={
    setCategories: Protypes.func.isRequired
}