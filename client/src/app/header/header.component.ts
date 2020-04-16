import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //TODO dans la classe : récupérer l'user dans la session et l'afficher
  //TODO Aussi faire le bouton "revenir"
  constructor() { }

  ngOnInit() {
  }

}
