import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductModel } from 'src/app/components/settings/product.module';
import { ProductService } from 'src/app/components/settings/product.service';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit{
  Products!: ProductModel[];
  colunas: string[]= ['nome','preco','açoes']
  ValueInput = ""
  
constructor(private service: ProductService) { }

ngOnInit(): void {
    this.service.read().subscribe(dadosProd => {
      this.Products = dadosProd;
    });
    console.log('lendo a tabela');
  }

  search(e:Event):void{
    const target = e.target as HTMLInputElement
    const value = target.value

    console.log(value);
    
  }
}
