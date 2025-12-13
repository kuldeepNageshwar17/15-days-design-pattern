/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "./Card";

export default function ExpandableCard({ title, subtitle, image, children }) {
  const [expanded, setExpanded] = useState(false);
  const [favorite, setFavorite] = useState(false);

  return (
    <Card>
      <Card.Image>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: 200, objectFit: "cover" }}
        />
      </Card.Image>

      <Card.Header>
        {title}
        <Card.SubHeader>{subtitle}</Card.SubHeader>
      </Card.Header>

      <Card.Body>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            {expanded ? (
              children
            ) : (
              <p style={{ margin: 0 }}>
                {children && String(children).slice(0, 120)}
                {String(children).length > 120 ? "…" : ""}
              </p>
            )}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              className="btn btn-secondary"
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? "Collapse" : "Expand"}
            </button>
            <button
              className={`btn ${favorite ? "btn-primary" : "btn-secondary"}`}
              onClick={() => setFavorite((f) => !f)}
            >
              {favorite ? "★" : "☆"}
            </button>
          </div>
        </div>
      </Card.Body>

      <Card.Footer>
        <small style={{ color: "#666" }}>
          {favorite ? "Marked favorite" : ""}
        </small>
      </Card.Footer>
    </Card>
  );
}
