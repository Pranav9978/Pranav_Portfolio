import './App.css'
import MyNavbar from '../public/Header/Header'
import HomeSection from './Components/Home'
import AboutSection from './Components/About'
import MyContact from './Components/Contact'
import MyFooter from '../public/Footer/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReadMore from './Components/ReadMore'
import Projects from './Components/Project.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Full-Page Layout */}
        <Route
          path="/"
          element={
            <>
              <MyNavbar />
              <HomeSection />
              <AboutSection />
              <Projects />
              <MyContact />
              <MyFooter />
            </>
          }
        />

        {/* Optional: you can add other main routes pointing to same full-page */}
        <Route
          path="/Home"
          element={
            <>
              <MyNavbar />
              <HomeSection />
              <AboutSection />
              <Projects />
              <MyContact />
              <MyFooter />
            </>
          }
        />

        {/* Separate Read More Page */}
        <Route path="/readmore" element={<ReadMore />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
