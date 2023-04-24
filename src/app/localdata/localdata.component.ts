import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-localdata',
  templateUrl: './localdata.component.html',
  styleUrls: ['./localdata.component.css']
})
export class LocaldataComponent implements OnInit {

  constructor(private FormB: FormBuilder, private rout:Router) { }
  FormAllData: any;
  Fname: any;
  Lname: any;
  mob: any;
  Edit(){
    this.rout.navigate(['/show'])
    

  }
  submitData() {

    localStorage.setItem('Fname', this.Fname);
    localStorage.setItem('Lname', this.Lname);
    localStorage.setItem('mob', this.mob);
    this.rout.navigate(['/show'])
    
  }

  ngOnInit(): void {
// localStorage.removeItem('Fname');
// localStorage.removeItem('Lname');
// localStorage.removeItem('mob');
  }

}
