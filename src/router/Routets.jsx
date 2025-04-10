import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Home, About, Nav, Skill, Contact } from '../index.js'


export function MyRoutes() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}
