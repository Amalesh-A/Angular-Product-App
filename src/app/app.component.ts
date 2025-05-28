import { Component } from '@angular/core';
import { ProductlistComponent } from './components/productlist/productlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ProductlistComponent],
  standalone: true
})
export class AppComponent {
  title = 'Angular-Product-App';
}
