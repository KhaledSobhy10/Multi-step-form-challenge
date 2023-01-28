import { useFormik } from "formik";
import { FunctionComponent, useContext } from "react";
import * as Yup from "yup";
import { StepsContext } from "../StepsContext";
import { Actions } from "../StepsContext";
import ButtonsContainer from "./common/ButtonsContainer";
import CustomField from "./common/CustomField";
import NextButton from "./common/NextButton";
import StepHead from "./common/StepHead";

export type Step1DataType = {
  name: string;
  email: string;
  phoneNumber: string;
};

interface IStep1Props {
  nextHandler: (data: Step1DataType) => void;
}

const step1ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("This field is required!"),
  email: Yup.string()
    .email("Invalid email!")
    .required("This field is required!"),
  phoneNumber: Yup.string()
    .required("This field is required!")
    .min(4)
    .max(12)
    .matches(/^[0-9]+$/, "Invalid Phone number"),
});

const Step1: FunctionComponent<IStep1Props> = (props) => {
  const myContext = useContext(StepsContext);

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      name: myContext?.contextData.stepsData?.step1_data?.name || "",
      email: myContext?.contextData.stepsData?.step1_data?.email || "",
      phoneNumber:
        myContext?.contextData.stepsData?.step1_data?.phoneNumber || "",
    },
    validationSchema: step1ValidationSchema,
    onSubmit: (values) => {
      const data: Step1DataType = {
        ...values,
      };
      myContext?.dispatch({
        type: Actions.GO_NEXT,
        payload: { step1_data: data },
      });
    },
  });

  return (
    <div className="flex flex-col gap-8 py-3 sm:px-8 px-2 h-full ">
      {/* Head of form */}
      <StepHead
        title="Personal info"
        description="Please provide your name, email address and phone number ."
      />
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col md:gap-4 gap-2 flex-1"
      >
        {/* Name field */}
        <CustomField
          name="name"
          type="text"
          value={values.name}
          handleOnChange={handleChange}
          error={errors.name}
          isTouched={touched.name}
        />

        {/* Email field*/}
        <CustomField
          name="email"
          type="email"
          value={values.email}
          handleOnChange={handleChange}
          error={errors.email}
          isTouched={touched.email}
        />

        {/* Phone number field */}
        <CustomField
          name="phoneNumber"
          title="phone number"
          type="tel"
          value={values.phoneNumber}
          handleOnChange={handleChange}
          error={errors.phoneNumber}
          isTouched={touched.phoneNumber}
        />
        <ButtonsContainer>
          <NextButton />
        </ButtonsContainer>
      </form>
    </div>
  );
};

export default Step1;
