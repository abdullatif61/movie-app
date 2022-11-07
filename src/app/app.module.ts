import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieCartComponent } from './components/movie-cart/movie-cart.component';
import { MoreMoviesComponent } from './components/more-movies/more-movies.component';
import { HomeComponent } from './pages/home/home.component';
import { SayiComponent } from './components/sayi/sayi.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AyrintiComponent } from './components/ayrinti/ayrinti.component';
import { HttpClientModule } from '@angular/common/http';

  

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    MovieCartComponent,
    MoreMoviesComponent,
    HomeComponent,
    SayiComponent,
    LayoutComponent,
    AyrintiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
