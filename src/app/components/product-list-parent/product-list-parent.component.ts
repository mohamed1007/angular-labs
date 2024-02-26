import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from '../product-list/product-list.component';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-product-list-parent',
  standalone: true,
  imports: [FormsModule,ProductListComponent],
  templateUrl: './product-list-parent.component.html',
  styleUrl: './product-list-parent.component.scss'
})
export class ProductListParentComponent {
  filterVal:string=""
  cart:IProduct[]=[]
  getData(product:IProduct){
    this.cartTotal=0
    let index:number = this.cart.findIndex(item=> item.ID==product.ID)
    if(index==-1){
      let newItem:IProduct = {
        ID:product.ID,
        Name:product.Name,
        Quantity:1,
        Price:product.Price,
        Img:product.Img,
        categoryID:product.categoryID,
        isPurchased:product.isPurchased
      }
      this.cart.push(newItem)
    }else{
      this.cart[index].Quantity+=1
    }
    console.log(this.cart);
    this.cart.forEach(item => {
      this.cartTotal += (item.Quantity * item.Price);
    });     
  }
  cartTotal:number =0
}
