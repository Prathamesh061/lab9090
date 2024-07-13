// parent.component.ts
import { Component, AfterViewInit, ViewChild, QueryList } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  template: `
    <h4>Parent Component</h4>
    <input
      [style.backgroundColor]="green"
      [class.lol]="toggle"
      (click)="toggleColor()"
      (keydown.code.control.s)="handleKeyStrokes()"
    />
  `,
  styles: `
  .lol {
    background-color : red;
  }
  `,
  imports: [ChildComponent],
  standalone: true,
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent) childComponent!: QueryList<ChildComponent>;

  green = 'green';
  toggle = false;

  toggleColor() {
    this.toggle = !this.toggle;
  }

  handleKeyStrokes() {
    alert('Lawde ede chale mt kr');
  }

  ngAfterViewInit() {
    console.log('viewchild', this.childComponent); // Logs the instance of ChildComponent
  }
}
