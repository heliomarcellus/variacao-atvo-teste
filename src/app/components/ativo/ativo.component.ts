import { Component, OnInit } from '@angular/core';
import { ConsultaAtivoService } from '../../services/consulta-ativo.service';

@Component({
  selector: 'app-ativo',
  templateUrl: './ativo.component.html',
  styleUrls: ['./ativo.component.scss'],
})
export class AtivoComponent implements OnInit {
  ativoSymbol = 'PETR4.SA';
  ativoData: any;

  constructor(private consultaAtivoService: ConsultaAtivoService) {}

  ngOnInit(): void {
    this.consultaAtivoService.getAtivoData(this.ativoSymbol).subscribe(
      (data) => {
        this.ativoData = data;
        console.log('Dados do ativo:', data);
      },
      (error) => {
        console.error('Erro ao obter dados do ativo:', error);
      }
    );
  }

  chartHovered(event: any): void {
    console.log('Chart Hovered', event);
  }

  chartClicked(event: any): void {
    console.log('Chart Clicked', event);
  }
}
