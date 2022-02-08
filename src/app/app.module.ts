import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TodosComponent } from './todos/todos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// bu sayfaya başka bir klasör altındaki dosyayı çağırmak için import keyword kullanırız. using
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AccordionModule } from 'ngx-bootstrap/accordion';
// metadata
@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, TodosComponent],
  imports: [
    BrowserModule, // csr import eder.
    HttpClientModule,
    BrowserAnimationsModule, // http servislerini kullanmamızı sağlayan module
    ButtonsModule.forRoot(), // singleton olarak servisin module tanımlanması
    AccordionModule.forRoot(),
  ],
  providers: [], // modulde kullanılacak olan servisler
  bootstrap: [AppComponent], // uygulamayı appcomponente devreder.
})
export class AppModule {} // public
// bir class başka dosyada import edilecek ise export etmemiz lazım
