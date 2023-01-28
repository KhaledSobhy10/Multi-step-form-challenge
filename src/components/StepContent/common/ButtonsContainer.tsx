import * as React from "react";

interface IButtonsContainerProps {
  children: React.ReactNode;
  extraStyle?: string;
}

const ButtonsContainer: React.FunctionComponent<IButtonsContainerProps> = (
  props
) => {
  return (
    <div
      className={`flex justify-end mt-auto ${props.extraStyle} sm:relative fixed left-0 bottom-0 sm:p-0 px-8 py-3 w-full bg-white`}
    >
      {props.children}
    </div>
  );
};

export default ButtonsContainer;
