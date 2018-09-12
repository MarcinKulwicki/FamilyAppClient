import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FatherComponent } from './father/father.component';
import { ChildListComponent } from './child-list/child-list.component';
import { FamilyComponent } from './family/family.component';


const appRoutes: Routes = [
  {
    path: 'father',
    component: FatherComponent
  },
  {
    path: 'child',
    component: ChildListComponent
  },
  {
    path: 'family',
    component: FamilyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
