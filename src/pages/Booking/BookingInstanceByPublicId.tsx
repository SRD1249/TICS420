import {useEffect} from "react";
import {Button, Row, Space, Spin} from 'antd';
import useApi from "../../hooks/useApi";
import {getBookingInstance,getBookingConfirm,getBookingCancel} from "../../api/bookings";
import {BookingInstance, BookingInstanceByPublicIdProps} from "../../common/apiTypes";
import { ButtonContainer } from "../../components/ContactForm/styles";


const BookingInstanceByPublicId = ({publicId}: BookingInstanceByPublicIdProps) => {
  const bookingApi = useApi<BookingInstance>(getBookingInstance);
  const confirmBookingApi = useApi(getBookingConfirm);
  const cancelBookingApi = useApi(getBookingCancel);
  
  useEffect(() => {
      bookingApi.get(publicId);
    },
    []
  )
  function handleConfirm(){
    confirmBookingApi.get(publicId);
  }

  function handleCancel(){
    cancelBookingApi.get(publicId);
  }

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
          {bookingApi.data?.event.activity.name}
        </p>
        <p>
          {bookingApi.data?.client.first_name} {bookingApi.data?.client.last_name}
        </p>
        <p>
          {bookingApi.data?.is_confirmed ? "Confirmed" : "Not Confirmed"}
        </p>
        <p>
          {bookingApi.data?.is_cancelled ? "Cancelled" : "Not Cancelled"}
        </p>
        <ButtonContainer>
          <Button name = 'confirm' onClick={()=>handleConfirm()}>Confirm</Button>
          <Button name = 'cancel' onClick={()=>handleCancel()}>Cancel</Button>
        </ButtonContainer>
      </div>
    )
  }

  if (bookingApi.error) {
    return (<h1>
      {"La reserva solicitada no existe"}
    </h1>)
  }

  return (
    <Row id={"intro"}>
      {bookingApi.isLoading ? <LoadingContent/> : <BookingInstance/>}
    </Row>
  );
}


export default BookingInstanceByPublicId;
