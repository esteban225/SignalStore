import { Component, input } from '@angular/core';
import { product } from '../../../shared/interfaces/product.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products-card.component.html',
  styles: ``
})
export class ProductsCardComponent {
  product = input.required<product>();

}


