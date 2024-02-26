import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  searchedProd!:IProduct
  private searchedProdCat!:IProduct[]
  constructor(private prodServ:ProductsService,private route:ActivatedRoute){}
  ngOnInit() {
    let ID:number = Number(this.route.snapshot.paramMap.get('id'))
    this.searchedProd = this.prodServ.getproductDetails(ID)!
    this.searchedProdCat = this.prodServ.getproductByCategory("TV")!
    console.log(this.searchedProd);
    
  }
}
