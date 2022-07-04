import {useEffect} from "react";
import {Space, Spin, Row} from 'antd';
import Block from "../../components/Block";
import { FAQ, FAQCategories} from "../../common/apiTypes";
import useApi from "../../hooks/useApi";
import {getFAQ} from "../../api/misc";

const FAQBlock = () => {
    const faqApi = useApi<FAQCategories[]>(getFAQ);

    useEffect(()=>{
        faqApi.get();
      },
    []
    )

    const LoadingContent = () => {
        return (
            <Space size="middle">
                <Spin size = "large"/>
            </Space>
        )
    }

    const FAQContent = () => {

        const {data} = faqApi;
        return(
            <>  
                {data?.map(function (category){
                    return(
                    <div key={category.id.toString()}>
                        {category.faqs.map(function(faq){
                            return(
                                <div key= {faq.id.toString()}>
                                    <Block
                                    title={faq.question}
                                    content={faq.answer}
                                    />
                                </div>
                            )
                        })}
                    </div>)
                })}
            </>
        )
    }

    if (faqApi.error) {
        return <div>Error</div>
      }
      return (
        <Row id={"intro"}>
          {faqApi.isLoading ? <LoadingContent/> : <FAQContent/>}
        </Row>
      );
}

export default FAQBlock;
