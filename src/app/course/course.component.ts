import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';


@Component({
  selector: 'app-course',
  
  //templateUrl: './course.component.html',
  template : `<h2>{{ title }} </h2>
            <ul>
             <li *ngFor="let txtcourse of courses">
              {{ txtcourse }}
             </li>
            </ul>
            `,
  styleUrls: ['./course.component.css']
})

export class CourseComponent  {
title = "List of Courses";
courses;

constructor()
{
  let service=new CourseService();
  this.courses = service.getCourses();
}

}