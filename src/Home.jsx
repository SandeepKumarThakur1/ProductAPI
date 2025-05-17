import { useEffect, useState } from "react";
import { Link } from "react-router";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const api = `https://fakestoreapi.com/products`;

    fetch(api)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.log("Error ..", err);
      });
  }, []);

  if (!products.length) return <p>Loading products...</p>;

  return (
    <>
      <section>
        <h1 className="text-3xl font-bold mb-6">Mini E-commerce Product </h1>

        {/* Product */}
        <div className="product-wrapper flex flex-wrap gap-3">
          {products.map((data) => (
            <div
              className="product-details w-[195px] h-[100%] mb-5"
              key={data.id}
            >
              <Link to={`/product/${data.id}`}>
                <div className="bg-white p-5 rounded-[15px] mb-2 flex items-center justify-center">
                  <img
                    src={data.image}
                    alt=""
                    className="img-fluid w-50 h-40 object-contain"
                  />
                </div>
              </Link>
              <div>
                <div className="product-title">
                  <p className="truncate">{data.title}</p>
                </div>
                <div className="product-price">
                  <p>
                    <span className="text-red-500">
                      <s>${data.price + 350}</s>
                    </span>{" "}
                    ${data.price}{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
