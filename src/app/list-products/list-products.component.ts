import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  ListProduct: Product[] = [];
  productCountMap: { [libelle: string]: number } = {};
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.ListProduct = this.productService.getAllProducts();
  }
  calculateProductCount(libelle: string) {
    const count = this.productService.getNbProductsByLibelle(libelle);
    this.productCountMap[libelle] = count;
  }
}
