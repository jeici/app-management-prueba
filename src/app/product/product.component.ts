import { Component, OnInit } from '@angular/core';
import {ProductService} from '../_services/product.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  content:string;
  lst:any;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      data =>{
        this.lst = data;
      }, err =>{
        swal.fire({
          title: 'Seguridad',
          text: 'Acceso denegado',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        
        }).then(confirm=>{
          if(confirm){
            this.reloadLogin();
          }
        });
      }
    );
  }

  reloadLogin(): void {
    window.location.href='/login';
  }

}
