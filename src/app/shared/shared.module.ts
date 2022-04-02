import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ConfirmDialogModule
  ],
  exports:[
      ConfirmDialogModule
  ]
})
export class SharedModule { }
