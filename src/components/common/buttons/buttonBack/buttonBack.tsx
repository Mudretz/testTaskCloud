import { FC } from "react";
import { useNavigate } from "react-router-dom";
import style from "./buttonBack.module.scss";

type Props = {
    id: string,
    text: string
};

const ButtonBack: FC<Props> = ({ id, text }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={style.button}
            id={id}
        >
            {text}
        </button>
    );
}
 
export default ButtonBack;