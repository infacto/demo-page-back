import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PageComponent } from 'src/app/components/page/page.component';
import { OnePage } from './one.page';
import { OneTwoPage } from './one-two/one-two.page';
import { OnePageRoutingModule } from './one-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, OnePageRoutingModule],
  declarations: [PageComponent, OnePage, OneTwoPage],
})
export class OnePageModule {}
