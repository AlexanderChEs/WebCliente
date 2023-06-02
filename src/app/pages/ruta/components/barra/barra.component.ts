import { Component, Input } from '@angular/core';
import { Barra } from 'src/app/interface/barra.interface'

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent {
  @Input() barras: Barra[] = []
  @Input() ciclos: number = 10

  tabla() {
    return {
      display: 'grid',
      'grid-template-rows':`repeat(8,20px)`,
      'grid-template-columns': `repeat(${this.ciclos},1fr)`,
      gap: '7px 10px',
     
    };
    
  }
  posicion(inicio: number,fin:number) {
    const largo = fin +1
    return {
      'grid-column': `${inicio} / ${largo}`,
      
      
    };
  }
}
