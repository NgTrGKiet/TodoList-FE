import { Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskFormComponent } from './task/task-form/task-form.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'task', component: TaskComponent, children: [
            { path: 'list', component: TaskListComponent },
            { path: 'new', component: TaskFormComponent },
            { path: 'edit/:id', component: TaskFormComponent }
        ]
    },
    { path: '**', redirectTo: '' }
];
