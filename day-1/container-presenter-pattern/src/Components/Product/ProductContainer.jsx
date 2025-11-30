import { useEffect, useState } from "react";
import axios from "axios";
import ProductPresenter from "./ProductPresenter";
import Header from "../Common/Header";

const ProductContainer = () => {
  const apibase = import.meta.env?.VITE_API_BASE_URL ?? "";
  const [productList, setProductList] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(false);
      setError(null);
      const res = await axios.get(`${apibase}/products`);
      console.log(res.data);
      setProductList(res.data);
    } catch (error) {
      setError("Failed to fetch Product data");
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleRefreshData = () => {
    fetchProducts();
  };
  // cart state lifted to container so Header and Presenter can share it
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const idx = prev.findIndex((p) => p.id === product.id);
      if (idx === -1) return [...prev, { ...product, qty: 1 }];
      return prev.map((p) =>
        p.id === product.id ? { ...p, qty: (p.qty ?? 1) + 1 } : p
      );
    });
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prev) => prev.filter((p) => p.id !== product.id));
  };

  const handleUpdateItem = (product, delta) => {
    setCartItems((prev) =>
      prev
        .map((p) =>
          p.id === product.id ? { ...p, qty: (p.qty ?? 1) + delta } : p
        )
        .filter((p) => (p.qty ?? 1) > 0)
    );
  };
  return (
    <>
      <Header
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateItem={handleUpdateItem}
      />
      <main className="app-main" style={{ paddingTop: 72 }}>
        <ProductPresenter
          loading={loading}
          products={productList}
          error={error}
          onRefreshData={handleRefreshData}
          onAddToCart={handleAddToCart}
        />
      </main>
    </>
  );
};

export default ProductContainer;
