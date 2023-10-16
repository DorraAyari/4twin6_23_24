import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private invoices: any[] = [
    { id: 1, montantFacture: 100, montantRemise: 10,  dateFacture: '01/01/2022', active: true },
    { id: 2, montantFacture: 200, montantRemise: 90, dateFacture: '02/01/2022', active: false },
    { id: 3, montantFacture: 300, montantRemise: 90, dateFacture: '03/01/2022', active: true },
    { id: 4, montantFacture: 450, montantRemise: 40, dateFacture: "14/12/2020", active: true }

  ];
  getInvoiceById(id: number) {
    return this.invoices.find(invoice => invoice.id === id);
  }
  constructor() { }
}
