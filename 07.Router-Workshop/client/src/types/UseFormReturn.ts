import { ChangeEvent, FormEvent } from "react";

export default interface UseFormReturn<T> {
    values: T;
    changeHandler: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    submitHandler: (e: FormEvent<HTMLFormElement>) => void;
}
