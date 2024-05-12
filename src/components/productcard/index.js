import { useState } from "react";
import "./index.css";

const ProductCard = ({ product }) => {
  const [likedItems, setLikedItems] = useState({});
  const handleLikeClick = (itemId) => {
    setLikedItems((prevLikedItems) => ({
      ...prevLikedItems,
      [itemId]: !prevLikedItems[itemId], // Toggle the like status for the clicked item
    }));
  };
  return (
    <ul className="products-list">
      {product.map((item) => (
        <li key={item.id}>
          <img src={item.image} alt={item.title} className="image" />
          <h2>PRODUCT NAME</h2>
          <div className="card-text">
            <p>
              <span>Sing in</span> or Create an account to see prices
            </p>
            <button className="button" onClick={() => handleLikeClick(item.id)}>
              {likedItems[item.id] ? (
                <img
                  src="https://res.cloudinary.com/dtll9buf5/image/upload/v1715498776/heart_wlnqmx.png"
                  alt="heart"
                  className="heart-image"
                />
              ) : (
                <img
                  src="https://res.cloudinary.com/dtll9buf5/image/upload/v1715497501/heart_pghdvf.png"
                  alt="heart"
                  className="heart-image"
                />
              )}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default ProductCard;
