import client from "./client";

const getEvents = () => client.get("api/event/");

export {
  getEvents,
}
