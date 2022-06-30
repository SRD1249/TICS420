//Here will be the API for the misc functions
// Contact form and FAQ

import client from "./client";
import {ContactForm} from "../common/apiTypes"

const getFAQ = () => client.get("api/faqcategories/");

const postContactForm = (_data: ContactForm) => client.post("api/contact/",_data);

export {
  getFAQ,
  postContactForm
}