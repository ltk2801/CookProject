import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { getJSON } from './views/helpers.js';
export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
    };

    console.log(state.recipe);
  } catch (error) {
    // Xử lý lỗi tạm thời CLO
    console.error(`${error} 💥💥`);
  }
};
