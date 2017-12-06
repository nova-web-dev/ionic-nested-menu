import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { SecondListPage } from '../second-list/second-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public content: any;
  currentRoot: any;
  pages: Array<{title: string, component: any}>;

  @ViewChild('content2') secondnav;

  constructor(public navCtrl: NavController) {
    this.content = this.navCtrl.getActive();

    this.pages = [
      { title: 'List', component: ListPage },
      { title: 'SecondList', component: SecondListPage }
    ];

    this.currentRoot = ListPage;


  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.navCtrl.setRoot(page.component);
    this.secondnav.setRoot(page.component);
  }

}
