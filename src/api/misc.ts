//Here will be the API for the misc functions
// Contact form and FAQ

import client from "./client";

const getFAQ = () => client.get("api/faqcategories/");

export {
  getFAQ,
}