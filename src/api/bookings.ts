import client from "./client";

const getEvents = () => client.get("api/event/");

const getBookingInstance = (publicId: string) => client.get(`api/booking/${publicId}/`);

export {
  getEvents,
  getBookingInstance
}
