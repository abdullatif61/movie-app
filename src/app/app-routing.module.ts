import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyrintiComponent } from './components/ayrinti/ayrinti.component';
import { HomeComponent } from './pages/home/home.component';
import { MoreMoviesComponent } from './components/more-movies/more-movies.component';
import { SayiComponent } from './components/sayi/sayi.component';

const routes: Routes = [
  {
    path: "more-movies",
    component: MoreMoviesComponent,
  },
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "sayi",
    component: SayiComponent,
  },
  {
    path: "ayrinti",
    component: AyrintiComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
