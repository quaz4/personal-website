import { Component, OnInit, Input } from '@angular/core';
import { TimelineEntry } from 'src/app/models/TimelineEntry';
import * as humanizeDuration from 'humanize-duration';

@Component({
  selector: 'app-timeline-entry',
  templateUrl: './timeline-entry.component.html',
  styleUrls: ['./timeline-entry.component.scss']
})
export class TimelineEntryComponent implements OnInit {

  @Input() data: TimelineEntry;
  @Input() theme: string;

  constructor() { }

  timeString(): string {
    let end: number;

    if (!this.data.end) {
      end = Date.now();
    } else {
      end = this.data.end.getTime();

    }

    return humanizeDuration(end - (this.data.start.getTime()), { units: ['y', 'mo'], round: true });
  }

  ngOnInit(): void {
  }

}
