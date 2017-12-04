import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Http, URLSearchParams, RequestOptions } from '@angular/http';
import { SearchRequestsService } from '../../services/search-requests.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  address: string;
  results: any;
  unit: string = "miles";
  _range = 100;

  @Input() set range(range: number) {
    this._range = range;
    this.doSomething(this._range);
  }

  doSomething(number) {
    if (number == 1){
      this.unit = "mile"
    }
    else {
      this.unit = "miles";
    }
  }




  constructor(private http: Http,
    private searchReqService: SearchRequestsService) { }

    ngOnInit() {
    }


    search() {

      this.searchReqService.search(this.address, this._range).subscribe(data => {
        this.results = data;
        console.log(this.results)

      });
    }

  }
