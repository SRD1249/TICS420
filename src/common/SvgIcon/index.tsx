import {SvgIconProps} from "../types";

export const SvgIcon = ({src, width, height}: SvgIconProps) => {
  if (src.includes("http")) {
    return <img src={src} width={width} height={height} alt={src}/>;
  }
  return (
    <img src={`/img/svg/${src}`} alt={src} width={width} height={height}/>
  );
}
