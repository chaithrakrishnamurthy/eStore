import "./_products.scss";

const Products = () => {
  const productData = [
    {
      pName: "Jacket",
      price: 45,
      img: "shop-1.jpg",
    },
    {
      pName: "Coats",
      price: 65,
      img: "shop-2.jpg",
    },
    {
      pName: "Shirts",
      price: 35,
      img: "shop-3.jpg",
    },
    {
      pName: "Bag",
      price: 87,
      img: "shop-4.jpg",
    },
  ];
  return (
    <div className="products-container">
      {productData.map((item, index) => {
        return (
          <div className="mx-5 p-3 product-card">
            <div className="product-image-container">
              <img src={require("../../assets/images/shop/" + item.img)} />
            </div>
            <div className="product-info">
              <h5>
                <a href="#">{item.pName}</a>
              </h5>
              <p className="product-price">${item.price}</p>
              <div className="product-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
