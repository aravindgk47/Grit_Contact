import { Component, OnInit } from '@angular/core';
import { info } from '../contactInfo.component';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  username!: string;
  dob!: Date;
  phoneNo!: number;
  empList: Array<info> = [];


  ngOnInit(): void {
  }
 

  submit()
  {
    
    this.empList.push({dob:this.dob,name:this.username,phnNO:this.phoneNo});

    console.log(this.empList)
  }
    
}
