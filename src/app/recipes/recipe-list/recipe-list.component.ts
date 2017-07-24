import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Spagetti', 'this a description of a test recipe', 'http://herbivoracious.com/images/2011/11/Mama-Lils-Carbonara-2.jpg'),
    new Recipe('Vegetarian recipe', 'this a description of a test recipe', 'https://miami-beach.eat24hours.com/files/cuisines/v4/vegetarian.jpg'),
    new Recipe('Salade', 'this a description of a test recipe', 'http://realfood.tesco.com/media/images/vegetarian%20and%20vegan%20-%20hero-9bd99fb5-f500-4319-bd89-eb49912e6469-0-472x310.jpg'),
    new Recipe('chinese vegetarian food', 'this a description of a test recipe', 'http://www.femmehub.com/wp-content/uploads/2015/03/chinese-vegetarian-food.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
