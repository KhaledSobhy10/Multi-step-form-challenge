import { BillingType } from "../Step2";
import { useState, FunctionComponent } from "react";
interface ICustomSwitchProps {
  isMonthly: boolean;
  handleOnChange: (e: React.FocusEvent<any>) => void;
}

const CustomSwitch: FunctionComponent<ICustomSwitchProps> = (props) => {
  return (
    <div className="border rounded-lg w-full p-2 flex sm:gap-4 gap-2 items-center justify-center bg-magnolia font-UbuntuBold">
      <span
        className={`${props.isMonthly ? "text-marine-blue" : "text-cool-gray"}`}
      >
        {BillingType.MONTHLY}
      </span>
      <label className="bg-marine-blue rounded-xl w-12 h-6 relative cursor-pointer">
        <input
          type="checkbox"
          className="hidden"
          name="isMonthly"
          onChange={props.handleOnChange}
        />
        <div
          className={`bg-white rounded-full w-4 h-4  absolute top-1 left-0 transition-transform	${
            props.isMonthly ? "translate-x-1" : "translate-x-7"
          }`}
        ></div>
      </label>
      <span
        className={`${props.isMonthly ? "text-cool-gray" : "text-marine-blue"}`}
      >
        {BillingType.YEARLY}
      </span>
    </div>
  );
};

export default CustomSwitch;
