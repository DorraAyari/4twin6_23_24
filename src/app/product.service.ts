import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Products: Product[] = [
    { id: 1, code: 127, libelle: 'PC', prixunitaire: 2000, tauxTva: 10 },
    { id: 2, code: 128, libelle: 'PC', prixunitaire: 1000, tauxTva: 20 },
    { id: 3, code: 129, libelle: 'Table', prixunitaire: 200, tauxTva: 30 },
  ];

  constructor() {}

  getAllProducts(): Product[] {
    return this.Products;
  }

  getNbProductsByLibelle(libelle: string): number {
    const productsWithLibelle = this.Products.filter(product => product.libelle === libelle);
    return productsWithLibelle.length;
  }
}
