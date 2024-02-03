import { Component, Output } from '@angular/core';
import { PageTitleComponent } from '../page-title/page-title.component';
import { AddButtonComponent } from '../add-button/add-button.component';

@Component({
  selector: 'main-content',
  standalone: true,
  imports: [PageTitleComponent, AddButtonComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  @Output()
  title: string = "Orders"

  @Output()
  btnTitle: string = "Order"
}
