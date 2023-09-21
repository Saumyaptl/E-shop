import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from './containers/Header';
import Productlisting from './containers/Productlisting';
import ProductsDetail from './containers/ProductsDetail';
function App() {
  return (
    <div className="App">
      <Router>
    <Header/>
    <Routes>
    <Route path='/' exact element={<Productlisting/>}/>
    <Route path='/product/:productId' exact element={<ProductsDetail/>}/>
    <Route>404 Not Found</Route>
    </Routes>
    </Router>
    </div>
  );
}
export default App;
