import * as React from 'react';
import { StepsContext } from "../StepsContext";
import { Step } from "./Desktop";

interface IMobileIndicatorProps {
  steps: Step[];
}

export const MobileIndicator: React.FunctionComponent<IMobileIndicatorProps> = (
  props
) => {
  const myContext = React.useContext(StepsContext);

  return (
    <div className="w-full h-full bg-mobileIndicator bg-cover flex items-start justify-center pt-5">
      {props.steps.map((step, index) => (
        <div
          key={step.id}
          className={`text-white p-1 sm:p-2 flex md:gap-4 gap-2 w-fit  `}
        >
          <span
            className={`transition-colors	ease-in-out ${
              step.id === myContext?.contextData.currentStepId
                ? "bg-pastel-blue text-marine-blue"
                : "border"
            } font-UbuntuBold  text-base flex items-center justify-center rounded-full w-9 h-9 `}
          >
            {step.id}
          </span>
        </div>
      ))}
    </div>
  );
};

