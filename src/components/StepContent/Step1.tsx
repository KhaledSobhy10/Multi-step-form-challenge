import { useFormik } from "formik";
import { FunctionComponent } from "react";
import * as Yup from "yup";

import CustomField from "./common/CustomField";
import NextButton from "./common/NextButton";
import StepHead from "./common/StepHead";

export type Step1Data = {
    name: string;
    email: string;
    phoneNumber: string;
};

interface IStep1Props {
    step1Data?: Step1Data;
    nextHandler: (data: Step1Data) => void;
}

const step1ValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("This field is required!"),
    email: Yup.string().email("Invalid email!").required("This field is required!"),
    "Phone number": Yup.string()
        .required("This field is required!")
        .min(4)
        .max(12).matches(/^[0-9]+$/, "Invalid Phone number"),
});

const Step1: FunctionComponent<IStep1Props> = (props) => {
    const { handleChange, handleSubmit, values, errors, touched } = useFormik({
        initialValues: {
            name: props.step1Data?.name || "",
            email: props.step1Data?.email || "",
            "Phone number": props.step1Data?.phoneNumber || "",
        },
        validationSchema: step1ValidationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            props.nextHandler({ ...values, phoneNumber: values["Phone number"] });
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
                    name="Phone number"
                    type="tel"
                    value={values["Phone number"]}
                    handleOnChange={handleChange}
                    error={errors["Phone number"]}
                    isTouched={touched["Phone number"]}
                />

                <div className={`flex justify-end mt-auto`}>
                    {/* <BackButton
                        onClickHandler={() => {
                            console.log("hello");
                        }}
                    ></BackButton> */}
                    <NextButton />
                </div>
            </form>
        </div>
    );
};

export default Step1;
