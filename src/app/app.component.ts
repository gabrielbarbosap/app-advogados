import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { DadosService } from './dados.service';
import * as mock from './mock.json';
// import * as mockall from './mockall.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  tableList = [];
  displayedColumns: string[] = [
    'position',
    'symbol',
    'proff',
    'name',
    'weight',
  ];
  displayedColumnsLL: string[] = [
    'position',
    'symbol',
    'proff',
    'name',
    'weight',
  ];

  dataSource;
  dataSourceall;
  spinner = true;
  viewTable = false;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  panelOpenState: boolean = false;
  temp1 = [];
  temp2 = [];
  constructor(private dataService: DadosService) {}

  ngOnInit() {
    this.all();
    this.mockallmet();
  }

  closePanel() {
    this.panelOpenState = false;
  }

  all() {
    console.log(mock.resultset);
    // this.getPlacas(mock.resultset);
  }

  mockallmet() {
    // console.log(mockall.resultset);
    this.getall(mock.resultset);
  }

  professor() {
    this.dataService.getProfs().subscribe((res) => {
      this.dataSource = res.resultset;
      this.viewTable = true;
    });
  }

  analistaSaude() {
    this.dataService.analistaSaude().subscribe((res) => {
      this.dataSource = res.resultset;
      this.viewTable = true;
    });
  }

  analistaGestao() {
    this.dataService.analistaGestao().subscribe((res) => {
      this.dataSource = res.resultset;
      this.viewTable = true;
    });
  }

  enfermeiro() {
    this.dataService.enfermeiro().subscribe((res) => {
      this.dataSource = res.resultset;
      this.viewTable = true;
    });
  }

  tecEnfermagem() {
    this.dataService.tecEnfermagem().subscribe((res) => {
      this.dataSource = res.resultset;
      this.viewTable = true;
    });
  }

  gestUniver() {
    this.dataService.gestUniver().subscribe((res) => {
      this.dataSource = res.resultset;
      this.viewTable = true;
    });
  }

  soldado() {
    this.dataService.soldado().subscribe((res) => {
      this.dataSource = res.resultset;
      this.viewTable = true;
    });
  }

  terceiroSarg() {
    this.dataService.terceiroSarg().subscribe((res) => {
      this.dataSource = res.resultset;
      this.viewTable = true;
    });
  }

  segSarg() {
    this.dataService.segSarg().subscribe((res) => {
      this.dataSource = res.resultset;
      this.viewTable = true;
    });
  }

  primeiroSarg() {
    this.dataService.primeiroSarg().subscribe((res) => {
      this.dataSource = res.resultset;
      this.viewTable = true;
    });
  }

  subtenente() {
    this.dataService.subtenente().subscribe((res) => {
      this.dataSource = res.resultset;
      this.viewTable = true;
    });
  }

  segundoTenente() {
    this.dataService.segundoTenente().subscribe((res) => {
      this.dataSource = res.resultset;
      this.viewTable = true;
    });
  }

  primeiroTenente() {
    this.dataService.primeiroTenente().subscribe((res) => {
      this.dataSource = res.resultset;
      this.viewTable = true;
    });
  }

  tenenteCoronel() {
    this.dataService.tenenteCoronel().subscribe((res) => {
      this.dataSource = res.resultset;
      this.viewTable = true;
    });
  }

  coronel() {
    this.dataService.coronel().subscribe((res) => {
      this.dataSource = res.resultset;
      this.viewTable = true;
    });
  }

  pensao() {
    this.dataService.pensao().subscribe((res) => {
      this.dataSource = res.resultset;
      this.viewTable = true;
    });
  }

  getPlacas(itens) {
    var uniq = itens
      .map((name) => {
        return {
          count: 1,
          name: name[3],
        };
      })
      .reduce((a, b) => {
        a[b.name] = (a[b.name] || 0) + b.count;
        return a;
      }, {});

    var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1);
    console.log(duplicates);
    console.log('começou');
    const duo = itens.filter((numero) => duplicates.includes(numero[3]));
    duo.sort(function (a, b) {
      if (a[3] > b[3]) {
        return 1;
      }
      if (a[3] < b[3]) {
        return -1;
      }
      return 0;
    });
    duo.slice(0, 10000);
    console.log(duo);
    // mock.resultset.filter(res => res[2] === '2554348')[0].push('alterado')
    this.dataSource = duo;
  }

  getall(itens) {
    var uniq = itens
      .map((name) => {
        return {
          count: 1,
          name: name[3],
        };
      })
      .reduce((a, b) => {
        a[b.name] = (a[b.name] || 0) + b.count;
        return a;
      }, {});

    var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1);
    console.log(duplicates);
    console.log('começou');
    const duo = itens.filter((numero) => duplicates.includes(numero[3]));
    duo.sort(function (a, b) {
      if (a[3] > b[3]) {
        return 1;
      }
      if (a[3] < b[3]) {
        return -1;
      }
      return 0;
    });
    duo.slice(0, 10000);
    console.log(duo);
    // mock.resultset.filter(res => res[2] === '2554348')[0].push('alterado')
    this.dataSource = duo;
  }
}
