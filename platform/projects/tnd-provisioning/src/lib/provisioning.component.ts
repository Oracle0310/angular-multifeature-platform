import { Component, OnInit } from '@angular/core';
import * as core from 'tnd-core';

@Component({
  selector: 'provisioning',
  template: `
    <p>
      tnd-provisioning works! 2.3.4
      Core: {{coreVersion}}
    </p>
  `,
  styles: [
  ]
})
export class ProvisioningComponent implements OnInit {

  coreVersion = core.coreConfigVersion;

  constructor() { }

  ngOnInit(): void {
  }

}
