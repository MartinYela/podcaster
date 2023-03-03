import { useState, ChangeEvent } from "react";

type FormValues = {
  [key: string]: string;
};

type UseFormReturnType = [
  FormValues,
  (event: ChangeEvent<HTMLInputElement>) => void,
  () => void
];

export const useForm = (
  initialState: FormValues = {}
): UseFormReturnType => {
  const [formValues, setFormValues] = useState<FormValues>(initialState);

  const reset = (): void => {
    setFormValues(initialState);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  return [formValues, handleInputChange, reset];
};