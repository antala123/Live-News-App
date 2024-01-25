import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Topnews from './components/Topnews'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Apple from './components/Apple'
import World from './components/World'
import LoadingBar from 'react-top-loading-bar'
import ScrollToTop from "react-scroll-to-top";

const App = (props) => {


  const [mode, setMode] = useState("light");
  const [progress, setProgress] = useState(0);


  let toggleMode = () => {
    mode === "light" ? setMode("dark") : setMode("light")
  }


  return (
    <>
      <BrowserRouter>
      
        <LoadingBar
          color='#fcba03'
          height={4}
          progress={progress}
        />
        <Navbar mode={mode} togglemode={toggleMode} progress={setProgress} />
        <Routes>

          <Route path='/' element={<Home Title="HomeNews" mode={mode} progress={setProgress} />} />
          {/* <Route path='/topnews' element={<Topnews Title="NewsTop" mode={mode} />} />
            <Route path='/topAppleNews' element={<Apple Title="topapplenews" mode={mode} />} /> */}

          <Route path='/toplivesports' element={<World key="sports" progress={setProgress} Title="TopliveSports" cate="sports" mode={mode} />} />
          <Route path='/topheadlines' element={<World key="headline" Title="Headline" progress={setProgress} cate="general" mode={mode} />} />
          <Route path='/topbusiness' element={<World key="business" Title="Business" cate="business" progress={setProgress} mode={mode} />} />
          <Route path='/topentertainment' element={<World key="entertainment" Title="Entertainment" cate="entertainment" progress={setProgress} mode={mode} />} />
          {/* <Route path='/tophealth' element={<World key="health" Title="Health" cate="health" />} progress={setProgress} mode={mode} />
          <Route path='/topscience' element={<World key="science" Title="Science" cate="science" />} progress={setProgress} mode={mode} />
          <Route path='/toptechnology' element={<World key="technology" Title="Technology" cate="technology" />} progress={setProgress} mode={mode} /> */}

        </Routes>
        <Footer mode={mode} />
        <ScrollToTop smooth color='blue' style={{ borderRadius: "50%", right: "4px", backgroundColor: "#cfe1e6" }} />
      </BrowserRouter>
    </>
  )
}

export default App;