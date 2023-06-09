import { FC } from "react";
import Step from "../../common/step/Step";
import style from "./steper.module.scss";

type Props = {
    activeStep: number
};

const Steper: FC<Props> = ({ activeStep }) => {
    return (
        <div className={style.steper}>
            <Step
                step={1}
                isCompleted={activeStep > 1}
                isActive={activeStep === 1}
            />
            <div
                className={`
                    ${style.line_first}
                    ${activeStep > 1 && style.completed}
                `}>
            </div>
            <Step
                step={2}
                isCompleted={activeStep > 2}
                isActive={activeStep === 2}
            />
            <div
                className={`
                    ${style.line_second}
                    ${activeStep > 2 && style.completed}
                `}>
            </div>
            <Step
                step={3}
                isCompleted={activeStep > 3}
                isActive={activeStep === 3}
            />
        </div>
    );
};
 
export default Steper;