import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight','weight2', 'symbol'];
  dataSource = new MatTableDataSource<Calificacion>(NOTAS);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getTotalCost() {
    return NOTAS.map(t => (t.nota*t.peso)/100).reduce((acc, value) => acc + value, 0);
  }
  getTotalPercent(){
    return NOTAS.map(t => (t.peso)).reduce((acc, value) => acc + value, 0);
  }

}

export interface Calificacion{
  nombre: string;
  peso: number;
  nota: number;
  comentarios: string;
}

const NOTAS : Calificacion[] =  [
  {nombre: "Tema 1",peso:20,nota:10,comentarios:"adsada"},
  {nombre: "Tema 2",peso:20,nota:10,comentarios:"adsada"},
  {nombre: "Tema 3",peso:20,nota:6,comentarios:"adsada"},
  {nombre: "Tema 4",peso:20,nota:7,comentarios:"adsada"},
  {nombre: "Tema 5",peso:10,nota:2,comentarios:"adsada"},
  {nombre: "Tema 6",peso:10,nota:10,comentarios:"adsada"}
]
