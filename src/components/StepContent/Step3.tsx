import * as React from 'react';
import BackButton from "./common/BackButton";
import NextButton from "./common/NextButton";
import StepHead from "./common/StepHead";
import { useFormik } from "formik";
import CustomCheckBox from "./common/CustomCheckBox";
import AddonsBox from "./common/AddonsBox";
import { useContext } from "react";
import { Actions, StepsContext } from "../StepsContext";
import ButtonsContainer from "./common/ButtonsContainer";

export type Step3DataType = {
  addons_1: boolean;
  addons_2: boolean;
  addons_3: boolean;
};
export interface IStep3Props {}

export type ADD_ONS = {
  id: string;
  title: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
};

export const ADD_ONS_LIST: ADD_ONS[] = [
  {
    id: "addons_1",
    title: "Online service",
    description: "Access to multiplayer games .",
    price: { monthly: 1, yearly: 10 },
  },
  {
    id: "addons_2",
    title: "Large storage",
    description: "Extra 1TB of cloud save .",
    price: { monthly: 2, yearly: 20 },
  },
  {
    id: "addons_3",
    title: "Customizable profile",
    description: "Custom theme on your profile .",
    price: { monthly: 2, yearly: 20 },
  },
];

const Step3: React.FunctionComponent<IStep3Props> = (props) => {
  const myContext = useContext(StepsContext);
  const step3Data = myContext?.contextData.stepsData?.step3_data;
  const { handleChange, handleSubmit, values, errors, touched, setFieldValue } =
    useFormik({
      initialValues: step3Data ?? {
        addons_1: false,
        addons_2: false,
        addons_3: false,
      },
      onSubmit: (values) => {
        myContext?.dispatch({
          type: Actions.GO_NEXT,
          payload: { step3_data: values },
        });
      },
    });

  return (
    <div className="flex flex-col gap-8 py-3 sm:px-8 px-2 h-full ">
      {/* Head of form */}
      <StepHead
        title="Pick add-ons"
        description="Add-ons help enhance your  gaming experience ."
      />
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col md:gap-4 gap-2 flex-1 w-full overflow-auto"
      >
        <div className="w-full flex flex-col gap-2 sm:gap-4">
          <AddonsBox
            name="addons_1"
            isChecked={values.addons_1}
            isMonthly={
              myContext?.contextData.stepsData?.step2_data?.isMonthly ?? true
            }
            addonsData={ADD_ONS_LIST[0]}
            handleOnChange={handleChange}
          />
          <AddonsBox
            name="addons_2"
            isChecked={values.addons_2}
            isMonthly={
              myContext?.contextData.stepsData?.step2_data?.isMonthly ?? true
            }
            addonsData={ADD_ONS_LIST[1]}
            handleOnChange={handleChange}
          />
          <AddonsBox
            name="addons_3"
            isChecked={values.addons_3}
            isMonthly={
              myContext?.contextData.stepsData?.step2_data?.isMonthly ?? true
            }
            addonsData={ADD_ONS_LIST[2]}
            handleOnChange={handleChange}
          />
        </div>
        <ButtonsContainer extraStyle=" justify-between ">
          <>
            <BackButton
              onClickHandler={() => {
                myContext?.dispatch({ type: Actions.GO_BACK });
              }}
            ></BackButton>
            <NextButton />
          </>
        </ButtonsContainer>
      </form>
    </div>
  );
};

export default Step3;
