import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliografiaSinopsisComponent } from './cartelera/bibliografia-sinopsis/bibliografia-sinopsis.component';
import { SeriesFaboritasComponent } from './cartelera/series-faboritas/series-faboritas.component';

const routes: Routes = [
  {
    path:'serieList',
    component:SeriesFaboritasComponent
  },
  {
    path:'bibliografiaList',
    component:BibliografiaSinopsisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
