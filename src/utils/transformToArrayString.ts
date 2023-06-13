import { IAdvantagesInputs } from "../store/data/type.data";

export const transformToArrayString = (data: IAdvantagesInputs[]): string[] => {
    const result: string[] = [];
    for (let i=0; i < data.length; i++) {
        result.push(data[i].advantage);
    };
    return result;
};