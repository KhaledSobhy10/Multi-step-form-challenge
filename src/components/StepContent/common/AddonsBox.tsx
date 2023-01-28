import * as React from "react";
import { ADD_ONS } from "../Step3";
import CustomCheckBox from "./CustomCheckBox";

interface IAddonsBoxProps {
  isChecked: boolean;
  isMonthly: boolean;
  name: string;
  handleOnChange: (e: React.FocusEvent<any>) => void;
  addonsData: ADD_ONS;
}

const formatPrice = (addonsData: ADD_ONS, isMonthly: boolean): string => {
  const price = addonsData.price[isMonthly ? "monthly" : "yearly"];
  const suffix = isMonthly ? "mo" : "yr";
  return `+$${price}/${suffix}`;
};
const AddonsBox: React.FunctionComponent<IAddonsBoxProps> = (props) => {
  return (
    <label>
      <div
        className={`rounded-lg w-full min-h-20 border flex justify-center items-center px-2 sm:px-6 py-2 sm-py-4 sm:gap-4 gap-2 ${
          props.isChecked
            ? "border-purplish-blue bg-magnolia "
            : "border-light-gray"
        } cursor-pointer hover:border-purplish-blue hover:bg-magnolia `}
      >
        <input
          type="checkbox"
          name={props.name}
          className="hidden"
          onChange={props.handleOnChange}
        />
        <CustomCheckBox isChecked={props.isChecked} />
        <div className="flex-1">
          <strong className="text-marine-blue font-UbuntuMedium">
            {props.addonsData.title}
          </strong>
          <p className="text-cool-gray">{props.addonsData.description}</p>
        </div>
        <span className="text-purplish-blue font-UbuntuMedium">
          {formatPrice(props.addonsData, props.isMonthly)}
        </span>
      </div>
    </label>
  );
};

export default AddonsBox;
