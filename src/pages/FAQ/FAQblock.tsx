import {useEffect} from "react";
import {Space, Spin, Row} from 'antd';
import ContentBlock from "../../components/ContentBlock";
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
                        <h1>
                            {category.name}
                        </h1>
                        {category.faqs.map(function(faq){
                            return(
                                <div key= {faq.id.toString()}>
                                    <p>{"P: "+ faq.question}</p>
                                    <p>{"Q: "+ faq.answer}</p>
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
