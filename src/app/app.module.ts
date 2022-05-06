import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserCardViewComponent } from './features/user-card-view/user-card-view.component';
import { UserListViewComponent } from './features/user-list-view/user-list-view.component';
import { RootUserComponentComponent } from './features/root-user-component/root-user-component.component';
import { UserTabViewComponent } from './user-tab-view/user-tab-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardViewComponent,
    UserListViewComponent,
    RootUserComponentComponent,
    UserTabViewComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
