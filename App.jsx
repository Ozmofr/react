import { BrowserRouter, Routes, Route } from "react-router-dom";

//style
import './App.css'
//COMPOSENT
import Blog from './composent/Blog'
import Layout from './composent/Layout'
import NoPage from './composent/NoPage'
import Home from './composent/Home'
import Form from './composent/Form'
//DATA
import posts from './data/posts'

function App() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Blog" element={<Blog posts={posts}/>} />
            <Route path="form" element={<Form />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }


export default App