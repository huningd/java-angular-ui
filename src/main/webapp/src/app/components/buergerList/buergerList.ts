import { Component, View, CORE_DIRECTIVES } from 'angular2/angular2';

import {BuergerService} from '../../services/buergerService';

@Component({})
@View({
	templateUrl: 'app/components/buergerList/buergerList.html',
	directives: [CORE_DIRECTIVES]
})
export class BuergerList {
  buerger: Array<any>;
  
  constructor(private buergerService: BuergerService) {
    buergerService.getBuergers().retry(2)
            .map(r => r.json())
            .subscribe(
                  data => this.buerger = data,
                  err => console.log(err),
                  () => console.log('Buerger loaded' + JSON.stringify(this.buerger))
            );
  }

}
