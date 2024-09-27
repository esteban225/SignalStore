import { inject, Injectable } from "@angular/core";
import { product } from "../../shared/interfaces/product.interface";
import { signalSlice } from "ngxtension/signal-slice";
import { ProductsService } from "./products.service";
import { map, Observable, switchMap } from "rxjs";


interface State {
    product: product | null,
    status: 'loading' | 'success' | 'error';

}


@Injectable({
    providedIn: 'root',
})

export class ProductsDetailSateService {

    private productsService = inject(ProductsService);
    private initialState: State = {
        product: null,
        status: 'loading' as const,

    };


    state = signalSlice({
        initialState: this.initialState,
        actionSources: {
            getById: (_state, $: Observable<string>) => $.pipe(
              switchMap((id) => this.productsService.getProduct(id)),
              map(data => ({product: data,  status: 'success' as const})),

            )
        }
    });
}