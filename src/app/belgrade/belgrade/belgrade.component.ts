import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-belgrade',
  templateUrl: './belgrade.component.html',
  styleUrls: ['./belgrade.component.css']
})
export class BelgradeComponent implements OnInit{
  idToScroll: string;
  ids: string[] = ['barovi','muzeji','restorani','crkve']; 

  constructor(private sanitizer: DomSanitizer,  private el: ElementRef, private renderer: Renderer2){
  }

  ngOnInit(): void {
    this.idToScroll = null;
  }
  

  scrollToTarget(id:string) 
  {
  
    this.ids.forEach(e=>{
      if(e != id)
      {
        this.hideElement(e);
      }
    })

    this.displayElement(id);

    if(id != null)
    {
      const targetElement = this.el.nativeElement.querySelector('#'+ id);
      // console.log("tatreget element",targetElement)
      if (targetElement) {
        //targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const targetOffset = targetElement.offsetTop - 200; // Dodajte ili oduzmite vrednost za prilagođavanje podizanja ekrana
        window.scroll({ top: targetOffset, behavior: 'smooth' });
      }
    }
  }

  hideElement(id:string)
  {
    const targetElement = this.el.nativeElement.querySelector('#'+ id);

    this.renderer.removeClass(targetElement,"d-block");
    this.renderer.addClass(targetElement,"d-none");
  }

  displayElement(id:string)
  {
    const targetElement = this.el.nativeElement.querySelector('#'+ id);

    this.renderer.removeClass(targetElement,"d-none");
    this.renderer.addClass(targetElement,"d-block");
  }
}
