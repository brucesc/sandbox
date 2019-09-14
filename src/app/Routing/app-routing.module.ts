import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from '../Factory/dynamic-form/dynamic-form.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: 'register', component: DynamicFormComponent },
  { path: 'signin', component: DynamicFormComponent },
  { path: '**', pathMatch:'full', redirectTo: 'home' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
