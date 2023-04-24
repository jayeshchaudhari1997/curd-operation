import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  EditAllData: any;
  constructor(private formB: FormBuilder, private ActivRout: ActivatedRoute, private Api: ApiService) { }
  ngOnInit(): void {
    this.EditAllData = new FormGroup({
      FirstName: new FormControl(''),
      LastName: new FormControl(''),
      email: new FormControl(''),
      pass: new FormControl(''),
      Brithday: new FormControl(''),
    })
    console.log(this.ActivRout.snapshot.params['id']);
    this.Api.EditData(this.ActivRout.snapshot.params['id']).subscribe((data) => {
      // console.log(data);
      this.EditAllData = new FormGroup({
        FirstName: new FormControl(data['FirstName']),
        LastName: new FormControl(data['LastName']),
        email: new FormControl(data['email']),
        pass: new FormControl(data['pass']),
        Brithday: new FormControl(data['Birthday']),
      })
    })
  }
  editFun() {
    console.log(this.EditAllData.value);
    this.Api.updateData(this.ActivRout.snapshot.params['id'], this.EditAllData.value).subscribe((data) => {
      console.log(data);
    })
  }
}
