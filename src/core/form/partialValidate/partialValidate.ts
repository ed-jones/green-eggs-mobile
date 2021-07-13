import { FieldPath, UseFormReturn } from "react-hook-form";
import { Rules } from "../controlled-input/ControlledInput";

interface IValidate<InputType> {
  form: UseFormReturn<InputType>;
  validate: FieldPath<InputType>[] | FieldPath<InputType>;
  register: FieldPath<InputType>;
  onValid: () => void;
}

const partialValidate = <InputType>({form, validate, register, onValid }: IValidate<InputType>) => {
  form.trigger(validate).then((isValid) => {
      if (isValid) {
        form.register(register, {
          value: form.getValues(register),
        });
        onValid();
      }
    }
  );
}

export default partialValidate;