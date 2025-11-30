/* eslint-disable react/prop-types */

export default function ProductCard({ product, onAddToCart }) {
  const handleAddToCartClick = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };
  const stockClass = product.inStock
    ? "product-stock available"
    : "product-stock out";
  const stockText = product.inStock ? "Available" : "Out of stock";
  const desc = product.description
    ? product.description.length > 120
      ? `${product.description.slice(0, 120)}...`
      : product.description
    : "";

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name || "product image"} />
      </div>

      <div className="product-name">{product.name}</div>
      {product.brand ? (
        <div className="product-brand">{product.brand}</div>
      ) : null}

      {product.category ? (
        <div className="product-category">{product.category}</div>
      ) : null}

      <div className={stockClass} aria-live="polite">
        {stockText}
      </div>

      <div className="product-desc">{desc}</div>

      <div className="product-price">
        {typeof product.price === "number"
          ? `$${product.price.toFixed(2)}`
          : product.price}
      </div>

      <div className="product-meta">
        <div className="product-rating">⭐ {product.rating ?? "-"}</div>
        <div className="product-review">{product.reviewCount ?? 0} reviews</div>
      </div>

      <button
        type="button"
        className="add-to-cart-btn"
        aria-label={`Add ${product.name} to cart`}
        onClick={handleAddToCartClick}
        disabled={!product.inStock}
      >
        Add To Cart
      </button>

      <div className="product-features">
        {product.features?.map((feat, idx) => (
          <span className="badge" key={`feat-${idx}`}>
            {feat}
          </span>
        ))}
      </div>

      <div className="product-tags">
        {product.tags?.map((tag, idx) => (
          <span className="badge" key={`tag-${idx}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
