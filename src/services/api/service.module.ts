import {NgModule} from '@angular/core';
import {CommonServiceImpl} from './common/commonServiceImpl';
import {CommonService} from '../abstract/CommonService';

@NgModule({
  declarations: [
  ],
  imports: [

  ],
  providers: [{provide : CommonService, useClass : CommonServiceImpl}],
})

export class ServiceModule {}
