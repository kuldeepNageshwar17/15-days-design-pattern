/* eslint-disable react/prop-types */
export default function Modal({ children, isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        {children}
        <button
          type="button"
          className="modal-close"
          aria-label="Close modal"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
}

function Header({ children }) {
  return <div className="modal-header">{children}</div>;
}

function Image({ children }) {
  return <div className="modal-imager">{children}</div>;
}
function Body({ children }) {
  return <div className="modal-body">{children}</div>;
}
function Footer({ children }) {
  return <div className="modal-footer">{children}</div>;
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
Modal.Image = Image;
