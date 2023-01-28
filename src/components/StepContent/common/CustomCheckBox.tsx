import * as React from "react";
import checkMark from "../../../assets/images/icon-checkmark.svg";
interface ICustomCheckBoxProps {
  isChecked: boolean;
}

const CustomCheckBox: React.FunctionComponent<ICustomCheckBoxProps> = ({
  isChecked,
}) => {
  return (
    <div
      className={`border rounded border-pastel-blue w-[22px] h-[22px] ${
        isChecked ? "bg-purplish-blue" : "bg-white"
      } flex justify-center items-center`}
    >
      {isChecked && <img src={checkMark} />}
    </div>
  );
};

export default CustomCheckBox;
