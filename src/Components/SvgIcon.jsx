const SvgIcon = ({ id, svg }) => {
  return (
    <svg id={id} width={30} height={30} fill="black">
      <use xlinkHref={`Icons.svg#${svg}`} />
    </svg>
  );
};

export default SvgIcon;
