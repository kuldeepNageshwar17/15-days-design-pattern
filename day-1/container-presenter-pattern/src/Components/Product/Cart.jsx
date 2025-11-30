/* eslint-disable react/prop-types */

const CreateCart = ({ items = [], onRemoveItem, onUpdateItem }) => {
  const itemCount = items?.reduce((s, it) => s + (it.qty ?? 1), 0) ?? 0;

  return (
    <div className="cart-wrapper">
      <div className="cart-short" title="Cart">
        <span className="cart-icon">🛒</span>
        <span className="cart-badge">{itemCount}</span>
      </div>

      <div className="cart-panel">
        <div className="cart-header">
          <h3>Cart</h3>
          <div className="cart-count">Items: {itemCount}</div>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">Your cart is empty</div>
        ) : (
          <ul className="cart-items">
            {items.map((it, idx) => (
              <li key={it.id ?? idx} className="cart-item">
                <div className="cart-item-name">{it.name ?? "Unnamed"}</div>
                <div className="cart-item-controls">
                  <button
                    type="button"
                    className="cart-qty-btn"
                    onClick={() => onUpdateItem?.(it, -1)}
                    aria-label={`Decrease ${it.name}`}
                  >
                    −
                  </button>
                  <div className="cart-item-qty">{it.qty ?? 1}</div>
                  <button
                    type="button"
                    className="cart-qty-btn"
                    onClick={() => onUpdateItem?.(it, +1)}
                    aria-label={`Increase ${it.name}`}
                  >
                    +
                  </button>
                </div>
                {onRemoveItem ? (
                  <button
                    type="button"
                    className="cart-remove"
                    onClick={() => onRemoveItem(it)}
                  >
                    Remove
                  </button>
                ) : null}
              </li>
            ))}
          </ul>
        )}

        <div className="cart-actions">
          <button
            type="button"
            className="cart-checkout"
            disabled={items.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCart;
