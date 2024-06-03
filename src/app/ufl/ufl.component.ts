import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScoresService } from '../scores.service';
import { CommonModule } from '@angular/common';
import { Observable, interval, Subscription } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-ufl',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ufl.component.html',
  styleUrls: ['./ufl.component.scss']
})
export class UflComponent implements OnInit, OnDestroy {
  scoreboardData$!: Observable<any>;
  private intervalSubscription!: Subscription;

  constructor(private scoresService: ScoresService) {}

  ngOnInit() {
    this.scoreboardData$ = interval(1 * 60 * 1000).pipe(
      startWith(0), // Fetch data immediately on initialization
      switchMap(() => this.scoresService.getUfl())
    );
    this.intervalSubscription = this.scoreboardData$.subscribe(data => {
      console.log("UFL Data refreshed.");
    });
    console.log("UFL Component Initialized.");
  }

  ngOnDestroy() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
    console.log("UFL Destroyed.");
  }
}
