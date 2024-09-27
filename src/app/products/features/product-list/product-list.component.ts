import { Component, inject } from '@angular/core';
import { ProductsSateService } from "../../data-access/products-state.service";
import { ProductsCardComponent } from '../../ui/products-card/products-card.component';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductsCardComponent,
  ],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [
    ProductsSateService,

  ],
})
export default class ProductListComponent {
  productsState = inject(ProductsSateService);


  changePage() {
    const page = this.productsState.state.page() + 1 ;
    this.productsState.changePages$.next(page);
  }
}

