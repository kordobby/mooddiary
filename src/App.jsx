/* import */

// Route
import { Route, Routes } from 'react-router-dom';

// Import Components
import Detail from './pages/Detail';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:day" element={<Detail />}></Route>
    </Routes>
  );
};

export default App;