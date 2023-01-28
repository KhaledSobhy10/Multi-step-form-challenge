import * as React from 'react';

interface INextButtonProps {
  onClickHandler?: () => void;
  text?: string;
  bgColor?: string;
}

const NextButton: React.FunctionComponent<INextButtonProps> = (props) => {
  return (
    <button
      className={`rounded-lg px-4 py-2 text-white font-UbuntuMedium bg-${
        props.bgColor ?? "marine-blue"
      } hover:opacity-90 w-fit active:scale-105`}
      onClick={props.onClickHandler}
      type="submit"
    >
      {props.text ?? "Next Step"}
    </button>
  );
};

export default NextButton;
