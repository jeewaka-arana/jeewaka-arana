import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShowpassword]'
})
export class ShowpasswordDirective {

  private _shown = false;
  constructor(private el: ElementRef) {
      this.setup();
    }
  toggle(span: HTMLElement) {
      this._shown = !this._shown;
      if (this._shown) {
        this.el.nativeElement.setAttribute('type', 'text');
        span.innerHTML = '<button class="show-pass" type="button" style="padding: 2px;,position: absolute;, right: 5px;top:10.5em;,background-color: #ffffff00;,border-color: #ffffff00;,left: 23em;"><img  src="assets/img/visible_30px.png" height="20px" width="20px" ></button>';
      } else {
        this.el.nativeElement.setAttribute('type', 'password');
        span.innerHTML = '<button class="show-pass" type="button"><img  src="assets/img/visible_30px.png" height="20px" width="20px" ></button>';
      }
    }
  setup() {
      const parent = this.el.nativeElement.parentNode;
      const span = document.createElement('span');
      span.innerHTML = '<button class="show-pass" type="button"><img  src="assets/img/visible_30px.png" height="20px" width="20px" ></button>';
      span.addEventListener('click', (event) => {
        this.toggle(span);
      });
      parent.appendChild(span);
    }

}
