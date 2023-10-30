import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'doc';
  drawerState: string = 'closed';
  target: BehaviorSubject<any> = new BehaviorSubject(null);
  targetValue!: any;
  targetId!: number;
  openDrawer(state: any) {
    this.drawerState = state;
  }

  constructor() {}

  ngOnInit() {
    this.target.subscribe((target) => {
      this.targetValue = target;
    });
  }

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: any) {
  //   console.log(this.targetId);
  //   console.log('scroll', this.targetValue.getBoundingClientRect().top);
  // }

  // diff(
  //   {
  //     target,
  //     visible,
  //   }: {
  //     target: Element;
  //     visible: boolean;
  //   },
  //   id: number
  // ): void {
  //   if (visible) {
  //     this.targetId = id;
  //     this.target.next(target);
  //   }
  // }
}
