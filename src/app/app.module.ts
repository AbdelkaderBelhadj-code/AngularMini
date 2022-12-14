import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DetailequipeModule } from './detailequipe/detailequipe.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { DetailComponent } from './detailequipe/detail/detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
/*.In our AppModule, we then need to specify the component that will serve as the entry point component for our application.
In our app.module.ts file where we import the entry component (conventionally AppComponent) and supply it as the only item
in our bootstrap array inside the NgModule configuration object. eg. bootstrap[AppComponent]*/
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavBarComponent,
    SideBarComponent,

   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DetailequipeModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
