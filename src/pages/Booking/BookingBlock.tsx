import {useEffect} from "react";
import {Row, Space, Spin} from 'antd';
import useApi from "../../hooks/useApi";
import {getEvents} from "../../api/bookings";
import {Event, EventDay} from "../../common/apiTypes";


const BookingBlock = () => {
  const eventsApi = useApi<EventDay>(getEvents);

  useEffect(() => {
      eventsApi.get();
    },
    []
  )

  //Whenever the eventsApi is loaded, we scroll to the row with the data.
  //This will be usefull in the future, when the user will be scrolled to the selected booking
  //based in the url params.
  useEffect(() => {
    const element = document.getElementById("intro") as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [eventsApi.data])


  const LoadingContent = () => {
    return (
      <Space size="middle">
        <Spin size="large"/>
      </Space>
    )
  }

  const ServicesContent = () => {
    console.log(eventsApi.data);
    const {data} = eventsApi;
    return (
      <>
        {
          data.map(function (day) {
            return Object.entries(day).map(function ([key, _value]) {
              return (
                <div key={key.toString()}>
                  <h1>
                    {key}
                  </h1>
                  {_value.map((event: Event) => {
                    return (
                      <div key={event.id.toString()}>
                        <p>
                          {"name: " + event.activity.name}
                        </p>
                        <p>
                          {"desc: " + event.activity.description}
                        </p>
                        <p>
                          {"capacity: " + event.available_capacity}
                        </p>
                        <p>
                          {"starts_at: " + event.str_start_time}
                        </p>
                        <p>
                          {"ends_at: " + event.str_end_time}
                        </p>
                        <p>
                          {"available: " + event.available}
                        </p>
                      </div>
                    )
                  })}
                </div>
              )
            })
          })}
      </>
    )
  }

  if (eventsApi.error) {
    return <div>Error</div>
  }

  return (
    <Row id={"intro"}>
      {eventsApi.isLoading ? <LoadingContent/> : <ServicesContent/>}
    </Row>
  );
}


export default BookingBlock;
