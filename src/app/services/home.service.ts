import { Injectable } from '@angular/core';
import {environment} from "../enviroments/environments";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPosti(index: any){
    return this.http.get<any>(`${this.baseUrl}/specialists/${index}`);

  }
  getPost(){
    return this.http.get<any>(`${this.baseUrl}/specialists`);

  }
}


