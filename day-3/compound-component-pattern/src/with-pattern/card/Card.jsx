/* eslint-disable react/prop-types */

export default function Card({ children, className = "" }) {
  return <div className={`card-container ${className}`.trim()}>{children}</div>;
}

function Header({ children }) {
  return (
    <div className="card-header">
      <h2>{children}</h2>
    </div>
  );
}

function SubHeader({ children }) {
  return <h4 className="card-subheader">{children}</h4>;
}

function Image({ children }) {
  return <div className="card-image">{children}</div>;
}

function Body({ children }) {
  return <div className="card-body">{children}</div>;
}

function Footer({ children }) {
  return <div className="card-footer">{children}</div>;
}

Card.Header = Header;
Card.SubHeader = SubHeader;
Card.Image = Image;
Card.Body = Body;
Card.Footer = Footer;
