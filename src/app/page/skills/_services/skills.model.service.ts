import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SkillsModelService {

  constructor() { }

  pictures = [
    
    '../../../../assets/Certs/css-cert.jpg',
    '../../../assets/Certs/html-cert.jpg',
    '../../../assets/Certs/java-cert.png',
    '../../../assets/Certs/javascript-free-code-camp.png',
    '../../../assets/Certs/js-cert.png',
    '../../../assets/Certs/js-game-cert.jpg',
    '../../../assets/Certs/marketers-coding-cert.jpg',
    '../../../assets/Certs/py-begin-cert.png',
    '../../../assets/Certs/py-data-cert.png',
    '../../../assets/Certs/py-data-sci-beg-cert.png',
     '../../../assets/Certs/py-finance-cert.jpg',
     '../../../assets/Certs/py-int-cert.png',
     '../../../assets/Certs/python-cert.png',
     '../../../assets/Certs/responsive-web-cert.jpg',
     '../../../assets/Certs/responsive-web-design.png',
     '../../../assets/Certs/sql-cert.png',
     '../../../assets/Certs/web-dev-fundamentals.jpg'
  ]

  itemSelect(entry: number){
    return this.pictures[entry];
  }
}
