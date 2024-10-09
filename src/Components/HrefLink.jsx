import SvgIcon from "./SvgIcon";
const HrefLink = ({ id, svg, to }) => {
  return (
    <a href={to} target="_blank" className="iconBox">
      <SvgIcon id={id} svg={svg} />
    </a>
  );
};

export default HrefLink;
