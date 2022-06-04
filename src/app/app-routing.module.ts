import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {SearchViewComponent} from './search-view/search-view.component';
import {FileViewComponent} from './file-view/file-view.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'dashBoard', component: DashboardComponent},
  {path: 'search', component: SearchViewComponent},
  {path: 'files', component: FileViewComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
