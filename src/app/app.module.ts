import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankComponent } from './components/layouts/blank/blank.component';
import { DefaultComponent } from './components/layouts/default/default.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SideComponent } from './components/partials/side/side.component';
import { CometChatUserListWithMessages } from 'src/cometchat-pro-angular-ui-kit/CometChatWorkspace/projects/angular-chat-ui-kit/src/components/Users/CometChat-user-list-with-messages/cometchat-user-list-with-messages.module';

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    DefaultComponent,
    WelcomeComponent,
    HomeComponent,
    SideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CometChatUserListWithMessages,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
