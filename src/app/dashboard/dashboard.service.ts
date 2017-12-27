import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Widget } from './dashboard.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DashboardService {

  public getWidgets(): Observable<Widget[]> {
     const widgets = new Subject<Widget[]>();
     setTimeout(() => {
      widgets.next([
        { positionX: 0, positionY: 0, width: 4, height: 2, content: 'Widget 1' },
        { positionX: 4, positionY: 0, width: 4, height: 4, content: 'Widget 2' },
        { positionX: 8, positionY: 0, width: 2, height: 2, content: 'Widget 3' },
        { positionX: 10, positionY: 0, width: 2, height: 2, content: 'Widget 4' },
        { positionX: 0, positionY: 2, width: 2, height: 2, content: 'Widget 5' },
        { positionX: 2, positionY: 2, width: 2, height: 4, content: 'Widget 6' },
        { positionX: 8, positionY: 2, width: 4, height: 2, content: 'Widget 7' },
        { positionX: 0, positionY: 4, width: 2, height: 2, content: 'Widget 8' },
        { positionX: 4, positionY: 4, width: 4, height: 2, content: 'Widget 9' },
        { positionX: 8, positionY: 4, width: 2, height: 2, content: 'Widget 10' },
        { positionX: 10, positionY: 4, width: 2, height: 2, content: 'Widget 11' },
      ]);
     }, 1000);
     setTimeout(() => {
      widgets.next([
        { positionX: 0, positionY: 0, width: 4, height: 2, content: 'Widget 12' },
        { positionX: 4, positionY: 0, width: 4, height: 4, content: 'Widget 13' },
      ]);
     }, 5000);
     return widgets;
  }
}
