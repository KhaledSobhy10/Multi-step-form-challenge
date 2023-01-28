import StepHead from "./common/StepHead";
import NextButton from "./common/NextButton";
import BackButton from "./common/BackButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import PlanBox from "./common/PlanBox";
import CustomSwitch from "./common/CustomeSwitch";
import { FunctionComponent, useContext, useEffect } from "react";
import { Actions, StepsContext } from "../StepsContext";
import ButtonsContainer from "./common/ButtonsContainer";

export enum BillingType {
  MONTHLY = "Monthly",
  YEARLY = "Yearly",
}

export type Step2DataType = {
  isMonthly: boolean;
  selectedPlan: string;
};

export type Plan = {
  id: string;
  name: string;
  billingType: BillingType;
  iconUrl: string;
  price: string;
  offer?: string;
};

export const PLANS = {
  Monthly: [
    {
      id: "1",
      name: "Arcade",
      billingType: BillingType.MONTHLY,
      iconUrl: "src/assets/images/icon-arcade.svg",
      price: "$9/mo",
    },
    {
      id: "2",
      name: "Advanced",
      billingType: BillingType.MONTHLY,
      iconUrl: "src/assets/images/icon-advanced.svg",
      price: "$12/mo",
    },
    {
      id: "3",
      name: "Pro",
      billingType: BillingType.MONTHLY,
      iconUrl: "src/assets/images/icon-pro.svg",
      price: "$15/mo",
    },
  ],
  Yearly: [
    {
      id: "4",
      name: "Arcade",
      billingType: BillingType.YEARLY,
      iconUrl: "src/assets/images/icon-arcade.svg",
      price: "$90/yr",
      offer: "2 months free",
    },
    {
      id: "5",
      name: "Advanced",
      billingType: BillingType.YEARLY,
      iconUrl: "src/assets/images/icon-advanced.svg",
      price: "$120/yr",
      offer: "2 months free",
    },
    {
      id: "6",
      name: "Pro",
      billingType: BillingType.YEARLY,
      iconUrl: "src/assets/images/icon-pro.svg",
      price: "$150/yr",
      offer: "2 months free",
    },
  ],
};

export interface IStep2Props {
  next: (selectedPlan: Plan) => void;
}

const step1ValidationSchema = Yup.object().shape({
  selectedPlan: Yup.string().required(),
  isMonthly: Yup.bool().required(),
});

const Step2: FunctionComponent<IStep2Props> = (props) => {
  const myContext = useContext(StepsContext);

  const { handleChange, handleSubmit, values, errors, touched, setFieldValue } =
    useFormik({
      initialValues: {
        selectedPlan:
          myContext?.contextData.stepsData?.step2_data?.selectedPlan ??
          PLANS.Monthly[0].id,
        isMonthly:
          myContext?.contextData.stepsData?.step2_data?.isMonthly ?? true,
      },
      validationSchema: step1ValidationSchema,
      onSubmit: (values) => {
        const data: Step2DataType = { ...values };
        myContext?.dispatch({
          type: Actions.GO_NEXT,
          payload: { step2_data: data },
        });
      },
    });

  const getBillingType = (isMonthly: boolean) =>
    isMonthly ? BillingType.MONTHLY : BillingType.YEARLY;

  useEffect(() => {
    const planId = Number(values.selectedPlan);
    if (values.isMonthly && planId <= 3) {
      return;
    } else if (!values.isMonthly && planId > 3) {
      return;
    }
    const newValue = values.isMonthly
      ? PLANS.Monthly[0].id
      : PLANS.Yearly[0].id;

    setFieldValue("selectedPlan", newValue);
  }, [values.isMonthly]);
  return (
    <div className="flex flex-col gap-8 py-3 sm:px-8 px-2 h-full ">
      {/* Head of form */}
      <StepHead
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col md:gap-4 gap-2 flex-1 overflow-auto"
      >
        <div className="flex gap-5 w-100 p-1 sm:flex-row flex-col ">
          <PlanBox
            handleOnChange={handleChange}
            isChecked={
              PLANS[getBillingType(values.isMonthly)][0].id ===
              values.selectedPlan
            }
            planData={PLANS[getBillingType(values.isMonthly)][0]}
          />
          <PlanBox
            handleOnChange={handleChange}
            isChecked={
              PLANS[getBillingType(values.isMonthly)][1].id ===
              values.selectedPlan
            }
            planData={PLANS[getBillingType(values.isMonthly)][1]}
          />
          <PlanBox
            handleOnChange={handleChange}
            isChecked={
              PLANS[getBillingType(values.isMonthly)][2].id ===
              values.selectedPlan
            }
            planData={PLANS[getBillingType(values.isMonthly)][2]}
          />
        </div>
        <CustomSwitch
          isMonthly={values.isMonthly}
          handleOnChange={handleChange}
        />
        <ButtonsContainer extraStyle=" justify-between ">
          <>
            <BackButton
              onClickHandler={() => {
                myContext?.dispatch({
                  type: Actions.GO_BACK,
                });
              }}
            />
            <NextButton />
          </>
        </ButtonsContainer>
      </form>
    </div>
  );
};

export default Step2;
