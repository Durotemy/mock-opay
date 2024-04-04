import React from "react";
import { useFormikContext } from "formik";

import Button from "../Button";

const SubmitButton = ({ text, ...rest }: any) => {
  const { handleSubmit } = useFormikContext();

  return <Button text={text} onPress={handleSubmit} {...rest} />;
}

export default SubmitButton;
