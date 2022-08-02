import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { info } from '../contactInfo.component';

@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.css']
})
export class InfoListComponent implements OnInit {

  constructor() { }


@Input() datas?:Array<info>;
 length:boolean=false;
ngOnChanges(changes:SimpleChange){


  }

  ngOnInit(): void {
  }

}
