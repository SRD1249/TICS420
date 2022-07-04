import { withTranslation } from "react-i18next";
import { Container, TextWrapper, Content, MinTitle } from "./styles";

interface Props {
  title: string;
  content: string;
  t: any;
}

const Block = ({ title, content, t}: Props) => {
  return (
    <Container>
      <MinTitle>{t(title)}</MinTitle>
      <TextWrapper>
        <Content>{t(content)}</Content>
      </TextWrapper>
    </Container>
  );
};

export default withTranslation()(Block);
