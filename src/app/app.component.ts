import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ApplyPage } from '../pages/apply/apply';
import {ChatPage} from '../pages/chat/chat';
import {ActivityPage} from '../pages/activity/activity';
import {CommunityPage} from '../pages/community/community';
import {ModalPage} from '../pages/modal/modal';
import {SettingsPage} from '../pages/settings/settings';
import {SigninPage} from '../pages/signin/signin';
import {SignupPage} from '../pages/signup/signup';
import {AnnouncementPage} from '../pages/announcement/announcement';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  activePage:any;

  pages: Array<{title: string, component: any; icon: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: "home" },
      { title: 'Club Application', component: ApplyPage, icon: "add" },
      { title: 'Club Activities', component: ActivityPage, icon: "game-controller-b" },
      { title: 'Club Communities', component: CommunityPage, icon: "people" },
      { title: 'Live Chat', component: ChatPage, icon: "chatbubbles" },
      { title: 'Settings', component: SettingsPage, icon: "construct" },
      { title: 'Sign In', component: SigninPage, icon: "log-in" },
    ];

    this.activePage = this.pages[0];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  checkActive(page){
    return page == this.activePage;
  }
}
