import { Component } from '@angular/core';
import { Goal } from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goals:Goal[]= [
    {id:1, name:'watch finding nimo'},
    {id:2, name:'buy cookies'},
    {id:3, name:'get a new phone case'},
  ];
}
