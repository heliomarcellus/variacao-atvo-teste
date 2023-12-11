import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
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

        // Formatando os rótulos para exibição no gráfico
        this.ativoData.chart.result[0].timestamp = this.ativoData.chart.result[0].timestamp.map((timestamp: number) =>
          format(new Date(timestamp * 1000), 'dd/MM/yyyy')
        );
      },
      (error) => {
        console.error('Erro ao obter dados do ativo:', error);
      }
    );
  }
}
