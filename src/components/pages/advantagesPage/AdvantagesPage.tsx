import { FC } from "react";
import * as yup from "yup";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../store/hook/hook";
import { checkboxData, radioGroupData } from "../../../constants/dataInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { getAdvantagesData } from "../../../store/data/selector";
import { advantagesReceived } from "../../../store/data/data";
import { stepDecrease, stepIncrease } from "../../../store/step/step";
import { advantagesPageSchema } from "../../../constants/schema/advantagesPageSchema";
import TextInput from "../../common/inputs/textInput/TextInput";
import Button from "../../common/button/Button";
import Checkbox from "../../common/inputs/checkBox/CheckBox";
import RadioGroup from "../../common/inputs/radioGroup/RadioGroup";
import deleteIcon from "../../../assets/delete.svg";
import plusIcon from "../../../assets/plus.svg";
import style from "./advantagesPage.module.scss";

export type FormData = yup.InferType<typeof advantagesPageSchema>;

const AdvantagesPage: FC = () => {
    const dispatch = useAppDispatch();
    const advantages = useAppSelector(getAdvantagesData);
    const methods =  useForm<FormData>({
        defaultValues: {
            advantages: advantages.advantages,
            checkboxes: advantages.checkboxes,
            radioOption: advantages.radioOption
        },
        resolver: yupResolver(advantagesPageSchema)
    });
    const { handleSubmit, control, formState: { errors } } = methods;
    const { fields, append, remove } = useFieldArray<FormData>({
        control,
        name: "advantages"
    });
        
    const onSubmit = (data: FormData) => {
        dispatch(advantagesReceived(data));
        dispatch(stepIncrease());
    };

    const handleClick = () => {
        dispatch(stepDecrease());
    };

    return (
        <FormProvider {...methods}>
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <p>Advantages</p>
                    {fields.map((field, index) => (
                        <div key={field.id}>
                            <TextInput
                                id={`field-advatages-${index + 1}`}
                                name={`advantages[${index}].advantage`}
                            />
                            <img id={`button-remove-${index + 1}`} className={style.delete} src={deleteIcon} alt="удалить" onClick={() => remove(index)}/>
                            {errors.advantages && (
                                <p className={style.error_input}>{errors.advantages[index]?.advantage?.message}</p>
                            )}
                        </div>
                    ))}
                    <button
                        id="button add"
                        type="button"
                        className={style.plus_icon}
                        onClick={() => append({
                            advantage: ""
                        })}
                    >
                        <img src={plusIcon} alt="добавить" />
                    </button>
                </div>
                <Checkbox
                    name="Checkbox group"
                    nameInput="checkboxes"
                    data={checkboxData}
                    errorMessage={errors.checkboxes?.message || ""}
                />
                <RadioGroup
                    name="Radio Group"
                    nameInput="radioOption"
                    data={radioGroupData}
                    errorMessage={errors.radioOption?.message || ""}
                />
                <div className={style.buttons_group}>
                    <Button
                        id="button-back"
                        onClick={handleClick}
                        theme={"secondary"}
                    >
                        Back
                    </Button>
                    <Button
                        id="button-next"
                        theme="primary"
                    >
                        Далее
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};
 
export default AdvantagesPage;