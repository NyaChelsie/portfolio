import { Component } from '@angular/core';
import { Accueil } from './accueil/accueil';
import { APropos } from './a-propos/a-propos';
import { Services } from './services/services';
import { Projets } from './projets/projets';
import { Contact } from './contact/contact';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
imports: [Navbar, Accueil, APropos, Services, Projets, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
