import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import Error404 from "./Pages/Error404";
import Movie from "./Pages/Movie";
import NewMovies from "./Pages/NewMovies";
import Search from "./Pages/Search";
import Popular from './Pages/Popular'
import MenuTop from "./components/MenuTop";

function App() {
  const { Header, Content } = Layout;
  console.log(Layout);

  return (
    <Layout>
    <Router>
      <Header style={{color:'white'}}><MenuTop/></Header>
      <Content>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/new-movies" element={<NewMovies />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Content>
    </Router>
    
    </Layout>
  );
}

export default App;
