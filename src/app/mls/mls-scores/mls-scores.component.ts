import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScoresService } from '../../scores.service';
import { CommonModule } from '@angular/common';
import { Observable, interval, Subscription, BehaviorSubject } from 'rxjs';
import { switchMap, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-mls-scores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mls-scores.component.html',
  styleUrl: './mls-scores.component.scss'
})
export class MlsScoresComponent implements OnInit, OnDestroy {
  scoreboardData$!: Observable<any>;
  currentDate: Date = new Date();
  dateSubject: BehaviorSubject<Date> = new BehaviorSubject<Date>(this.currentDate);

  constructor(private scoresService: ScoresService) {}

  ngOnInit() {
    this.scoreboardData$ = this.dateSubject.pipe(
      switchMap(date => {
        const isToday = this.isToday(date);
        const dateStr = this.formatDateStr(date);

        if (isToday) {
          // Poll every minute if it's today
          return interval(1 * 60 * 1000).pipe(
            startWith(0),
            switchMap(() => this.scoresService.getMls(dateStr)),
            tap(() => console.log(`MLS Data refreshed for ${dateStr}.`))
          );
        } else {
          // Fetch only once for past/future dates
          return this.scoresService.getMls(dateStr).pipe(
            tap(() => console.log(`MLS Data fetched for ${dateStr}.`))
          );
        }
      })
    );
    console.log("MLS Component Initialized.");
  }

  ngOnDestroy() {
    console.log("MLS Destroyed.");
  }

  prevDay() {
    const prev = new Date(this.currentDate);
    prev.setDate(prev.getDate() - 1);
    this.currentDate = prev;
    this.dateSubject.next(this.currentDate);
  }

  nextDay() {
    const next = new Date(this.currentDate);
    next.setDate(next.getDate() + 1);
    this.currentDate = next;
    this.dateSubject.next(this.currentDate);
  }

  goToToday() {
    this.currentDate = new Date();
    this.dateSubject.next(this.currentDate);
  }

  private formatDateStr(date: Date): string {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}${mm}${dd}`;
  }

  private isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  }

  get isPrevDisabled(): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const current = new Date(this.currentDate);
    current.setHours(0, 0, 0, 0);
    const diffTime = Math.round((today.getTime() - current.getTime()) / (1000 * 3600 * 24));
    return diffTime >= 7;
  }

  get isNextDisabled(): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const current = new Date(this.currentDate);
    current.setHours(0, 0, 0, 0);
    const diffTime = Math.round((current.getTime() - today.getTime()) / (1000 * 3600 * 24));
    return diffTime >= 7;
  }

  get isTodaySelected(): boolean {
    return this.isToday(this.currentDate);
  }

  trackByEventId(index: number, event: any): string {
    return event.id;
  }
}
