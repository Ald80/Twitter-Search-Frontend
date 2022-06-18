import { Route, Routes } from 'react-router-dom';
import NavHeader from './navbar/NavHeader'

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavHeader />} />
    </Routes>
  );
}

export default App;
