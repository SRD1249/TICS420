import {lazy} from "react";
import FAQBlock from "./FAQblock";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const FAQ = () => {
  return (
    <Container>
      <ScrollToTop/>
      <FAQBlock/>
    </Container>
  );
};

export default FAQ;