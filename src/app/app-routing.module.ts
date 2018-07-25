import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const ROUTES: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', component: UserComponent},
  {path: 'users/:id', component: UserDetailComponent},
  {path: 'tasks', component: TaskComponent},
  {path: 'tasks/:id', component: TaskDetailComponent}
]
 
@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
