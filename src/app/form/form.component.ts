import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private formB:FormBuilder, private Api:ApiService){}
  FormAllData:any;
  sendAllInfo(i:any){
    this.Api.SendData(i).subscribe(data=>{
    })
  }
  ngOnInit(): void {
    this.FormAllData=this.formB.group({
      FirstName:[''],
      LastName:[''],
      email:[''],
      pass:[''],
      Brithday:[''],
    }) 
  }
}
