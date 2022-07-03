import {lazy} from "react";
import FAQBlock from "./FAQblock";
import ContactContent from "../../content/ContactContent.json";
const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const FAQ = () => {
  return (
    <Container>
      <ScrollToTop/>
      <FAQBlock/>
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default FAQ;