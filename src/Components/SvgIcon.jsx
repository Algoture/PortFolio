const SvgIcon = ({ id, svg }) => {
  return (
    <svg id={id} fill="black" width={30} height={30}>
      <use xlinkHref={`Icons.svg#${svg}`} />
    </svg>
  );
};

export default SvgIcon;
