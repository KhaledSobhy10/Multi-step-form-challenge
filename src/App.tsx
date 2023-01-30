
import { useReducer, useState } from "react";
import "./App.css";
import { DesktopIndicator, Step } from './components/StepIndicator/Desktop';
import { MobileIndicator } from "./components/StepIndicator/Mobile";
import StepsContainer from "./components/StepsContainer";
import StepsContextProvider from "./components/StepsContext";
import { cloneArray1LEVEL } from "./utilities/array_helper";

const NEXT = "next";
const BACK = "back";

const goNext = (state: Step[]): Step[] => {
  const result = cloneArray1LEVEL(state);
  const activeStep = result.findIndex((step) => step.isActive);
  console.log("activeStep ", activeStep);

  if (activeStep > -1 && activeStep < result.length) {
    result[activeStep].isActive = false;
    result[activeStep + 1].isActive = true;
  }
  return result;
};

const goBack = (state: Step[]): Step[] => {
  const result = cloneArray1LEVEL(state);
  const activeStep = result.findIndex((step) => step.isActive);
  if (activeStep > -1 && activeStep < result.length) {
    result[activeStep].isActive = false;
    result[activeStep - 1].isActive = true;
  }
  return result;
};

const reducer = (state: Step[], action: string) => {
  switch (action) {
    case NEXT:
      return goNext(state);
    case BACK:
      return goBack(state);
    default:
      return state;
  }
};

const StepsInfo = [
  {
    id: 1,
    title: "step 1",
    description: "your info",
  },
  {
    id: 2,
    title: "step 2",
    description: "select plan",
  },
  {
    id: 3,
    title: "step 3",
    description: "add-ons",
  },
  {
    id: 4,
    title: "step 4",
    description: "summary",
  },
];
function App() {
  const [currentStep, setCurrentStep] = useState(4);
  // const [steps, dispatch] = useReducer(reducer, initSteps)
  // const [formData, setFormData] = useReducer(reducer, initFormData);
  return (
    <StepsContextProvider>
      <main className="w-screen h-screen bg-light-blue flex items-center justify-center relative">
        <div className="sm:hidden w-full h-1/5 border absolute  top-0 bg-blue-500">
          <MobileIndicator steps={StepsInfo} />
        </div>
        <div className="z-10 2xl:w-2/4   sm:w-3/4 sm:h-3/4 h-3/4 w-11/12  bg-white rounded-lg flex p-2 sm:p-4">
          <DesktopIndicator steps={StepsInfo} />
          <div className="w-3/4 flex-1 p-2 sm:p-4">
            <StepsContainer activeStepId={currentStep} />
          </div>
        </div>
      </main>
    </StepsContextProvider>
  );
}

export default App;

