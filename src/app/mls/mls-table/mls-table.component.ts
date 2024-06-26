import { Component, OnInit, OnDestroy } from '@angular/core';
import { StandingsService } from '../../standings.service';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-mls-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mls-table.component.html',
  styleUrl: './mls-table.component.scss'
})
export class MlsTableComponent implements OnInit, OnDestroy {
  standings$!: Observable<any>;
  wildcardStandings$!: Observable<any>;
  error: any = null;

  constructor(private standingsService: StandingsService) {}

  ngOnInit(): void {
    this.getStandings();
  }

  getStandings() {
    this.standings$ = this.standingsService.getMlsTable().pipe(
      startWith(0), // Fetch data immediately on initialization
      switchMap(() => this.standingsService.getMlsTable())
    );
    console.log("MLS table initialized.");
  }

  ngOnDestroy(): void {
    console.log("MLS Table destroyed.");
  }
}
