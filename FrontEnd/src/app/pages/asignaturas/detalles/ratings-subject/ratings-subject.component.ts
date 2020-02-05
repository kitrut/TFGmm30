import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Calification {
  name: string;
  weight: number;
  rating: number;
  comments: string;
}

const RATINGS: Calification[] =  [
  {name: 'Tema 1', weight: 20, rating: 10, comments: 'adsada'},
  {name: 'Tema 2', weight: 20, rating: 10, comments: 'adsada'},
  {name: 'Tema 3', weight: 20, rating: 6, comments: 'adsada'},
  {name: 'Tema 4', weight: 20, rating: 7, comments: 'adsada'},
  {name: 'Tema 5', weight: 10, rating: 2, comments: 'adsada'},
  {name: 'Tema 6', weight: 10, rating: 10, comments: 'adsada'}
];

@Component({
  selector: 'app-ratings-subject',
  templateUrl: './ratings-subject.component.html',
  styleUrls: ['./ratings-subject.component.scss'],
})
export class RatingsSubjectComponent implements OnInit {

  displayedColumns: string[] = ['name', 'weight', 'rating', 'weighted', 'comments'];
  dataSource = new MatTableDataSource<Calification>(RATINGS);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  get totalCost() {
    return RATINGS.map(t => (t.rating * t.weight) / 100).reduce((acc, value) => acc + value, 0);
  }
  get totalPercent() {
    return RATINGS.map(t => (t.weight)).reduce((acc, value) => acc + value, 0);
  }

}


