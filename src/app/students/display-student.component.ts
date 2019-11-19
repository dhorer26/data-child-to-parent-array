import { Component, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html'
})
export class DisplayStudentComponent {
  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  Employee = ['Mark', 'Mary', 'John'];

  // tslint:disable-next-line: no-shadowed-variable
  handleClick(Employee: Employee) {
    this.notify.emit(Employee);
  }
}
