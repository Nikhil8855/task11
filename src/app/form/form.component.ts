import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal,NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from "@angular/forms";
import { FormControl,FormGroup,Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class FormComponent implements OnInit {

  model: NgbDateStruct;


  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
        config.keyboard = false;
  }

  open(content) {
      this.modalService.open(content);
    }
  ngOnInit() {

  }

  login = new FormGroup({
    name: new FormControl(''),
    date: new FormControl(''),
    select: new FormControl(''),

})

get name(){
  return this.login.get('name');
}
get date(){
  return this.login.get('date');
}


onsubmit(){
  console.log(this.login.value);
}

}
