import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";

type Props = {
    name: string,
    placeHolder: string,
    id: string,
    options: Array<{
        value: string,
        label: string
    }>
};

const SelectInput: FC<Props> = ({ name, placeHolder, id, options }) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { value, onChange }
            }) => (
                <Select
                    id={id}
                    options={options}
                    value={value}
                    onChange={onChange}
                    classNamePrefix="react-select"
                    placeholder={placeHolder}
                    isSearchable={false}
                 />
            )}
        />
    );
};
 
export default SelectInput;