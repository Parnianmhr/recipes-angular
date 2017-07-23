import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('A test recipe', 'this a description of a test recipe', 'http://herbivoracious.com/images/2011/11/Mama-Lils-Carbonara-2.jpg'),
  new Recipe('A test recipe', 'this a description of a test recipe', 'http://herbivoracious.com/images/2011/11/Mama-Lils-Carbonara-2.jpg')
];

  constructor() { }

  ngOnInit() {
  }

}
