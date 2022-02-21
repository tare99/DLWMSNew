import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DokumentiComponent } from './components/dokumenti/dokumenti.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    DokumentiComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {path: 'homepage', component: HomepageComponent},
        {path:'dokumenti', component: DokumentiComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
