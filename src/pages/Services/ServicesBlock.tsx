import {useEffect} from "react";
import {Space, Spin} from 'antd';
import ContentBlock from "../../components/ContentBlock";
import {Activity} from "../../common/apiTypes";
import useApi from "../../hooks/useApi";
import {getActivities} from "../../api/eventsAndActivities";


const ServicesBlock = () => {
  const activityApi = useApi<Activity[]>(getActivities);

  useEffect(() => {
      activityApi.get();
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

  const ServicesContent = () => {
    console.log(activityApi.data);
    return (
      <>
        {activityApi.data?.map((activity: Activity, index) => {
            const _type = index % 2 === 0 ? "left" : "right";
            return (<ContentBlock
                type={_type}
                id={activity.id.toString()}
                key={activity.id}
                title={activity.name}
                content={activity.description}
                icon={activity.image ? activity.image : "Cabalgata.png"}
              />
            )
          }
        )}
      </>
    )
  }

  if (activityApi.error) {
    return <div>Error</div>
  }

  return (
    activityApi.isLoading ? <LoadingContent/> : <ServicesContent/>
  );
}


export default ServicesBlock;
