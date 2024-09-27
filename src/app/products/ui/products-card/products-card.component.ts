import { Component, input } from '@angular/core';
import { product } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-products-card',
  standalone: true,
  imports: [],
  templateUrl: './products-card.component.html',
  styles: ``
})
export class ProductsCardComponent {
  product = input.required<product>();

}


