import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {ApplyPage} from '../pages/apply/apply';
import {ChatPage} from '../pages/chat/chat';
import {ActivityPage} from '../pages/activity/activity';
import {CommunityPage} from '../pages/community/community';
import {ModalPage} from '../pages/modal/modal';
import {SettingsPage} from '../pages/settings/settings';
import {SigninPage} from '../pages/signin/signin';
import {SignupPage} from '../pages/signup/signup';
import {AnnouncementPage} from '../pages/announcement/announcement';

import { ActivityPageModule } from '../pages/activity/activity.module'; 
import { AnnouncementPageModule } from '../pages/announcement/announcement.module'; 
import { CommunityPageModule } from '../pages/community/community.module'; 
import { ModalPageModule } from '../pages/modal/modal.module'; 
import { SettingsPageModule } from '../pages/settings/settings.module'; 
import { SigninPageModule } from '../pages/signin/signin.module'; 
import { SignupPageModule } from '../pages/signup/signup.module'; 
import { ApplyPageModule } from '../pages/apply/apply.module'; 
import { ChatPageModule } from '../pages/chat/chat.module'; 


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      mode: 'md'
    }),
    ActivityPageModule,
    ApplyPageModule,
    AnnouncementPageModule,
    CommunityPageModule,
    ChatPageModule,
    ModalPageModule,
    SettingsPageModule,
    SigninPageModule,
    SignupPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ApplyPage,
    ChatPage,
    ActivityPage,
    CommunityPage,
    ModalPage,
    SettingsPage,
    SigninPage,
    SignupPage,
    AnnouncementPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
