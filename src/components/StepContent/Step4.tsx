import { FunctionComponent, useContext, useState } from "react";
import StepHead from "./common/StepHead";
import NextButton from "./common/NextButton";
import BackButton from "./common/BackButton";
import ThankYou from "./ThankYou";
import { Transition } from "@headlessui/react";
import { Actions, StepsContext, StepsObjectType } from "../StepsContext";
import { BillingType, PLANS } from "./Step2";
import { ADD_ONS_LIST } from "./Step3";
import ButtonsContainer from "./common/ButtonsContainer";
export type Step4DataType = {
  plan: { title: string; price: string };
  addons?: { title: string; price: string }[];
  total: { title: string; price: string };
};
export interface IStep4Props {}

const formatPrice = (price?: string | number, isMonthly?: boolean): string => {
  return `$${price ?? 0}/${isMonthly ? "mo" : "yr"}`;
};

const formatData = (stepsData?: StepsObjectType): Step4DataType => {
  let totalPrice = 0;
  const isMonthly = stepsData?.step2_data?.isMonthly;

  const possiblePlans =
    PLANS[isMonthly ? BillingType.MONTHLY : BillingType.YEARLY];

  const selectedPlanId = stepsData?.step2_data?.selectedPlan ?? "-1";
  const planObject = possiblePlans.find((plan) => plan.id === selectedPlanId);

  totalPrice += Number(planObject?.price.replace(/[^0-9]/g, ""));

  const plan = {
    title: `${planObject?.name} (${planObject?.billingType})`,
    price: planObject?.price ?? "0",
  };

  const addonsObject = stepsData?.step3_data;
  let formattedAddons: { title: string; price: string }[] = [];
  if (addonsObject) {
    Object.entries(addonsObject).forEach(([key, value]) => {
      if (value) {
        const addons = ADD_ONS_LIST.find((addons) => addons.id === key);
        if (addons) {
          const price = addons.price[isMonthly ? "monthly" : "yearly"] ?? 0;
          totalPrice += price;
          formattedAddons.push({
            title: addons.title,
            price: formatPrice(price, isMonthly),
          });
        }
      }
    });
  }

  return {
    plan,
    addons: formattedAddons,
    total: {
      title: `Total (per ${isMonthly ? "month" : "year"})`,
      price: formatPrice(totalPrice, isMonthly),
    },
  };
};
const Step4: FunctionComponent<IStep4Props> = (props) => {
  const [showThankYou, setShowThankYou] = useState(false);
  const myContext = useContext(StepsContext);
  const data = formatData(myContext?.contextData.stepsData);
  return (
    <>
      <Transition
        show={!showThankYou}
        className="h-full"
        enterFrom="opacity-100"
        enterTo="opacity-0"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="flex flex-col gap-8 py-3 sm:px-8 px-2 h-full overflow-auto">
          {/* Head of form */}
          <StepHead
            title="Finishing up "
            description="Double-check everything looks OK before confirming ."
          />

          <div className="flex flex-col flex-1 md:gap-2 gap-4 ">
            <div className="bg-magnolia rounded md:p-6 sm:p-4 p-2 flex flex-col md:gap-6 gap-2">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className=" text-marine-blue font-UbuntuBold">
                    {data.plan.title}
                  </span>
                  <span
                    className="text-cool-gray underline cursor-pointer"
                    onClick={() => {
                      myContext?.dispatch({ type: Actions.CHANGE_PLAN });
                    }}
                  >
                    Change
                  </span>
                </div>
                <span className="text-marine-blue font-UbuntuBold">
                  {data.plan.price}
                </span>
              </div>
              <div className="border-t  pt-4 flex flex-col gap-2">
                {data.addons?.map(({ title, price }) => (
                  <div key={title} className="flex justify-between">
                    <span className="text-cool-gray">{title}</span>
                    <span className="text-marine-blue font-UbuntuRegular">
                      {price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:p-6 sm:p-4 p-2  flex justify-between">
              <span className="text-cool-gray">{data.total.title}</span>
              <span className="text-purplish-blue text-xl font-UbuntuBold">
                {data.total.price}
              </span>
            </div>
          </div>
          <ButtonsContainer extraStyle=" justify-between ">
            <>
              <BackButton
                onClickHandler={() => {
                  myContext?.dispatch({ type: Actions.GO_BACK });
                }}
              ></BackButton>
              <NextButton
                text="Confirm"
                bgColor="purplish-blue"
                onClickHandler={() => setShowThankYou((prev) => !prev)}
              />
            </>
          </ButtonsContainer>
        </div>
      </Transition>
      <Transition
        show={showThankYou}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100 h-full"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ThankYou />
      </Transition>
    </>
  );
};

export default Step4;
