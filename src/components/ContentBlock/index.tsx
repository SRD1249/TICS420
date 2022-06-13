//Se define el bloque de contendido que contiene los bloques izquierdo y derecho.
import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  return null;
};

export default ContentBlock;
