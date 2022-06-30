import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;
  if (!values.first_name) {
    errors.first_name = "First Name is required";
  }
  if (!values.last_name) {
    errors.last_name = "Last name is required";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.message) {
    errors.message = "Message is required";
  }
  return errors;
}
