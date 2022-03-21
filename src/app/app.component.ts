import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courses = [1, 2];

  viewMode = 'map';

  courses2 = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
  ];

  onAdd(){
    this.courses2.push({id:4, name:'course4'})
  };

  onRemove(course: any){
    let index = this.courses2.indexOf(course);
    this.courses2.splice(index, 1);
  };

  onChange(course: any){
    course.name = 'Updated';
  };

  loadCourses(){
    this.courses2 = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' }
    ]
  };

  trackCourse(index:any, course:any){
    return course? course.id : undefined;
  }

}
