import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class EventService {
  private _eventUrl="https://whimsical-burnt-raja.glitch.me/api/events";
  private _specialUrl="https://whimsical-burnt-raja.glitch.me/api/special";

  constructor(private http:HttpClient) { }
  getEvent(){
    return this.http.get<any>(this._eventUrl)
   }

   getSpecial(){
    return this.http.get<any>("https://whimsical-burnt-raja.glitch.me/api/special")
   }
}
