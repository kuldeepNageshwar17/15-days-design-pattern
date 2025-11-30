/* eslint-disable react/prop-types */
const ProductControls = ({
  search,
  setSearch,
  category,
  setCategory,
  sortBy,
  setSortBy,
  categories = [],
  onClear,
}) => {
  return (
    <div className="product-controls">
      <div className="control-group">
        <input
          type="search"
          placeholder="Search by name, brand or category"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="control-input"
          aria-label="Search products"
        />
      </div>

      <div className="control-group">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="control-select"
          aria-label="Filter by category"
        >
          {categories.map((c) => (
            <option value={c} key={c}>
              {c === "all" ? "All categories" : c}
            </option>
          ))}
        </select>
      </div>

      <div className="control-group">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="control-select"
          aria-label="Sort products"
        >
          <option value="">Default</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="rating-desc">Top rated</option>
          <option value="name-asc">Name A → Z</option>
        </select>
      </div>

      <div className="control-group">
        <button
          type="button"
          className="control-clear"
          onClick={() => onClear && onClear()}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default ProductControls;
