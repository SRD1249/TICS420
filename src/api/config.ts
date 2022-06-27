
const settings = {
  dev: {
    apiUrl: "http://localhost:8010",
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
