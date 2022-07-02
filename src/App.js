import { Route, Routes } from 'react-router-dom';
import Search from './search/Search';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Search />} />
    </Routes>
  )
}
