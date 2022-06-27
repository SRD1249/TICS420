import client from "./client";


const getActivities = () => client.get("api/activity/");


export {
  getActivities,
};

