/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import LoadingSpinner from "../Common/LoadingSpinner";
import ErrorMessage from "../Common/ErrorMessage";
import ProductCard from "./ProductCard";
import ProductControls from "./ProductControls";

const ProductPresenter = ({
  loading,
  products = [],
  error,
  onRefreshData,
  onAddToCart,
}) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("");

  const categories = useMemo(() => {
    const set = new Set();
    (products || []).forEach((p) => p.category && set.add(p.category));
    return ["all", ...Array.from(set)];
  }, [products]);

  const filtered = useMemo(() => {
    let list = (products || []).slice();
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (p) =>
          (p.name || "").toLowerCase().includes(q) ||
          (p.brand || "").toLowerCase().includes(q) ||
          (p.category || "").toLowerCase().includes(q)
      );
    }
    if (category && category !== "all") {
      list = list.filter((p) => p.category === category);
    }

    if (sortBy) {
      switch (sortBy) {
        case "price-asc":
          list.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
          break;
        case "price-desc":
          list.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
          break;
        case "rating-desc":
          list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
          break;
        case "name-asc":
          list.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
          break;
        default:
          break;
      }
    }

    return list;
  }, [products, search, category, sortBy]);

  if (loading) return <LoadingSpinner message={"Loading Products ..."} />;
  if (error) return <ErrorMessage message={error} />;
  if (!products || products.length === 0)
    return (
      <div>
        No Products Available <button onClick={onRefreshData}>Refresh</button>
      </div>
    );

  const handleClear = () => {
    setSearch("");
    setCategory("all");
    setSortBy("");
  };

  return (
    <div>
      <ProductControls
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        categories={categories}
        onClear={handleClear}
      />

      <div className="product-grid">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPresenter;
