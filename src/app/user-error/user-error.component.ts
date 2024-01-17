import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-error',
  templateUrl: './user-error.component.html',
  styleUrls: ['./user-error.component.css']
})
export class UserErrorComponent {

  @Input() public Error_Field:any;
  @Input() public Error_Message:any;
  @Input() public Hint:any;
  @Output() public closeEvent = new EventEmitter()
  
  closeError(){
    this.closeEvent.emit()
  }
}