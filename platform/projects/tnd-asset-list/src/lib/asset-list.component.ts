import { Component, OnInit } from '@angular/core';
import * as core from 'tnd-core';

@Component({
  selector: 'asset-list',
  template: `
    <p>
      tnd-asset-list works! 2.3.4
      Magic new feature added
      Core: {{coreVersion}}
    </p>
  `,
  styles: [
  ]
})
export class AssetListComponent implements OnInit {

  coreVersion = core.coreConfigVersion;

  constructor() { }

  ngOnInit(): void {
  }

}
