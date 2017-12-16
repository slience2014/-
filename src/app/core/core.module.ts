//import angular core
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';


//导入Service
import { MessageService } from '../service/message.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: 'message', useClass: MessageService }

  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded.');
    }
  }
}
