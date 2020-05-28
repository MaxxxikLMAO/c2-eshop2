import { Component, OnInit } from '@angular/core';
import {Product} from '../../Product.model';
import {HttpClient} from '@angular/common/http';
import {CategoryService} from '../Services/category.service';
import {ActivatedRoute} from '@angular/router';
import {CategoryInfo} from '../../CategoryInfo.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public product: Product;

  constructor(private httpClient: HttpClient, private ctgry: CategoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.ctgry.getProductById(params.id)
          .subscribe((products: Product) => {
            this.product = products;
          });
      });
  }

}
