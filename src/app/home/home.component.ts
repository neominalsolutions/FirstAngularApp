import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

export interface Name {
  name: string;
  surname: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  content: string = 'Content';
  selectedName: string = '';
  number: number = 0;
  // önüne private demediğimiz takdirde tüm propertler publictir ve html den ulaşılabilir
  // c# da herşey object burada ise default olarak tip any'dir
  names: any[] = [
    {
      name: 'berkay',
      surname: 'erarslan',
    },
    {
      name: 'recep',
      surname: 'obut',
    },
    {
      name: 'hamza',
      surname: 'dagdelen',
    },
    ,
  ];

  Click() {
    alert('Clicked!');
  }

  changeValue(event: any) {
    // event target value ile input değerini alabiliriz.
    // this.content = (event.target as HTMLInputElement).value;
    this.content = event.target.value;
  }

  selectName(event: any) {
    this.selectedName = event.target.value;
  }

  // bir component altında başka bir component yada element varsa ve biz bu elemente id den ulaşmak istersek bu durumda en doğru şekilde çalışmak için önerilen static false olarak çalışmaktır. Bu durumda ngAfterViewInit hook'da elementi yakalayabiliriz.
  @ViewChild('btn1', { static: true })
  btnElement!: ElementRef;

  constructor() {}

  // component sayfaya basıldtıktan sonraki çalışacak olan method
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    // throw new Error('Method not implemented.');
    console.log('btnElement', this.btnElement);

    this.btnElement.nativeElement.style.backgroundColor = 'red';
    this.btnElement.nativeElement.addEventListener('click', function () {
      alert('clicked me');
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    // this.btnElement.nativeElement.style.backgroundColor = 'yellow';
    // ngOnit sayfa ilk açıldığında çalışan hook yaşam döngüsü methodu
  }
}
