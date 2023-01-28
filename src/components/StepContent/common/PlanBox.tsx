import * as React from "react";
import { Plan } from "../Step2";

interface IPlanBoxProps {
  isChecked: boolean;
  planData: Plan;
  handleOnChange: (e: React.FocusEvent<any>) => void;
}

const PlanBox: React.FunctionComponent<IPlanBoxProps> = (props) => {
  return (
    <label
      className={`border rounded-lg sm:w-1/3  ${
        props.isChecked
          ? "border-purplish-blue bg-magnolia"
          : "border-light-gray"
      } cursor-pointer hover:border-purplish-blue hover:bg-magnolia`}
    >
      <input
        type="radio"
        name="selectedPlan"
        value={props.planData.id}
        className="hidden"
        onChange={props.handleOnChange}
        checked={props.isChecked}
      />
      <div
        className={`flex sm:flex-col flex-row sm:justify-between justify-start gap-2 items-start sm:h-[190px] h-fit w-full p-2 `}
      >
        <img src={props.planData.iconUrl} />
        <div className="flex flex-col justify-center items-start">
          <strong className="text-xl text-marine-blue font-UbuntuBold">
            {props.planData.name}
          </strong>
          <span className="text-cool-gray"> {props.planData.price}</span>
          {props.planData.offer && (
            <span className="text-marine-blue font-UbuntuMedium">
              {props.planData.offer}
            </span>
          )}
        </div>
      </div>
    </label>
  );
};

export default PlanBox;
