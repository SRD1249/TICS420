
const settings = {
  dev: {
    apiUrl: "http://20.226.97.169",
  },
  staging: {
    apiUrl: "",
  },
  prod: {
    apiUrl: "",
  },
};

const getCurrentSettings = () => {
  return settings.dev;
};

export default getCurrentSettings();
