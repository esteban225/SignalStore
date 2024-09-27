import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/data-access/base-http.service";
import { Observable } from "rxjs";
import { product } from "../../shared/interfaces/product.interface";

const limit  = 5;


@Injectable({
    providedIn: 'root',
})
export class ProductsService extends BaseHttpService {

    getProducts(page: number): Observable<product[]> {

        return this.http.get<any[]>(`${this.apiUrl}/products`,{
            params: {
                limit: page * limit
            }
        });
    }

    getProduct(id: string):  Observable<product> {
        return this.http.get<any>(`${this.apiUrl}/products/${id}`);
    }



}

