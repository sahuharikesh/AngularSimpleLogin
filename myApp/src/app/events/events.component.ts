import { Component, OnInit } from '@angular/core';
import{EventService} from '../event.service'
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events:any
  constructor(private _event:EventService) { }

  ngOnInit(): void {
    this._event.getEvent()
    .subscribe(
      res=>this.events=res,
      // console.log(res)

      err=>console.log(err)
      );

  }

}
