import {Route, Routes ,BrowserRouter,Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart';
import Header from './components/Header';
import Offer from './components/Offer';
import Footer from './components/Footer';
import { useAuth0 } from "@auth0/auth0-react";
import {Toaster} from 'react-hot-toast'
import Layout from './components/Layout';
const HomeLayout =({children}) =>{
  return (
    <>
       <Offer/> *
        <Header/>
        {children}
    </>
  )
}
function App() {
  const {isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
        <Toaster/>
        <BrowserRouter >
        <Routes>
        <Route path="/" index={true} element={<HomeLayout><Home/></HomeLayout>  } />
        <Route path="/product/:id" element={isAuthenticated ? <Layout><ProductDetail/></Layout> : <Navigate to="/" replace/> } />
        {/* <Route path="/product/:id" element={ <Layout><ProductDetail/></Layout> } /> */}
        <Route path="/cart" element={isAuthenticated ? <Layout> <Cart/></Layout>  : <Navigate to="/" replace/>  } />
        {/* <Route path="/cart" element={
          <Layout>
            <Cart/>
          </Layout>
          } /> */}

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;