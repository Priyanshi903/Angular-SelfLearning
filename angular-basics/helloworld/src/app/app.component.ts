import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles:[`
         h1{color:blue}
  `]
})
export class AppComponent implements OnInit {

  products: any;

  constructor(private http: HttpClient) { }

  title = 'helloworld';

  ngOnInit() {
    let res = this.http.get('http://localhost:9000/product');
    res.subscribe((data) => {
      this.products = data;
      console.log(data);
    });
  }
}
