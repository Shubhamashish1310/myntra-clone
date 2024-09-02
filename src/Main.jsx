import {ErrorBoundary} from 'react-error-boundary';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import SidebarProvider from './contexts/SidebarContext.jsx';
import CartProvider from './contexts/CartContext.jsx';
import ProductProvider from './contexts/ProductContext.jsx';

import Alert from './components/Alert.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary fallback={<Alert/>}>
 
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <App/>
        </ProductProvider>
      </CartProvider>
      
    </SidebarProvider>
  
</ErrorBoundary>
);
