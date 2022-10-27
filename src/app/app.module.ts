import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import {NativeScriptModule } from '@nativescript/angular'
import { NativeScriptFormsModule } from '@nativescript/angular'

import { AppComponent } from './app.component'
import { CurrentChallengeComponent } from './challenges/current-challenge/current-challenge.component'
import {StackComponent} from "./layouts/stack/stack.component";
import {ChallengeEditComponent} from "./challenges/challenge-edit/challenge-edit.component";


@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, NativeScriptFormsModule],
  declarations: [AppComponent, CurrentChallengeComponent, StackComponent, ChallengeEditComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
