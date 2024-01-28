import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ContactUs from './pages/ContactUs/ContactUs';
import LegalPages from './pages/LegalPages/LegalPages';
import SignUp from './pages/Auth/SignUp';
import Login from './pages/Auth/Login';
import Error from './pages/Error/Error';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/legal" element={<LegalPages />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
