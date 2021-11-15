import { useState } from "react";
import Axios from "axios";
import {
  AppIcon,
  AppNameComponent,
  Container,
  Header,
  SearchComponent,
  SearchIcon,
  SearchInput,
} from "./components/HeaderStyle";
import {
  SeeMoreText,
  CoverImage,
  IngredientsText,
  RecipeContainer,
  RecipeName,
  RecipeListContainer,
} from "./components/RecipeComponent";
import Hamburger from "./hamburger.svg";
import Searchicon from "./searc-icon.svg";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

const API_ID = "34177dca";
const API_KEY = "2a54ffeec20b55d1c45759a1ea73d233";

const RecipeComponent = (props) => {
  const { recipeObj, index } = props;
  const [show, setShow] = useState(false);
  return (
    <>
      <Dialog open={show}>
        <DialogTitle id="alert-dialog-slide-title">Ingreidients</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingreindients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientObj) => (
                <tr>
                  <td>{ingredientObj.text}</td>
                  <td>{ingredientObj.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <IngredientsText onClick={() => window.open(recipeObj.url)}>
            See More
          </IngredientsText>
          <SeeMoreText onClick={() => setShow(false)}>Close</SeeMoreText>
        </DialogActions>
      </Dialog>
      <RecipeContainer key={index}>
        <CoverImage src={recipeObj.image} alt="" />
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientsText onClick={() => setShow(true)}>
          Ingredients
        </IngredientsText>
        <SeeMoreText onClick={() => window.open(recipeObj.url)}>
          See Complete
        </SeeMoreText>
      </RecipeContainer>
    </>
  );
};

function App() {
  const [timeoutId, setTimeoutId] = useState();
  const [recipeList, setRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    setRecipeList(response.data.hits);
  };
  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(e.target.value), 500);
    setTimeoutId(timeout);
  };

  return (
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon src={Hamburger} alt="" />
          Recipe Finder
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon src={Searchicon} />
          <SearchInput
            type="text"
            placeholder="Search Recipe"
            onChange={onTextChange}
          />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        {recipeList.length &&
          recipeList.map((recipeObj, index) => (
            <RecipeComponent recipeObj={recipeObj.recipe} key={index} />
          ))}
      </RecipeListContainer>
    </Container>
  );
}

export default App;
