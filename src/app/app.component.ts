import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface IResult {
  terminnr: number;
  faelldat: string;
  betrag: number;
  waers : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})


export class AppComponent {
  // From values
  BUKRS: string = "";
  VERTRART: number = 0;
  CDDAT: string = "";
  FAELLDAT: string = "";
  LAUFZEIT: string = ""
  BETRAG: string = "";
  ZINS: string = "";
  VAG: string = "";
  WERS: string = "";

  showLoading:boolean = false;

  result: IResult[] = [];

  constructor(private http: HttpClient,
  ) { }
  makePostRequest() {
    this.showLoading = true;
    const httpOptions = {
 	 	headers: new HttpHeaders()
	}

    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    
    this.http.post<any>('http://saprpe.ifex.rpdom.local:8000/zrpay_rate?sap-client=100', { // change this URL
      BUKRS: this.BUKRS,
      VERTRART: this.VERTRART,
      CDDAT: this.CDDAT,
      FAELLDAT: this.FAELLDAT,
      LAUFZEIT: this.LAUFZEIT,
      BETRAG: this.BETRAG,
      ZINS: this.ZINS,
      VAG: this.VAG,
      WERS: this.WERS
    },).subscribe(sapResponse => {

      //this.result = sapResponse; // Enable this line 
      this.result = this.getDummyResponse();// comment this line  
      console.log(this.result);
      this.showLoading= false;

    })
  }

  clear(){
    this.result = [];
    this. BUKRS  = "";
    this.VERTRART = 0;
    this.CDDAT = "";
    this. FAELLDAT  = "";
    this. LAUFZEIT = ""
    this. BETRAG  = "";
    this. ZINS  = "";
    this.VAG  = "";
    this. WERS  = "";
  }
getDummyResponse():IResult[]{
  return [{
    "terminnr": 1,
    "faelldat": "2022-09-02",
    "betrag": 16.85,
    "waers": "EUR"
  }, {
    "terminnr": 2,
    "faelldat": "2022-10-02",
    "betrag": 16.85,
    "waers": "EUR"
  }, {
    "terminnr": 3,
    "faelldat": "2022-11-02",
    "betrag": 16.85,
    "waers": "EUR"
  }, {
    "terminnr": 4,
    "faelldat": "2022-12-0 2",
    "betrag": 16.85,
    "waers": "EUR"
  }, {
    "terminnr": 5,
    "faelldat": "2 023-01-02",
    "betrag": 16.85,
    "waers": "EUR"
  }, {
    "terminnr": 6,
    "faelldat": "2023-02-02",
    "betrag": 16.85,
    "waers": "EUR"
  }, {
    "terminnr": 7,
    "faelldat": "2023-03-02",
    "betrag": 16.85,
    "waers": "EUR"
  }, {
    "terminnr": 8,
    "faelldat": "2023-04-02",
    "betrag": 16.85,
    "waers": "E UR"
  }, {
    "terminnr": 9,
    "faelldat": "2023-05-02",
    "betrag": 16.85,
    "waers": "EUR"
  }, {
    "terminnr": 10,
    "faelldat": "2023-06-02",
    "betrag": 16.85,
    "waers": "EUR"
  }, {
    "terminnr": 12,
    "faelldat": "20 23-08-02",
    "betrag": 16.79,
    "waers": "EUR"
  }];
}
}
