import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements OnInit {

  @Input() type: string;
  @Output() click = new EventEmitter<any>();

  constructor() { 
    this.type = 'button';
  }

  ngOnInit(): void {
  }

  public clicked(e: any) {
    this.click.emit(e);
  }
}
