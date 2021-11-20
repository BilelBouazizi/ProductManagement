import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  //notre liste de produit peut etre null et on initialize with null
  products:Product[]|null=null;

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
  }
  OnGetAllProducts(){
    this.productService.getAllProducts().subscribe(data=>{
      this.products=data;
    },err =>{
      console.log(err);
    })
  }
}
