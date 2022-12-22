import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Manu from './pages/Manu'

const Router:FC = () => {
  return ( 
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Manu />} />
          </Routes>
      </BrowserRouter>
  )
}

export default Router;