import { ChangeEvent, FormEvent, useState } from "react";
import UseFormReturn from "../types/UseFormReturn";

export function useForm<T>(
  initialValues: T,
  submitCallback: (values: T) => void
): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues);

  const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    submitCallback(values);
  };

  return {
    values,
    changeHandler,
    submitHandler,
  };
}
