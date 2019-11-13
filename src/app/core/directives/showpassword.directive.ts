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
        span.innerHTML = ' <style>img{margin-right:5px;}  .text{font-family:"Lobster";margin-top:10px;color:#f195769a}</style><div class="text"><img  src="assets/img/visible_30px.png" height="20px" width="20px" >Hide Password</div> ';
      } else {
        this.el.nativeElement.setAttribute('type', 'password');
        span.innerHTML = '<style>img{margin-right:5px;} .text{font-family:"Lobster";margin-top:10px;color:#f195769a}</style><div class="text"><img  src="assets/img/hide_24px.png" height="20px" width="20px" >Show Password</div>';
      }
    }
  setup() {
      const parent = this.el.nativeElement.parentNode;
      const span = document.createElement('span');
      span.innerHTML = '<style>img{margin-right:5px;} .text{font-family:"Lobster";margin-top:10px;color:#f195769a}</style><div class="text"><img  src="assets/img/hide_24px.png" height="20px" width="20px" >Show Password</div>';
      span.addEventListener('click', (event) => {
        this.toggle(span);
      });
      parent.appendChild(span);
    }

}
