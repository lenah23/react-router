import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Iphone7, Iphone7plus, Iphone8, Iphone8plus, Iphonex, Iphone12 } from './components/index.jsx';



function App() {
  return (
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iphone-7" element={<Iphone7 />} />
        <Route path="/iphone-7-plus" element={<Iphone7plus />} />
        <Route path="/iphone-8" element={<Iphone8 />} />
        <Route path="/iphone-8-plus" element={<Iphone8plus />} />
        <Route path="/iphone-x" element={<Iphonex />} />
        <Route path="/iphone-12" element={<Iphone12 />}/>
      </Routes>
    </div>
  );
}

export default App;
