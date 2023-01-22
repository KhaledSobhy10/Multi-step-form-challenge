import * as React from 'react';
import Step1 from '../StepContent/Step1';
import Step5 from '../StepContent/Step5';
import Step2 from '../StepContent/Step2';
import Step3 from '../StepContent/Step3';
import Step4 from '../StepContent/Step4';

interface IStepsContainerProps {
    activeStepId: number;
}

const StepsContainer: React.FunctionComponent<IStepsContainerProps> = (props) => {
    switch (props.activeStepId)
    {
        case 1: return <Step1 nextHandler={() => { }} />
        case 2: return <Step2 />
        case 3: return <Step3 />
        case 4: return <Step4 />
        default: return <Step5 />
    }
};

export default StepsContainer;
