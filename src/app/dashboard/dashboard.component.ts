import { Component, ViewChild, ElementRef, AfterViewChecked, OnDestroy } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Widget } from './dashboard.model';

declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [DashboardService]
})
export class DashboardComponent implements AfterViewChecked, OnDestroy {

  @ViewChild('gridStackContainer')
  public gridStackContainer: ElementRef;

  public widgets: Widget[];

  constructor(
    private service: DashboardService) {
    this.loadWidgets();
  }

  ngAfterViewChecked() {
    if (this.widgets) {
      $(this.gridStackContainer.nativeElement).gridstack();
    }
  }

  public loadWidgets() {
    this.service.getWidgets()
      .subscribe(arg => {
        this.widgets = arg;
        this.destroyGrid();
      });
  }

  private destroyGrid() {
    const grid = $(this.gridStackContainer.nativeElement).data('gridstack');
    if (grid) {
      grid.destroy(false);
    }
  }

  ngOnDestroy() {
    this.destroyGrid()
  }

}
