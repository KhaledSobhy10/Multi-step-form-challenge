import * as React from 'react';


export interface Step {
    id: number;
    title: string;
    description: string;

}

export interface IDesktopIndicatorProps {
    steps: Step[];
    activeStepId: number;
}

export const DesktopIndicator: React.FunctionComponent<IDesktopIndicatorProps> = (props) => {
    return <div className=" cursor-not-allowed sm:flex flex-col gap-2 hidden border sm:w-1/3 w-full rounded-lg bg-desktopIndicator bg-no-repeat bg-cover p-1 sm:p-2 md:p-4 overflow-auto">
        {
            props.steps.map((step, index) =>
                <div key={step.id} className={`text-white p-1 sm:p-2 flex md:gap-4 gap-2 flex-wrap`}>
                    <span className={`transition-colors	ease-in-out ${step.id === props.activeStepId ? "bg-pastel-blue text-marine-blue" : "border"} font-UbuntuBold  text-base flex items-center justify-center rounded-full w-9 h-9 place-self-center`}>{step.id}</span>
                    <div className={`flex flex-col`}>
                        <h1 className={`text-cool-gray uppercase font-UbuntuRegular text-sm `}>{step.title}</h1>
                        <h2 className={`font-UbuntuBold uppercase text-base `}>{step.description}</h2>
                    </div>
                </div>)
        }
    </div>;
};

