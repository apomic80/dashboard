import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  @ViewChild('gridStackContainer')
  public gridStackContainer: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    $(this.gridStackContainer.nativeElement).gridstack();
  }

}
