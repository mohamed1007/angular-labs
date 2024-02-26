import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { ShadowDirective } from '../../Directives/shadow.directive';
import { CommonModule } from '@angular/common';
import { CutPipe } from '../../pipes/cut.pipe';
import { ProductsService } from '../../services/products.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule , ShadowDirective,CommonModule,CutPipe,RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  clientName:string ="Mohamed"
  date:Date= new Date()
  showImg:boolean =true
  creCard:number = 1234567890123456
  products!:IProduct[]
  filteredProducts:IProduct[]=[]
  constructor(private prodServ:ProductsService ){
  }
  
  ngOnInit(): void {
    this.products = this.prodServ.getAllProducts()
    this.filteredProducts = this.products
  }
  @Output() addChildEvent:EventEmitter<IProduct> = new EventEmitter<IProduct>();
  @Input() set filterVal(val:string){
    if(val == "All Categories"||val == ""){
      this.filteredProducts = this.products
    }else{
      this.filteredProducts = this.filterList(val)
    }
  }
  filterList(value:string) {
    return this.products.filter((product:IProduct)=>product.categoryID==value )
  }

  toggleImg(){
    this.showImg = !this.showImg;
  }
  purchase(product:IProduct){
    product.Quantity -=1
  }
  Date(product:IProduct){
    this.date = new Date(Date.now())
    product.isPurchased = true
  }
  addToCart(product:IProduct){
    this.addChildEvent.emit(product)
  }
}
function ngOnInit(): (target: ProductListComponent, propertyKey: "addChildEvent") => void {
  throw new Error('Function not implemented.');
}

