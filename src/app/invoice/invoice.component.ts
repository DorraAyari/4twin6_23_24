import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from '../model/Invoice';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit{
  id!: number;
  active!: boolean;
  montantFacture!:number;
  montantRemise!:number;
  dateFacture!:string;
  invoice: any;

  list: Invoice[] = [
    { idFacture: 1, montantFacture: 120, montantRemise: 10, dateFacture: "12/12/2021", active: true },
    { idFacture: 2, montantFacture: 1020, montantRemise: 90, dateFacture: "22/11/2020", active: true },
    { idFacture: 3, montantFacture: 260, montantRemise: 30, dateFacture: "18/10/2020", active: false },
    { idFacture: 4, montantFacture: 450, montantRemise: 40, dateFacture: "14/12/2020", active: true }
  ];
  constructor(private route: ActivatedRoute, private invoiceService: InvoiceService, private router: Router) {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.active = params['active'] === 'true';
    });
  }
  ngOnInit() {
    this.invoice = this.invoiceService.getInvoiceById(this.id);
  }
  retour() {
    this.router.navigate(['mainInvoice']);
}
}
