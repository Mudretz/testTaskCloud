import { FC } from "react";
import successIcon from "../../../assets/success.svg";
import Modal from "../../common/modalWindow/ModalWindow";
import style from "./modalSucces.module.scss";
import Button from "../../common/button/Button";

type Props = {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
    message: string,
    onClick?: () => void
};

const ModalSuccess: FC<Props> = ({ active, setActive, message, onClick }) => {

    return (
        <Modal active={active} setActive={setActive}>
            <div className={style.container}>
                <p>{message}</p>
                <img src={successIcon} alt="успешно" />
                <Button
                    id="button-to-main"
                    onClick={onClick}
                    theme="primary"
                >
                    На главную
                </Button>
            </div>
        </Modal>
    );
}
 
export default ModalSuccess;