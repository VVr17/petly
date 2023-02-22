import React from 'react';
import InputField from 'components/Ui-Kit/Input';


const LoginInputs = () => {
    return (
        <div>
            <InputField name="email" type="email" placeholder="Email" />
            <InputField name="password" type="password" placeholder="Password" />
        </div>
    );
};

export default LoginInputs;