import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BookServiceService } from './services/book-service/book-service.service';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[BookServiceService],
  exports:[
    HeaderComponent
  ]
})
export class CoreModule { }
