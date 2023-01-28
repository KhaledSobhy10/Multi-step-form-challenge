import * as React from 'react';
import Step1 from "../StepContent/Step1";
import Step2 from "../StepContent/Step2";
import Step3 from "../StepContent/Step3";
import Step4 from "../StepContent/Step4";
import { StepsContext } from "../StepsContext";

interface IStepsContainerProps {
  activeStepId: number;
  // goNext: (formData: Step1Data | any) => void;
}

const StepsContainer: React.FunctionComponent<IStepsContainerProps> = (
  props
) => {
  const myContext = React.useContext(StepsContext);

  switch (myContext?.contextData.currentStepId) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    default:
      return <Step4 />;
  }
};

export default StepsContainer;
