import {
  Component,
  Input,
  ElementRef,
  ViewEncapsulation,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'button[appCustomButton]',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.Emulated,
  styles: [
    `
      :host {
        background-color: var(--background-color, #007bff);
        color: var(--text-color, white);
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 16px;
        border-radius: 4px;
      }
      :host(:hover) {
        background-color: var(--background-color-hover, #0056b3);
      }
      :host(:disabled) {
        background-color: gray;
        cursor: not-allowed;
      }
    `,
  ],
  standalone: true,
})
export class CustomButtonComponent implements OnInit {
  ngOnInit() {}
  @Input() set backgroundColor(color: string) {
    this.setStyle('--background-color', color);
  }

  @Input() set backgroundColorHover(color: string) {
    this.setStyle('--background-color-hover', color);
  }

  @Input() set textColor(color: string) {
    this.setStyle('--text-color', color);
  }

  @Output() panelClosed = new EventEmitter<void>();

  private setStyle(variable: string, value: string) {
    this.element.nativeElement.style.setProperty(variable, value);
  }

  constructor(private element: ElementRef) {}
}
