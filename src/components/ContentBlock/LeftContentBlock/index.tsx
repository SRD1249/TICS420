import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles";
//En esta parte definimos el ContentBlock para la parte Izquierda
const LeftContentBlock = ({
  icon,
  title,
  content,
  section,
  t,
  id,
}: ContentBlockProps) => {
  return (
    //En esta parte iniciamos el Left Content Section, incluimos "Fade" el cual es un efecto para asi enbellezer la pagina a los ojos
    // del visitante o lector. Modificamos exactamente la fila 43 en donde en Width y Height en vez de 60px los colocamos a 240px
    //Esto nos permite modificar los pixeles de las imagenes.
    //Observamos que el parametro "MinPara" influia en el texto que iba por debajo de las imagenes, el cual debiamos cambiar para que fuera legible a simple vista.
    //Este parametro lo modificamos exactamente en el archivo styles.ts
    <LeftContentSection>
      <Fade direction="left" triggerOnce={true}>
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="90%" height="90%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={30}>
                          <SvgIcon src={item.icon} width="240px" height="240px" />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara> 
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
