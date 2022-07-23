import { coreConfigVersion } from './../../../tnd-platform-core/src/lib/core.config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fte-tracker',
  template: `
    <p>
      tnd-fte-tracker works! 3.0.0 Core: {{coreVersion}}
    </p>
  `,
  styles: [
  ]
})
export class FteTrackerComponent implements OnInit {

  coreVersion = coreConfigVersion;

  constructor() { }

  ngOnInit(): void {
  }

}
