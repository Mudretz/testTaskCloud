import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";

type Props = {
    name: string,
    placeholder: string,
    id: string,
    options: Array<{
        value: string,
        label: string
    }>
};

const SelectInput: FC<Props> = ({ name, placeholder, id, options }) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { value, onChange }
            }) => (
                <Select
                    inputId={id}
                    instanceId={`field-sex-option-${value}`}
                    options={options}
                    value={value}
                    onChange={onChange}
                    classNamePrefix="react-select"
                    placeholder={placeholder}
                    isSearchable={false}
                 />
            )}
        />
    );
};
 
export default SelectInput;