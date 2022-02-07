import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// bu sayfaya başka bir klasör altındaki dosyayı çağırmak için import keyword kullanırız. using

// metadata
@NgModule({
  declarations: [
    AppComponent // moduldeki componentlerin tanıtıldığı yer
  ],
  imports: [
    BrowserModule // csr import eder.
  ],
  providers: [], // modulde kullanılacak olan servisler
  bootstrap: [AppComponent] // uygulamayı appcomponente devreder.
})
export class AppModule { } // public
// bir class başka dosyada import edilecek ise export etmemiz lazım
