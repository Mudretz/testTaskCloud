import { FC } from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../store/hook/hook";
import { getAuthData } from "../../../store/data/selector";
import { authReceved } from "../../../store/data/data";
import { yupResolver } from '@hookform/resolvers/yup';
import { stepReceived } from "../../../store/step/step";
import { authorizationSchema } from "../../../constants/schema/authorizationPageSchema";
import HeaderAuth from "../../layouts/HeaderAuth/HeaderAuth";
import TextFormInput from "../../common/inputs/textFormInput.tsx/TextFormInput";
import MaskPhoneInput from "../../common/inputs/maskPhoneInput/MaskPhoneInput";
import style from "./authorizationPage.module.scss";
import Button from "../../common/button/Button";

type FormData = yup.InferType<typeof authorizationSchema>;

const AuthorizationPage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const authData = useAppSelector(getAuthData);
    const methods = useForm<FormData>({
            defaultValues: {
                phone: authData.phone,
                email: authData.email
            },
            resolver: yupResolver(authorizationSchema)
        });
    const { handleSubmit, formState: { errors } } = methods;

    const onSubmit = (data: FormData): void => {
        dispatch(authReceved(data));
        dispatch(stepReceived(1));
        navigate("/create");
    };

    return (
        <div className={style.container}>
            <HeaderAuth />
            <main className={style.main}>
                <FormProvider {...methods}>
                    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={style.form_item}>
                            <p>Номер телефона</p>
                            <MaskPhoneInput
                                name="phone"
                            />
                            <p className={style.error}>{errors.phone?.message || ""}</p>
                        </div>
                        <TextFormInput
                            id="field-email"
                            name="Email"
                            nameInput="email"
                            placeholder="tim.jennings@example.com"
                            errorMessage={errors.email?.message || ""}
                            underText=""
                        />
                        <Button
                            id="button-start"
                            theme="primary"
                        >
                            Начать
                        </Button>
                    </form>
                </FormProvider>
            </main>
        </div>
    );
};
 
export default AuthorizationPage;