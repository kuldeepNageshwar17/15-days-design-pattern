/* eslint-disable react/prop-types */

export default function Modal({
  title,
  body,
  imageUrl,
  primaryAction,
  secondaryAction,
}) {
  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <div className="modal-header">{title}</div>
        <div className="modal-image">
          <img src={imageUrl} />
        </div>
        <p className="modal-body">{body}</p>
        <div className="modal-footer">
          {primaryAction}
          {secondaryAction}
        </div>
      </div>
    </div>
  );
}
