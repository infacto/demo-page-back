import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { items, Item } from 'src/data/items';

@Component({
  selector: 'app-one-two-page',
  templateUrl: './one-two.page.html',
})
export class OneTwoPage implements OnInit {
  title = 'OneTwo';
  item?: Item;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const itemId = this.activatedRoute.snapshot.paramMap.get('id');
    this.item = items.filter((item) => item.id === itemId)[0];
  }
}
