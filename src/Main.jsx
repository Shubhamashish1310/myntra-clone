import {ErrorBoundary} from 'react-error-boundary';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import SidebarProvider from './contexts/SidebarContext.jsx';
import CartProvider from './contexts/CartContext.jsx';
import ProductProvider from './contexts/ProductContext.jsx';
import Error from './components/error.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary fallback={<Error/>}>
 
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <App/>
        </ProductProvider>
      </CartProvider>
      
    </SidebarProvider>
  
</ErrorBoundary>
);
