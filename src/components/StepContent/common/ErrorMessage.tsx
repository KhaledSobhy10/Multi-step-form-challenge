import * as React from 'react';

interface IErrorMessageProps {
    error?: string;
    isTouched?: boolean;

}

const ErrorMessage: React.FunctionComponent<IErrorMessageProps> = ({ error, isTouched }) => {
    if (error && isTouched)
    {
        return <span className=" flex  text-strawberry-red font-UbuntuMedium text-sm ">
            {error}
        </span>
    } else return null
}

export default ErrorMessage;
