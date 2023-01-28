import Fireworks from "@fireworks-js/react";
import { FunctionComponent, useEffect, useState } from "react";
import thankYouIcon from "../../assets/images/icon-thank-you.svg";
import { Transition } from "@headlessui/react";
export interface IThankYouProps {}

const ThankYou: FunctionComponent<IThankYouProps> = (props) => {
  const [showFireWorks, setShowFireWorks] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowFireWorks(false);
    }, 3000);
  }, []);
  return (
    <div className="relative flex flex-col sm:gap-4 gap-2 py-3 sm:px-8 px-2 h-full  justify-center items-center">
      <Transition
        className="absolute top-0 bg-transparent"
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        show={showFireWorks}
      >
        <Fireworks
          options={{
            rocketsPoint: {
              min: 2,
              max: 5,
            },
          }}
        />
      </Transition>

      <img src={thankYouIcon} />
      <strong className="text-2xl text-marine-blue text-UbuntuBold">
        Thank you!
      </strong>
      <p className="text-cool-gray text-center lg:p-4 md:p-2 p-1">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYou;
