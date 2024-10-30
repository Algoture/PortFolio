const SvgIcon = ({ id, svg }) => {
  return (
    <div className="holaSVG">
      <svg id={id} fill="black">
        <use xlinkHref={`Icons.svg#${svg}`} />
      </svg>
    </div>
  );
};

export default SvgIcon;
