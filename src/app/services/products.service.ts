import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MyProduct } from '../models/my-product';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:IProduct[] = [
    {
      ID:1,
      Name:"Samsung TV",
      Quantity:12,
      Price:20000,
      Img:"assets/tv.avif",
      categoryID:"TV",
      isPurchased:false
    },
    {
      ID:2,
      Name:"LG TV",
      Quantity:10,
      Price:18000,
      Img:"assets/tv.avif",
      categoryID:"TV",
      isPurchased:false
    },
    {
      ID:3,
      Name:"Dell Laptop",
      Quantity:8,
      Price:35000,
      Img:"assets/laptop.webp",
      categoryID:"Laptops",
      isPurchased:false
    },
    {
      ID:4,
      Name:"HP Laptop",
      Quantity:9,
      Price:30000,
      Img:"assets/laptop.webp",
      categoryID:"Laptops",
      isPurchased:false
    },
    {
      ID:5,
      Name:"Iphone",
      Quantity:4,
      Price:70000,
      Img:"assets/iphone.png",
      categoryID:"Mobile Phones",
      isPurchased:false
    },
    {
      ID:6,
      Name:"Samsung Phone",
      Quantity:2,
      Price:80000,
      Img:"assets/iphone.png",
      categoryID:"Mobile Phones",
      isPurchased:false
    },
    {
      ID:7,
      Name:"Dell PC",
      Quantity:1,
      Price:40000,
      Img:"assets/pc.avif",
      categoryID:"PC",
      isPurchased:false
    },
    {
      ID:8,
      Name:"Asus PC",
      Quantity:0,
      Price:32000,
      Img:"assets/pc.avif",
      categoryID:"PC",
      isPurchased:false
    }
  ];
  constructor(private _HttpClient: HttpClient) {}

  getAllProducts(): IProduct[] {
    return this.products;
  }

  getproductDetails(id: number): IProduct | undefined {
    return this.products.find((item) => item.ID == id);
  }
  getproductByCategory(catid: string) {
    return this.products.filter((item) => item.categoryID == catid);
  }

  // new//
  getCategories(): Observable<any> {
    return this._HttpClient.get(`http://localhost:3000/categories`);
  }

  addProduct(product: MyProduct): Observable<MyProduct> | undefined {
    return this._HttpClient.post<MyProduct>(
      `http://localhost:3000/products`,
      product
    );
  }
  getProducts(): Observable<MyProduct> | undefined {
    return this._HttpClient.get<MyProduct>(`http://localhost:3000/products`);
  }
  updateProduct(product: any): Observable<any> | undefined {
    return this._HttpClient.put<any>(
      `http://localhost:3000/products/${product.id}`,
      product
    );
  }
  deleteProduct(id: number): Observable<MyProduct> {
    return this._HttpClient.delete<MyProduct>(
      `http://localhost:3000/products/${id}`
    );
  }
}
