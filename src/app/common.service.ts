import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommonService {

  constructor(private http: HttpClient) { }

  getChuckNorrisWordsOfWisdom() {
    return this.http.get('https://api.chucknorris.io/jokes/random');
  }
  

}
