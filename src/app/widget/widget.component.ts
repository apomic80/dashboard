import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent {

  @HostBinding('class')
  gridClass = 'grid-stack-item';

  @HostBinding('attr.data-gs-x')
  @Input()
  public positionX: number;

  @HostBinding('attr.data-gs-y')
  @Input()
  public positionY: number;

  @HostBinding('attr.data-gs-width')
  @Input()
  public width: number;

  @HostBinding('attr.data-gs-height')
  @Input()
  public height: number;

  constructor() { }
}
