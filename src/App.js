import { Routes, Route } from 'react-router';
import './App.css';
import { Header } from './components/Header/Header';
import Home from "./pages/Home/Home"
import Catalog from "./pages/Catalog/Catalog";
import Contacts from "./pages/Contacts/Contacts";
import { Main } from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
      <div>
        <Main/>
      </div>
    </div>
  );
}

export default App;
