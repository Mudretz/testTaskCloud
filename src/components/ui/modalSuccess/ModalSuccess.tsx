import { FC } from "react";
import successIcon from "../../../assets/success.svg";
import Modal from "../../common/modalWindow/ModalWindow";
import ButtonSubmit from "../../common/buttons/buttonSubmit/ButtonSubmit";
import style from "./modalSucces.module.scss";
import { useNavigate } from "react-router-dom";

type Props = {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
    message: string
};

const ModalSuccess: FC<Props> = ({ active, setActive, message }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <Modal active={active} setActive={setActive}>
            <div className={style.container}>
                <p>{message}</p>
                <img src={successIcon} alt="успешно" />
                <div onClick={handleClick}>
                    <ButtonSubmit
                        id="button-to-main"
                        text="На главную"
                    />
                </div>
            </div>
        </Modal>
    );
}
 
export default ModalSuccess;