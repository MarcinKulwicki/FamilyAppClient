import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FatherComponent } from './component/father/father.component';
import { ChildListComponent } from './component/child-list/child-list.component';
import { FamilyComponent } from './component/family/family.component';
import { SearchComponent } from './component/search/search.component';


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
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
