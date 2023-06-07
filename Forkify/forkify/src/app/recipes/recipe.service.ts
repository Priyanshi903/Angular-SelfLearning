import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();
  recipeSelected = new Subject<Recipe>();
  recipeChanged = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService) { }

  private recipes: Recipe[] = [
    new Recipe('Tasty Burger', 'Snack Time', 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Hamburger:product-header-desktop?wid=829&hei=455&dpr=off', [
      new Ingredient('Bun', 1), new Ingredient('Potato', 1)
    ]),
    new Recipe('Yummy Chilli Paneer', 'Main Course', 'https://www.funfoodfrolic.com/wp-content/uploads/2020/04/Chilli-Paneer.jpg', [
      new Ingredient('Capsicum', 3), new Ingredient('Paneer', 200), new Ingredient('Onion', 3)
    ])
  ];

  getRecipes() {
    // returns the copy of recipes
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsForRecipe(ingredients);
  }

  getRecipe(index: number) {
    // index=id
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
