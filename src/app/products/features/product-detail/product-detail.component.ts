import { Component, effect, inject, input } from '@angular/core';
import { ProductsDetailSateService } from '../../data-access/product-detail-state.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  providers:[
    ProductsDetailSateService,
    
  ]
})
export default class ProductDetailComponent {

  productsDetailSateService = inject(ProductsDetailSateService).state;

 id = input.required<string>();

 constructor(){
  effect(()=>{
    console.log(this.id())
    this.productsDetailSateService.getById(this.id())
  })
 }

}
