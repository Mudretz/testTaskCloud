import { FC } from "react";
import errorIcon from "../../../assets/error.svg";
import Modal from "../../common/modalWindow/ModalWindow";
import ButtonSubmit from "../../common/buttons/buttonSubmit/ButtonSubmit";
import style from "./modalError.module.scss";

type Props = {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>
};

const ModalError: FC<Props> = ({ active, setActive }) => {

    const handleClick = () => {
        setActive(false);
    };

    return (
        <Modal active={active} setActive={setActive}>
            <div className={style.container}>
                <p>Ошибка</p>
                <img src={errorIcon} alt="успешно" />
                <div className={style.button} onClick={handleClick}>
                    <ButtonSubmit
                        id="button-to-main"
                        text="Закрыть"
                    />
                </div>
            </div>
        </Modal>
    );
}
 
export default ModalError;