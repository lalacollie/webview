import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab: InAppBrowser, public platform:Platform) {
      platform.ready().then(()=>{
        let browser = this.iab.create("https://ng6-shop.orangelight.acsite.org/#/itemList",'_blank',{zoom:'no',location:'no'});
        browser.show();
      });
  }

}
