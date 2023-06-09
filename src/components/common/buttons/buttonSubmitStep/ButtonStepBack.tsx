import { FC } from "react";
import { useAppDispatch } from "../../../../store/hook/hook";
import { stepDecrease } from "../../../../store/step/step";
import style from "./buttonStepBack.module.scss";

type Props = {
    id: string,
    text: string
};

const ButtonStepBack: FC<Props> = ({ id, text }) => {
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
            {text}
        </button>
    );
}
 
export default ButtonStepBack;