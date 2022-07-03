import client from "./client";

const getEvents = () => client.get("api/event/");

const getBookingInstance = (publicId: string) => client.get(`api/booking/${publicId}/`);

const getBookingConfirm = (publicId: string) => client.get(`api/booking/${publicId}/confirm/`);
const getBookingCancel = (publicId: string) => client.get(`api/booking/${publicId}/cancel/`);

export {
  getEvents,
  getBookingInstance,
  getBookingConfirm,
  getBookingCancel
}
