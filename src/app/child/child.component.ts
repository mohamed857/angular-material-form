import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input({required: true}) course: string = '';
   x:string= 'bro';
   @Output() XEvent= new EventEmitter();

   method2=()=>{
    this.XEvent.emit(this.x);
   }
}
