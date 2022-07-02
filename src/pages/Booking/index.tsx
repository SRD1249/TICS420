//test
import {lazy} from "react";
import BookingBlock from "./BookingBlock";
import {useParams} from "react-router-dom";
import {publicIdParam} from "../../common/types";
import BookingInstanceByPublicId from "./BookingInstanceByPublicId";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Services = () => {
  const {publicId} = useParams<publicIdParam>();

  return (
    <Container>
      <ScrollToTop/>
      <BookingBlock/>
      {publicId && <BookingInstanceByPublicId publicId={publicId}/>}
    </Container>
  );
};

export default Services;
