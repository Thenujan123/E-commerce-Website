"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { Products } from "../generated/prisma";
const Home = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL!}/products`
      );
      const data: { allProducts: Products[] } = await response.json();
      setProducts(data.allProducts);
    };

    fetchAllProducts();
  }, []);

  return (
    <div>
      {/* Heading */}
      <h1
        id="products_heading"
        className="text-2xl font-semibold text-center mt-10"
      >
        Latest Products
      </h1>

      {/* Products Section */}
      <section id="products" className="max-w-7xl mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product 1 */}

          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded shadow p-4 flex flex-col"
            >
              <Image
                //@ts-ignore
                src={product.images[0].image}
                alt="Product"
                width={300}
                height={300}
                className="mx-auto mb-4"
              />
              <h5 className="text-sm font-medium mb-2">
                <a href="#" className="hover:text-blue-600">
                  {product.description}
                </a>
              </h5>
              <div className="mt-auto">
                <Rating
                  name="read-only-rating"
                  value={(product.ratings / 5) * 5}
                  precision={0.1}
                  readOnly
                />
              </div>
              <p className="mt-2 text-green-600 font-semibold">
                ${product.price}
              </p>
              <a
                href="#"
                className="mt-2 bg-blue-600 text-white py-2 rounded text-center hover:bg-blue-700"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
