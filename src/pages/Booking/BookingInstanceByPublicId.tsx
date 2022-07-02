import {useEffect} from "react";
import {Row, Space, Spin} from 'antd';
import useApi from "../../hooks/useApi";
import {getBookingInstance} from "../../api/bookings";
import {BookingInstance, BookingInstanceByPublicIdProps} from "../../common/apiTypes";


const BookingInstanceByPublicId = ({publicId}: BookingInstanceByPublicIdProps) => {
  const eventsApi = useApi<BookingInstance>(getBookingInstance);

  useEffect(() => {
      eventsApi.get(publicId);
    },
    []
  )


  const LoadingContent = () => {
    return (
      <Space size="middle">
        <Spin size="large"/>
      </Space>
    )
  }

  const BookingInstance = () => {
    return (
      <div>
        <h1>
          {"Booking Instance"}
        </h1>
        <p>
          {eventsApi.data?.event.activity.name}
        </p>
        <p>
          {eventsApi.data?.client.first_name} {eventsApi.data?.client.last_name}
        </p>
        <p>
          {eventsApi.data?.is_confirmed ? "Confirmed" : "Not Confirmed"}
        </p>
        <p>
          {eventsApi.data?.is_cancelled ? "Cancelled" : "Not Cancelled"}
        </p>
      </div>
    )
  }

  if (eventsApi.error) {
    return (<h1>
      {"La reserva solicitada no existe"}
    </h1>)
  }

  return (
    <Row id={"intro"}>
      {eventsApi.isLoading ? <LoadingContent/> : <BookingInstance/>}
    </Row>
  );
}


export default BookingInstanceByPublicId;
