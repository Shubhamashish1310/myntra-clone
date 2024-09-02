import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Alert from '../components/Alert';

const CategoryPage = ({ searchQuery }) => {
  const { category } = useParams();
  const { products } = useContext(ProductContext);

  if (!products) {
    return <p>Loading...</p>;
  }

  const normalizedCategory = category ? category.toLowerCase() : '';

  const categories = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];

  if (!categories.includes(normalizedCategory)) {
    return <p>Category not found.</p>;
  }

  // Normalize search query to lowercase
  const normalizedSearchQuery = searchQuery ? searchQuery.toLowerCase() : '';

  // Filter products based on category and search query
  const filteredProducts = products.filter((item) =>
    item.category.toLowerCase() === normalizedCategory &&
    item.title.toLowerCase().includes(normalizedSearchQuery)
  );

  return (
    <div className="bg-white">
      <h1 className="text-3xl mt-20 bg-pink-600 text-white p-4 font-semibold mb-10 text-center">
        Products in {category}
      </h1>
      <section className="py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Product product={product} key={product.id} />
              ))
            ) : (
              <p><Alert /></p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
