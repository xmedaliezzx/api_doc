import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-response-tbl2',
  templateUrl: './response-tbl2.component.html',
  styleUrls: ['./response-tbl2.component.scss'],
})
export class ResponseTbl2Component {
  @Input() responses2: any[] = [];
}
