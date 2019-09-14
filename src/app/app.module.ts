import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './Factory/dynamic-form/dynamic-form.component';
import { DynamicFieldDirective } from './Factory/dynamic-field.directive';
import { ButtonComponent } from './Materials/button/button.component';
import { CheckboxComponent } from './Materials/checkbox/checkbox.component';
import { DateComponent } from './Materials/date/date.component';
import { InputComponent } from './Materials/input/input.component';
import { RadiobuttonComponent } from './Materials/radiobutton/radiobutton.component';
import { SelectComponent } from './Materials/select/select.component';
import { AppRoutingModule } from './Routing/app-routing.module';
import { BlueprintResolver } from './Routing/Resolvers/blueprint-resolver';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFieldDirective,
    ButtonComponent,
    CheckboxComponent,
    DateComponent,
    InputComponent,
    RadiobuttonComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BlueprintResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
