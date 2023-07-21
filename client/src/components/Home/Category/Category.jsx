import { useNavigate } from "react-router-dom";
import React from "react";
import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  if (!categories || !categories.data) {
    return null; // Return null or a fallback component if categories.data is undefined
  }

  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate('/category/${item.id}')}
          >
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                item.attributes.img.data.attributes.url
              }
              
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
