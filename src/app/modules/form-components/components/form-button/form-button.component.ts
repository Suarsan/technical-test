import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements OnInit {

  @Output() click = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public clicked(e: any) {
    this.click.emit(e);
  }
}
