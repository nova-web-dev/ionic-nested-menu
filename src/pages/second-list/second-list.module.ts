import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondListPage } from './second-list';

@NgModule({
  declarations: [
    SecondListPage,
  ],
  imports: [
    IonicPageModule.forChild(SecondListPage),
  ],
})
export class SecondListPageModule {}
