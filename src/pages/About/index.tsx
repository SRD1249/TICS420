import {lazy} from "react";
import ContactContent from "../../content/ContactContent.json";
import AboutContent from "../../content/AboutContent.json";
import AboutUS from "../../content/AboutUS.json";
import ValorSocial from "../../content/ValorSocial.json";
import DondeEstamos from "../../content/DondeEstamos.json";


const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const About = () => {
  return (
    <Container>
    <ScrollToTop/>
    <ContentBlock
      type = 'left'
      title={AboutContent.title}
      content={AboutContent.text}
      icon="equitacion.svg"
      id = 'about'
    />
    <ContentBlock
      type = 'right'
      title={AboutUS.title}
      content={AboutUS.text}
      icon="olmue.svg"
      id = 'about'
    />
    <ContentBlock
      type = 'left'
      title={ValorSocial.title}
      content={ValorSocial.text}
      section={ValorSocial.section}

      icon="unidos.svg"
      id = 'about'
    />
    <ContentBlock
      type = 'right'
      title={DondeEstamos.title}
      content={DondeEstamos.text}
      icon="mapa.svg"
      id = 'about'
    />
    <Contact
      title={ContactContent.title}
      content={ContactContent.text}
      id="contact"
      />
    </Container>
  );
};

export default About;
