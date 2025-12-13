/* eslint-disable react/prop-types */
export default function Card({ title, subtitle, image, children, footer }) {
  return (
    <div className={`card-container`}>
      <div className="card-image">
        <img src={image} alt={title || "card image"} />
      </div>
      <div className="card-header">
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
      </div>
      <div className="card-body">{children}</div>
      <div className="card-footer">{footer}</div>
    </div>
  );
}
