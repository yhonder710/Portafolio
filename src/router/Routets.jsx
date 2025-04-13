import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Home, About, Nav, Skill, Contact } from '../index.js'
import { Projects } from '../pages/Projects.jsx'


export function MyRoutes() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}
