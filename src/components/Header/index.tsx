//Se genera y se define el header de la página (parte superior)
import {useState} from "react";
import {Col, Drawer, Row} from "antd";
import {withTranslation} from "react-i18next";
import Container from "../../common/Container";
import {SvgIcon} from "../../common/SvgIcon";
import {Button} from "../../common/Button";
import {useHistory} from "react-router-dom";

import {
  Burger,
  CustomNavLinkSmall,
  HeaderSection,
  Label,
  LogoContainer,
  Menu,
  NotHidden,
  Outline,
  Span,
} from "./styles";

const Header = ({t}: any) => {
  const [visible, setVisibility] = useState(false);

  const history = useHistory();

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall onClick={() => history.push('/about')}>
          <Span>{t("Sobre Nosotros")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("mission")}>
          <Span>{t("Servicios")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <Span>{t("Reservas")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{width: "180px"}}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button>{t("Contact")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="unknown.png" width="200px" height="90px"/>
          </LogoContainer>
          <NotHidden>
            <MenuItem/>
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline/>
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{marginBottom: "2.5rem"}}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline/>
              </Col>
            </Label>
          </Col>
          <MenuItem/>
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
