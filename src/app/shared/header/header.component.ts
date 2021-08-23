import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as fromHeaderSelectors from '../../store/selectors/header.selectors';
import { Observable, from } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title = 'training';
  themeText = 'DARK';

  vm$: Observable<fromHeaderSelectors.HeaderViewModel>;

  constructor(
    private store: Store<AppState>,
    private el: ElementRef,
    private renderer: Renderer2, ) { }

  ngOnInit(): void {
    this.vm$ = this.store.pipe(
      select(fromHeaderSelectors.selectHeaderViewModel)
    );
  }

  toggleTheme() {
    // INCOMPLETE NEEDS IMPROVEMENTS
    if (this.themeText === 'DARK') {
      this.themeText = 'LIGHT';
      this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'backgroundColor', 'black');
      // this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'color', 'white');

      // this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
    } else {
      this.themeText = 'DARK';
      this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'backgroundColor', 'white');

    }
  }

}

