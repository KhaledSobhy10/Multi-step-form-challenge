import { createContext, FC, useReducer, useState } from "react";
import { Step1DataType } from "./StepContent/Step1";
import { Step2DataType } from "./StepContent/Step2";
import { Step3DataType } from "./StepContent/Step3";
import { Step4DataType } from "./StepContent/Step4";

export enum Actions {
  GO_NEXT = "go_next",
  GO_BACK = "go_back",
  CHANGE_PLAN = "change_plan",
}

type ContextComplexType = {
  contextData: ContextDataType;
  dispatch: (stepActionWithPayload: StepAction) => void;
};

export type StepsObjectType = {
  step1_data?: Step1DataType;
  step2_data?: Step2DataType;
  step3_data?: Step3DataType;
  step4_data?: Step4DataType;
};

type ContextDataType = {
  currentStepId: number;
  stepsData?: StepsObjectType;
};

interface StepAction {
  type: Actions;
  payload?:
    | { step1_data?: Step1DataType }
    | { step2_data?: Step2DataType }
    | { step3_data?: Step3DataType }
    | { step4_data?: Step4DataType };
}

// Our reducer function that uses a switch statement to handle our actions
function stepReducer(state: ContextDataType, action: StepAction) {
  const { type, payload } = action;

  switch (type) {
    case Actions.GO_NEXT:
      const newStepData = { ...state.stepsData, ...payload };
      const newState = {
        stepsData: newStepData,
        currentStepId: state.currentStepId + 1,
      };
      return newState;
    case Actions.GO_BACK:
      return { ...state, currentStepId: state.currentStepId - 1 };
    case Actions.CHANGE_PLAN:
      return { ...state, currentStepId: 2 };

    default:
      return state;
  }
}

export const StepsContext = createContext<ContextComplexType | null>(null);

interface Props {
  children: React.ReactNode;
}
export const StepsContextProvider: FC<Props> = (props) => {
  const [stepsData, dispatch] = useReducer(stepReducer, {
    currentStepId: 1,
  });

  return (
    <StepsContext.Provider value={{ contextData: stepsData, dispatch }}>
      {props.children}
    </StepsContext.Provider>
  );
};

export default StepsContextProvider;
