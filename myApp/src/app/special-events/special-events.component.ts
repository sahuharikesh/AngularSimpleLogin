import { Component, OnInit } from '@angular/core';
import{EventService} from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss']
})
export class SpecialEventsComponent implements OnInit {
specialEvent:any
  constructor(private _special:EventService, private _router:Router) { }

  ngOnInit(): void {
    this._special.getEvent()
    .subscribe(
      res=>this.specialEvent=res,
      err=>{
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
               this._router.navigate(['/login'])
          }
        }
      }
      );
  }

}
