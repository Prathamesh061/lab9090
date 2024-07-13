// child.component.ts
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-child',
  template: `
    <p>Child Component : {{ id }}</p>
    <button (click)="goToItems()">Go to</button>
  `,
  standalone: true,
})
export class ChildComponent {
  @Input()
  id!: number;

  constructor(private router: Router, private route: ActivatedRoute) {}
  goToItems() {
    this.router.navigate(['items'], { relativeTo: this.route });
  }
}
