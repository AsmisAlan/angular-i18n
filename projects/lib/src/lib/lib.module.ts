import { NgModule } from '@angular/core';
import { LibComponent } from './lib.component';
import { LocalizedComponent } from './localized/localized.component';



@NgModule({
  declarations: [LibComponent, LocalizedComponent],
  imports: [
  ],
  exports: [LibComponent, LocalizedComponent]
})
export class LibModule { }
