import { FC } from "react";
import style from "./step.module.scss";
import vectorIcons from "../../../assets/vector.svg";

type Props = {
    isCompleted: boolean,
    isActive: boolean,
    step: number
};

const Step: FC<Props> = ({ step, isCompleted, isActive }) => {
    return (
        <div className={style.step}>
            <div className={`${style.step_item} ${(isActive || isCompleted)&& style.active}`}>
                {isActive &&
                    <div className={style.dot}></div>
                }
                {isCompleted &&
                    <img src={vectorIcons} alt="галочка" />
                }
            </div>
            <div className={style.number}>{step}</div>
        </div>
    );
}
 
export default Step;