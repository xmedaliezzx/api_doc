import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {
  @Input() drawerState: string = 'closed';
  @Input() api: string = '';
  @Input() body: any = {};
  @Input() method: string = '';

jsons = {
name: 'jhon',
lastName : 'Doe' 
}
  @Output() state: EventEmitter<string> = new EventEmitter();


  changeDrawerState(state:string):void {
    this.state.emit(state);    
  }
}
