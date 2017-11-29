import { Component, OnInit } from '@angular/core';
import { Http, URLSearchParams, RequestOptions } from '@angular/http';
import { SearchRequestsService } from '../../services/search-requests.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  address: string;

  constructor(private http: Http,
    private searchReqService: SearchRequestsService) { }

  ngOnInit() {
  }


  search() {

    this.searchReqService.search(this.address).subscribe(data => {
      console.log(data);
    });
  }

}
