//test
import {lazy} from "react";
import BookingBlock from "./BookingBlock";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Services = () => {
  return (
    <Container>
      <ScrollToTop/>
      <BookingBlock/>
    </Container>
  );
};

export default Services;
