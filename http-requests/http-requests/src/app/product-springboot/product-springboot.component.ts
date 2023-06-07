import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-springboot',
  templateUrl: './product-springboot.component.html',
  styleUrls: ['./product-springboot.component.css']
})
export class ProductSpringbootComponent implements OnInit {
  products: any;
  postData = { 'product_id': 'test', 'product_name': 'test', 'product_price': 100, 'product_description': 'test' }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.http.get('http://localhost:8081/product').subscribe((data) => {
    //   this.products = data;
    //   console.log(data);
    // });
  }

  onCreatePost(postData2: { 'product_id': string, 'product_name': string, 'product_price': number, 'product_description': string }
  ) {
    // Send Http request
    this.http.post('http://localhost:8081/product', postData2)
      .subscribe(responseData => {
        console.log(responseData);
      });
    console.log(postData2);
  }

  // two post requests sent:frst to chk whether url is valid or not, it is of type OPTIONS & 2nd to actually send to that url
  // onCreatePost2(postData2) {
  //   // Send Http request
  //   this.http.post('http://localhost:8081/product', postData2.value)
  //     .subscribe(responseData => {
  //       console.log(responseData);
  //     });
  //   console.log(postData2);
  // }

}
