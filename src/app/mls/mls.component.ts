import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScoresService } from '../scores.service';
import { CommonModule } from '@angular/common';
import { Observable, interval, Subscription } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-mls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mls.component.html',
  styleUrls: ['./mls.component.scss']
})
export class MlsComponent implements OnInit, OnDestroy {
  scoreboardData$!: Observable<any>;
  private intervalSubscription!: Subscription;

  constructor(private scoresService: ScoresService) {}

  ngOnInit() {
    this.scoreboardData$ = interval(1 * 60 * 1000).pipe(
      startWith(0), // Fetch data immediately on initialization
      switchMap(() => this.scoresService.getMls())
    );
    this.intervalSubscription = this.scoreboardData$.subscribe(data => {
      console.log("MLS Data refreshed.");
    });
    console.log("MLS Component Initialized.");
  }

  ngOnDestroy() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
    console.log("MLS Destroyed.");
  }
}
