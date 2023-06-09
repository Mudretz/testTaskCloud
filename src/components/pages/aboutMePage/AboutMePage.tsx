import { FC, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../../store/hook/hook";
import { aboutMeReceved, clearStateData } from "../../../store/data/data";
import { aboutMeSchema, maxStringCount} from "../../../constants/schema/aboutMePageSchema";
import ButtonStepBack from "../../common/buttons/buttonSubmitStep/ButtonStepBack";
import ButtonSubmit from "../../common/buttons/buttonSubmit/ButtonSubmit";
import ModalSuccess from "../../ui/modalSuccess/ModalSuccess";
import ModalError from "../../ui/modalError/ModalError";
import style from "./aboutMePage.module.scss";
import { usePostDataMutation } from "../../../services/apiReduxQuery";

type FormData = yup.InferType<typeof aboutMeSchema>;

const AboutMePage: FC = () => {
    const [active, setActive] = useState<boolean>(false);
    const [nameWindow, setNameWindow] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [ postData ] = usePostDataMutation();
    const dispatch = useAppDispatch();
    const { register, handleSubmit } = useForm<FormData>({
        resolver: yupResolver(aboutMeSchema)
    });
    const [stringCount, setStringCount] = useState(0);

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputText = e.target.value;
        setStringCount(inputText.length);
    };

    const onSubmit = async (data: FormData) => {
        dispatch(aboutMeReceved(data.about));
        try {
            const result = await postData({}).unwrap();
            if (result.status === "success") {
                dispatch(clearStateData());
                setMessage(result.message);
                setNameWindow("success");
                setActive(true);
            }
        } catch (error) {
            setNameWindow("error");
            setActive(true);
        };
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.form_item}>
                    <p>About</p>
                    <textarea
                        className={style.text_area}
                        {...register("about")}
                        onChange={handleTextAreaChange}
                    >         
                    </textarea>
                    <p>{stringCount}/{maxStringCount}</p>
                </div>
                <div className={style.buttons_group}>
                    <ButtonStepBack
                        id="button-back"
                        text="Назад"
                    />
                    <ButtonSubmit
                        id="button-next"
                        text="Отправить"
                    />
                </div>
            </form>
            {nameWindow === "success" &&
                <ModalSuccess active={active} setActive={setActive} message={message}/>
            }
            {nameWindow === "error" &&
                <ModalError active={active} setActive={setActive}/>
            }
        </div>
    );
};
 
export default AboutMePage;