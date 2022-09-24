import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { crudComponent } from './crud/crud.component';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'crud',component:crudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
