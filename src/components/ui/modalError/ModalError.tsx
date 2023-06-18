import { FC } from "react";
import errorIcon from "../../../assets/error.svg";
import Modal from "../../common/modalWindow/ModalWindow";
import Button from "../../common/button/Button";
import iconClose from "../../../assets/iconClose.svg";
import style from "./modalError.module.scss";

type Props = {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    onClick?: () => void 
};

const ModalError: FC<Props> = ({ active, setActive, onClick }) => {

    return (
        <Modal active={active} setActive={setActive}>
            <div className={style.container}>
                <div className={style.title}>
                    <p>Ошибка</p>
                    <img className={style.close} src={iconClose} alt="закрыть" onClick={onClick}/>
                </div>
                <img className={style.error} src={errorIcon} alt="ошибка" />
                <div className={style.button}>
                    <Button
                        id="button-to-main"
                        onClick={onClick}
                        theme="primary"
                    >
                        Закрыть
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
 
export default ModalError;