import React, {useEffect, useState} from "react";
import {notification} from "antd";
import axios from "axios";

export const useForm = (validate: any) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openSuccessNotificationWithIcon = () => {
    notification["success"]({
      message: "Success",
      description: "Your message has been sent!",
    });
  };

  const openFailNotificationWithIcon = () => {
    notification["error"]({
      message: "Error",
      description: "Your message has not been sent!" +
        "\n Please check your internet connection.",
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const _errors = validate(values);
    console.log(_errors);
    setErrors(_errors);
    if (Object.keys(_errors).length === 0) {
      // Your url for API
      const url = "";
      if (Object.keys(values).length === 3) {
        axios
          .post(url, {
            ...values,
          })
          .then(() => {
            setShouldSubmit(true);
          })
          .catch((error) => {
            console.log(error);
            openFailNotificationWithIcon();
          });
      }
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues("");
      openSuccessNotificationWithIcon();
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({...errors, [event.target.name]: ""}));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};
