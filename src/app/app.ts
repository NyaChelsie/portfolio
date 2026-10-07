import { Component } from '@angular/core';
import { Accueil } from './accueil/accueil';

import { Services } from './services/services';
import { Projets } from './projets/projets';
import { Contact } from './contact/contact';
import { Navbar } from './navbar/navbar';
import { Apropos } from './apropos/apropos';

@Component({
  selector: 'app-root',
imports: [Navbar, Accueil,  Services, Projets, Contact, Apropos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
