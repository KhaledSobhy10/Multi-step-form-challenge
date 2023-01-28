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
      return <Step1 nextHandler={() => {}} />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 isMonthly="true" />;
    default:
      return (
        <Step4
          plan={{ title: "Arcade(Yearly)", price: "$90/yr" }}
          addons={[
            { title: "Online service", price: "$20/yr" },
            { title: "Large storage", price: "$20/yr" },
          ]}
          total={{ title: "Total (per year)", price: "$130/yr" }}
        />
      );
  }
};

export default StepsContainer;
