import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private Api:ApiService, private rout:Router) { }
  DeleteData(Id:any){
    this.Api.DeleteData(Id.id).subscribe((data)=>{
      alert("this Information is deleted....");
    })
  }
  
tableAllInfo:any;
  ngOnInit(): void {
    this.Api.getData().subscribe(data=>{
      this.tableAllInfo=data;
      
    })
  }

}
