import { FC } from "react";
import * as yup from "yup";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../store/hook/hook";
import { checkboxData, radioGroupData } from "../../../constants/dataInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { getAdvantagesData } from "../../../store/data/selector";
import { advantagesReceved } from "../../../store/data/data";
import { stepIncrease } from "../../../store/step/step";
import { advantagesPageSchema } from "../../../constants/schema/advantagesPageSchema";
import TextInput from "../../common/inputs/textInput/TextInput";
import ButtonSubmit from "../../common/buttons/buttonSubmit/ButtonSubmit";
import ButtonStepBack from "../../common/buttons/buttonSubmitStep/ButtonStepBack";
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
        dispatch(advantagesReceved(data));
        dispatch(stepIncrease());
    };

    return (
        <FormProvider {...methods}>
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <p>Advantages</p>
                    {fields.map((field, index) => (
                        <div key={field.id}>
                            <TextInput
                                name={`advantages[${index}].advantage`}
                                placeHolder="Placeholder"
                                id={field.id}
                            />
                            <img className={style.delete} src={deleteIcon} alt="удалить" onClick={() => remove(index)}/>
                            {errors.advantages && errors.advantages[index] && errors.advantages[index]?.advantage && (
                                <p className={style.error_input}>{errors.advantages[index]?.advantage?.message || ""}</p>
                            )}
                        </div>
                    ))}
                    <div 
                        className={style.plus_icon}
                        onClick={() => append({
                            advantage: ""
                        })}
                    >
                        <img src={plusIcon} alt="добавить" />
                    </div>
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
                    <ButtonStepBack id="button-back">
                        Back
                    </ButtonStepBack>
                    <ButtonSubmit id="button-next">
                        Далее
                    </ButtonSubmit>
                </div>
            </form>
        </FormProvider>
    );
};
 
export default AdvantagesPage;