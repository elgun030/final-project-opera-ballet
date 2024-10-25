import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate'yi içe aktar
import ballerinaImages from "../../assets/school.png";
import "./loading.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // navigate fonksiyonunu al

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/products");
        if (!response.ok) {
          throw new Error("Ürünler alınamadı.");
        }
        const data = await response.json();

        setTimeout(() => {
          setProducts(data);
          setLoading(false);
        }, 1000); 
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="ballerina-figure">
          <img src={ballerinaImages} alt="Ballerina" />
        </div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container max-w-[1224px] m-auto mt-[170px]">
      <div className="grid grid-cols-4 gap-[68px]">
        {products.map((product) => (
          <div
            key={product._id}
            className="w-[277px] drop-shadow-2xl transition-transform transform hover:scale-105 rounded-lg"
            onClick={() => navigate(`/products/${product._id}`)} // Ürüne tıklayınca yönlendirme
          >
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto"
              />
            </div>
            <div className="bg-[#EEEEEE] py-[18px]">
              <h2 className="font-semibold text-lg leading-[21.46px] mb-2">
                {product.name}
              </h2>
              <p className="font-medium text-lg leading-[21.46px] italic">
                £{product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
