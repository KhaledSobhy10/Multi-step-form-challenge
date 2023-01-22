import * as React from 'react';
import ErrorMessage from './ErrorMessage';

interface ICustomFieldProps {
    name: string;
    type: string;
    handleOnChange: (e: React.FocusEvent<any>) => void;
    value: string;
    error: string | undefined;
    isTouched: boolean | undefined
}

const CustomField: React.FunctionComponent<ICustomFieldProps> = (props) => {
    return <div className="flex flex-col gap-2">
        <div className="flex justify-between">
            <label htmlFor={props.name} className="text-marine-blue capitalize font-UbuntuMedium ">
                {props.name}
            </label>

            <ErrorMessage error={props.error} isTouched={props.isTouched} />

        </div>
        <input
            name={props.name}
            type={props.type}
            onChange={props.handleOnChange}
            value={props.value}
            className={`text-marine-blue font-UbuntuMedium border ${(props.error && props.isTouched) ? " border-strawberry-red outline-none" : "border-cool-gray outline-purplish-blue"}  py-2 px-4 rounded-lg text `}
        />
    </div>;
};

export default CustomField;
