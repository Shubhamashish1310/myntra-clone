import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Alert from '../components/Alert';

// eslint-disable-next-line react/prop-types
const Discover = ({ searchQuery }) => {
  const { products } = useContext(ProductContext);

  if (!products) {
    return <p>Loading...</p>;
  }

  // Normalize search query to lowercase
  const normalizedSearchQuery = searchQuery ? searchQuery.toLowerCase() : '';

  // Filter products based on search query
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(normalizedSearchQuery)
  );

  return (
    <div className="bg-white">
      <h1 className="text-3xl mt-20 bg-teal-500 text-white p-4 font-semibold mb-10 text-center">
        All Products
      </h1>
      <section className="py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-sm mx-auto md:max-w-none md:mx-0">
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

export default Discover;
