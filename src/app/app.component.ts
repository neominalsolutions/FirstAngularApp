import { Component } from '@angular/core';

// metadata
// selector kısmında componenti çağırıken kullanacağımız isim tanımlaması var.aynı tag helper gibi bir kullanım söz konusu
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // sayfaydaki logicleri ts dosyasına yazıcaz.
  // html dosyasına bu componentin içerisinde dinamik olarak değişecek html tagleri yazıcaz
  // css dosyasına ise bu component ait css yazıcaz.

  title = 'FirstAngularApp';
}
