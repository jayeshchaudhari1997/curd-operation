import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  Fname:string="";
  Lname:any;
  mob:any;
  constructor() {
    const storedName = localStorage.getItem('Fname');
    if (storedName) {
      this.Fname = storedName;
    }
    const storedNLame = localStorage.getItem('Lname');
    if (storedNLame) {
      this.Lname = storedNLame;
    }
    const sMob = localStorage.getItem('mob');
    if (sMob) {
      this.mob = sMob;
    }
    

   }
  // Fname:any;
  // Lname:any;
  // mob:any;
  submitData() {

    localStorage.setItem('Fname',this.Fname);
    localStorage.setItem('Lname',this.Lname);
    localStorage.setItem('mob',this.mob);

  }


  ngOnInit(): void {
  }

}
