import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bibliografia-sinopsis',
  templateUrl: './bibliografia-sinopsis.component.html',
  styleUrls: ['./bibliografia-sinopsis.component.css']
})
export class BibliografiaSinopsisComponent implements OnInit {
  longText1 = `'Halo' es una de las franquicias más populares del mundo de los videojuegos. La historia principal se centra en un conflicto interestelar entre los humanos y unos alienígenas guiados por unos profetas obsesionados con una antigua especie conocida como los Forerunners.`;
  longText2 = `Estalla una guerra civil en una América futurista mientras Manhattan se convierte en una zona desmilitarizada.`;
  longText3 = `Un financista traslada a su familia a Ozarks. Después de que un plan de lavado de dinero va mal, se ve obligado a pagar una deuda a un narcotraficante mexicano para mantener a su familia.`;
  longText4 = `The Witcher es una serie de televisión web estadounidense de drama y fantasía oscura creada por Lauren Schmidt Hissrich para Netflix. Se basa en la Saga de Geralt de Rivia del escritor polaco Andrzej Sapkowski.

  Ubicada en un mundo medieval en una masa de tierra conocida como "el Continente", The Witcher explora la leyenda de Geralt de Rivia y la princesa Ciri, que están unidos el uno al otro por el destino. Está protagonizada por Henry Cavill, Freya Allan y Anya Chalotra.`;
  longText5 = `La guerra contra las drogas desde la perspectiva de las víctimas, de aquellas personas cuyas vidas cambiaron para siempre cuando la ciudad de Allende fue golpeada, sin aviso, por una tragedia provocada por una operación de la DEA que salió mal.`;

  constructor() { }

  ngOnInit(): void {
  }

}
