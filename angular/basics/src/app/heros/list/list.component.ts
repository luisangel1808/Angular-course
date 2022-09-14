import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  heros: string[] =['Spiderman', 'Thor', 'Hulk', 'Wolverien'];
  deletedHero : string='';
  deleteHero(){
      this.deletedHero=this.heros.pop() || '';
  }
}
