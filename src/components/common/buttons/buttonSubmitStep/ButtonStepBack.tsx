import { FC } from "react";
import { useAppDispatch } from "../../../../store/hook/hook";
import { stepDecrease } from "../../../../store/step/step";
import style from "./buttonStepBack.module.scss";

type Props = {
    id: string,
    children: string
};

const ButtonStepBack: FC<Props> = ({ id, children }) => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(stepDecrease());
    };

    return (
        <button
            type="submit"
            className={style.button}
            id={id}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}
 
export default ButtonStepBack;