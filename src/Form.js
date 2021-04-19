import React, {useState} from 'react';
import FormSignup from './FormSignup';
import FormSucess from './FormSuccess';
import './Form.css';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
        <div className="form-container">
            <span className="close-btn">x</span>
            <div className="form-content-left">
                <img src="img/img-2.svg" alt="spaceship"
                className="form-img" />
            </div>
            {!isSubmitted ? (<FormSignup submitForm=
            {submitForm} />) : (<FormSucess />)}
        </div>       
        </>
    );
};

export default Form;
