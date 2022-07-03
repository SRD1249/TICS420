//test
import {lazy} from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import ServicesBlock from "./ServicesBlock";
import Servicesintro from "../../content/Servicesintro.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Services = () => {

  return (
    <Container>
      <ScrollToTop/>
      
      <MiddleBlock
        title={Servicesintro.title}
        content={Servicesintro.text}
        button={Servicesintro.button}
      />
      <ServicesBlock/>
    </Container>
  );
};

export default Services;
