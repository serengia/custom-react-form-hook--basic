import { useState } from "react";

const useForm = (validateValueFun) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValueFun(value);

  const hasError = isTouched && !isValid;

  const changeInputHandler = (e) => {
    setValue(e.target.value);
  };

  const blurInputHandler = () => {
    setIsTouched(true);
  };

  const rest = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value: value,
    isValid: isValid,
    hasError: hasError,
    changeInputHandler,
    blurInputHandler,
    rest,
  };
};

export default useForm;
