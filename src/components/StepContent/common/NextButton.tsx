import * as React from 'react';

interface INextButtonProps {
    onClickHandler?: () => void
}

const NextButton: React.FunctionComponent<INextButtonProps> = (props) => {
    return <button className={`rounded-lg px-4 py-2 text-white font-UbuntuMedium bg-marine-blue hover:opacity-90 w-fit`} onClick={props.onClickHandler}>Next Step</button>;
};

export default NextButton;
