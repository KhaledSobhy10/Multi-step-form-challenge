import { FunctionComponent } from 'react';

interface IBackButtonProps {
    onClickHandler: () => void
}

const BackButton: FunctionComponent<IBackButtonProps> = (props) => {
    return <button className={`rounded-lg px-4 py-2  font-UbuntuMedium text-cool-gray hover:text-marine-blue w-fit`} onClick={props.onClickHandler} type="button">Go Back</button>;
};

export default BackButton;
