import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  constructor(private formB:FormBuilder, private Api:ApiService){}
  FormAllData:any;
  FormFun(){

  }
  sendAllInfo(i:any){
   
    this.Api.SendData(i).subscribe(data=>{
// console.log(data);

    })

  }
  ngOnInit(): void {
    this.Api.getData().subscribe((data)=>{
      // console.log(data);
      
    })
    this.FormAllData=this.formB.group({
      FirstName:[''],
      LastName:[''],
      email:[''],
      pass:[''],
      Brithday:[''],
    })
   
    
  }
}
