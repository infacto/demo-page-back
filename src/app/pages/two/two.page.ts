import { Component } from '@angular/core';
import { items } from 'src/data/items';

@Component({
  selector: 'app-two-page',
  templateUrl: './two.page.html',
})
export class TwoPage {
  title = 'Two';
  items = items;
}
