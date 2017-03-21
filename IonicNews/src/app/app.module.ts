import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { redditsPage } from '../pages/reddits/reddits';
import { SettingsPage } from '../pages/settings/settings';
import { detailsPage } from '../pages/details/details';
import { BrowserPage } from '../pages/browser/browser';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    redditsPage,
    SettingsPage,
    detailsPage,
    BrowserPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    redditsPage,
    SettingsPage,
    detailsPage,
    BrowserPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
