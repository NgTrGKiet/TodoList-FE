import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { TaskComponent } from '../task.component';
import { HttpClientModule } from '@angular/common/http';
import { UserTask } from '../../models/UserTask';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, TaskComponent, RouterOutlet],
  providers: [HttpClientModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  UserTask: UserTask[] = [];

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((response) => {
      this.UserTask = response.result;
    }, (error) => {
      console.error('Error fetching tasks:', error);
    });
  }

  deleteReservation(id: number): void {
    id = +id;
    this.taskService.deleteTask(id).subscribe((reservation) => {
      console.log('Delete request got processed');
      this.loadTasks()
    }, (error) => {
      console.error('Error deleting task:', error);
    })
  }
}
