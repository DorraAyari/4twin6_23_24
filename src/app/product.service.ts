import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Products: Product[] = [];

  constructor() {
    this.Products = [
      { id: 1, code: 101, libelle: 'Produit 1', prixunitaire: 10, tauxTva: 0.2 },
      { id: 2, code: 102, libelle: 'Produit 2', prixunitaire: 15, tauxTva: 0.2 },
      { id: 3, code: 103, libelle: 'Produit 3', prixunitaire: 20, tauxTva: 0.2 },
    ];
  }

  getAllProducts(): Product[] {
    return [
      { id: 1, code: 127, libelle: 'PC', prixunitaire: 2000, tauxTva: 10 },
      { id: 2, code: 128, libelle: 'TV', prixunitaire: 1000, tauxTva: 20 },
      { id: 3, code: 129, libelle: 'Table', prixunitaire: 200, tauxTva: 30 },
    ];
  }
  getNbProductsByLibelle(libelle: string): number {
    const productsWithLibelle = this.Products.filter(product => product.libelle === libelle);
    return productsWithLibelle.length;
  }

}
