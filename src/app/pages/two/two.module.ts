import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TwoPage } from './two.page';
import { TwoTwoPage } from './two-two/two-two.page';
import { TwoPageRoutingModule } from './two-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TwoPageRoutingModule],
  declarations: [TwoPage, TwoTwoPage],
})
export class TwoPageModule {}
