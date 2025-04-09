import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Home, About, Nav } from '../index.js'


export function MyRoutes() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}
