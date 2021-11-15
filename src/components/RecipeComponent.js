import styled from "styled-components";

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 3px 10px 0 #aaa;
  width: 300px;
  border-radius: 5px;
`;

export const CoverImage = styled.img`
  height: 200px;
`;

export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0px;
`;

export const IngredientsText = styled.span`
  font-size: 18px;
  border: 1px solid green;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 5px;
  color: green;
  text-align: center;
  margin-bottom: 12px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: white;
    background-color: green;
  }
`;

export const SeeMoreText = styled(IngredientsText)`
  border: 1px solid #eb3300;
  color: #eb3300;

  &:hover {
    color: white;
    background-color: #eb3300;
  }
`;
