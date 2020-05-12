import { Component } from '@angular/core';
import { items } from 'src/data/items';

@Component({
  selector: 'app-one-page',
  templateUrl: './one.page.html',
})
export class OnePage {
  title = 'One';
  items = items;
}
