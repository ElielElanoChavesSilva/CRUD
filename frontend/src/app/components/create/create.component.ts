import { ProductService } from 'src/app/components/settings/product.service';
import { Component } from '@angular/core';
import { ProductModel } from '../settings/product.module';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  Product: ProductModel ={
    id: 0,
    nome: '',
    preco: null,    
  }
  
  constructor(private service: ProductService) { }
  criar(): void {
    this.service.create(this.Product).subscribe(()=>{
      window.location.reload()
    }
    )
  }
}
