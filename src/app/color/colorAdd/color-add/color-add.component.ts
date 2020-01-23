import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {
  addColor:FormGroup;
  constructor() { }

  ngOnInit() {
  }
  onColorAdd()
  {

  }
}
