import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../settings/product.service';
import { ProductModel } from '../settings/product.module';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  constructor(private service: ProductService,private route:ActivatedRoute, private router:Router){}
  product!: ProductModel

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.readId(id ? +id:0).subscribe(product => {
      this.product = product
    });
  }
  atualizar() {
    return this.service.update(this.product).subscribe(()=>{
      this.router.navigateByUrl('')
    })
  }
}
