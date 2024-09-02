import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext'; // Ensure correct path
import Product from '../components/Product';
import Hero from '../components/Hero';
import Alert from '../components/Alert';

const Home = () => {
  const { products } = useContext(ProductContext);

  if (!products) {
    return <p><Alert /></p>;
  }

  return (
    <div>
      <Hero />
   
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center text-gray-800">Explore Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-4 lg:px-8">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
