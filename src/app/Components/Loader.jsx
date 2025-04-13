import "./loader.css";

const Loader = () => (
  <div className="spinner">
    {[...Array(12)].map((_, i) => (
      <div key={i} className="spinner-blade"></div>
    ))}
  </div>
);

export default Loader;
