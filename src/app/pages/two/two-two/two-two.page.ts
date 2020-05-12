import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { items, Item } from 'src/data/items';

@Component({
  selector: 'app-two-two-page',
  templateUrl: './two-two.page.html',
})
export class TwoTwoPage implements OnInit {
  title = 'TwoTwo';
  item?: Item;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const itemId = this.activatedRoute.snapshot.paramMap.get('id');
    this.item = items.filter((item) => item.id === itemId)[0];
  }
}
