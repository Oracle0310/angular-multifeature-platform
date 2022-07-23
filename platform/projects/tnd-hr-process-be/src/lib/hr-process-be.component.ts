import { coreConfigVersion } from './../../../tnd-platform-core/src/lib/core.config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hr-process-be',
  template: `
    <p>
      tnd-hr-process-be works! 3.0.0 Core: {{coreVersion}}
    </p>
  `,
  styles: [
  ]
})
export class HrProcessBeComponent implements OnInit {

  coreVersion = coreConfigVersion;

  constructor() { }

  ngOnInit(): void {
  }

}
