const SvgIcon = ({ id, svg }) => {
  return (
    <svg id={id} fill="white" width={30} height={30}>
      <use xlinkHref={`Icons.svg#${svg}`} />
    </svg>
  );
};

export default SvgIcon;
