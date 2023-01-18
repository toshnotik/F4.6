import {Route, Routes} from "react-router-dom";
import '../styles/App.css';
import Header from "./Header";
import RecipesList from "./RecipesList";
import CategoryList from "./CategoryList";
import Category from "./Category";
import Dish from "./Dish";
import Footer from "./Footer";


function App() {

    return (
      <div className="App">
          <Header/>
          <Routes>
              <Route path="/" element={<RecipesList />}/>
              <Route path="/сategoryList" element={<CategoryList/>}/>
              <Route path="/сategory" element={<Category/>}/>
              <Route path="/dish" element={<Dish />}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
