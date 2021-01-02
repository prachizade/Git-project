import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor() { }

  headers = ['col1','col2','col3','col4','col5',"col6"];
  results = [
    ["Sam","123","Types","Hello","World","Ninja"],
    ["Sam","123","Types","Hello","World","Ninja"]
  ];
  ngOnInit(): void {
  }

}
