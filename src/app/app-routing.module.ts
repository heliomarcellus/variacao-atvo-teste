import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtivoComponent } from './components/ativo/ativo.component';

const routes: Routes = [
  { path: '', component: AtivoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
