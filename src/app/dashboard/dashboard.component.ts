import { Component, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Widget } from './dashboard.model';

declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements AfterViewChecked {

  public widgets: Widget[];

  constructor(
    private cd: ChangeDetectorRef,
    private service: DashboardService) {
    this.loadWidgets();
  }

  ngAfterViewChecked() {
    if (this.widgets) {
      $('.grid-stack').gridstack();
    }
  }

  public loadWidgets() {
    this.service.getWidgets()
      .subscribe(arg => {
        this.widgets = arg;
        const grid = $('.grid-stack').data('gridstack');
        if (grid) {
          grid.destroy(false);
        }
      });
  }

}
