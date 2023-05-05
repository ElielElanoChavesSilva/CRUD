import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../settings/product.module';
import { ProductService } from '../settings/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
product!: ProductModel

constructor(private service: ProductService, private route: ActivatedRoute, private router: Router) { }

ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get("id"));
  if(id){
    this.service.readId(id).subscribe((product) => {
      this.product= product
  })
};
}

delete():void {
  this.service.delete(this.product.id).subscribe(()=>{    
    window.location.reload()
    this.router.navigateByUrl("/")
  })
 }
}