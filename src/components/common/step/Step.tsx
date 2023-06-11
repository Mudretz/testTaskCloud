import { FC } from "react";
import classNames from "classnames";
import vectorIcons from "../../../assets/vector.svg";
import style from "./step.module.scss";

type Props = {
    isCompleted: boolean,
    isActive: boolean,
    step: number
};

const Step: FC<Props> = ({ step, isCompleted, isActive }) => {
    return (
        <div className={style.step}>
            <div className={classNames(style.step_item,
                    { [style.active]: isActive || isCompleted })
                }
            >
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