import {lazy} from "react";
import FAQBlock from "./FAQblock";
import Block from "../../components/Block";
import ContactContent from "../../content/ContactContent.json";
const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const FAQ = () => {
  return (
    <Container>
      <ScrollToTop/>
      <Block
        title = "Preguntas Frecuentes"
        content =""
        />
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