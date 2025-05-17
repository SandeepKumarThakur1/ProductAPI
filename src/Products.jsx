import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Products = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const api = `https://fakestoreapi.com/products/${id}`;

    fetch(api)  
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(err => {
        console.log('Error ..', err)
      })
  }, []);

  return (
    <>
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            {/* Left Section - Image + Buttons */}
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-white dark:bg-white mb-4 p-20">
                <img
                  className="w-full h-full object-contain rounded-lg"
                  src={products.image}
                  alt="Product"
                />
              </div>
            </div>

            {/* Right Section - Details */}
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {products.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {products.category}
              </p>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, index) => {
                  // Check if the current star index is less than the rounded rating value
                  const filled = index < Math.round(products.rating?.rate || 0);
                  return (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-6 h-6 ${
                        filled ? "text-yellow-500" : "text-gray-400"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 
                            5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 
                            1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 
                            7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527
                            c-.887-.76-.415-2.212.749-2.305l5.404-.434 
                            2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  );
                })}
                <span className="ml-2 text-white-600">
                  {products.rating?.rate} ({products.rating?.count})
                </span>
              </div>

              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Price:
                  </span>{" "}
                  <span className="text-gray-600 dark:text-gray-300">
                    <span className="text-red-500">
                      <s>${products.price + 250}</s>
                    </span>{" "}
                    ${products.price}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Product Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {products.description}
                </p>
              </div>
              <div className="flex -mx-2 my-6">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
