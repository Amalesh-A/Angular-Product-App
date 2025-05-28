import { Component } from '@angular/core';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ProductlistComponent, RouterOutlet, RouterLink],
  standalone: true
})
export class AppComponent {
  title = 'Angular-Product-App';
}
