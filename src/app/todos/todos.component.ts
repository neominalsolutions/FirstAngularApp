import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  data: Todo[] = [];

  ngOnInit(): void {
    // promise Then burada subscribe karşılık gelir.
    this.httpClient
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe((res) => {
        this.data = res;
      });
  }
}
