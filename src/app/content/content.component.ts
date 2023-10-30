import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  @Output() drawerEvent = new EventEmitter();

  openCloseDrawer(): void {
    this.drawerEvent.emit('opened');
  }
}
