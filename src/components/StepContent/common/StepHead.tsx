import * as React from 'react';

interface IStepHeadProps {
    title: string;
    description: string;
}


const StepHead: React.FunctionComponent<IStepHeadProps> = (props) => {
    return <div className="flex flex-col gap-3">
        <h1 className="font-UbuntuBold text-marine-blue sm:text-3xl text-2xl">{props.title}</h1>
        <h2 className="font-UbuntuRegular text-cool-gray">{props.description}</h2>
    </div>;
};

export default StepHead;
