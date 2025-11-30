/* eslint-disable react/prop-types */
import Cart from "../Product/Cart";

const Header = ({ items = [], onRemoveItem, onUpdateItem }) => {
  return (
    <header className="app-header">
      <div className="app-header-inner">
        <div className="site-title">My Shop</div>
        <div className="header-actions">
          <Cart
            items={items}
            onRemoveItem={onRemoveItem}
            onUpdateItem={onUpdateItem}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
