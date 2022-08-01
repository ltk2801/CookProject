import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    // Lấy id chuyển sang băm
    // window.location.hash.slice là ID của của 1 công thức
    const id = window.location.hash.slice(1);
    // console.log(id);
    if (!id) return;
    // Làm con xoay chờ loading
    recipeView.renderSpinner();

    // 1. Tải công thức - loading recipe

    await model.loadRecipe(id);

    // 2. Xuất công thức - Rending recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    alert(error);
  }
};

// Lắng nghe sự kiện mỗi khi thay đổi hàm băm
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
