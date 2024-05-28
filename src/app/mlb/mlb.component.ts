import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScoresService } from '../scores.service';
import { HttpClientModule } from '@angular/common/http';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-mlb',
  standalone: true,
  imports: [HttpClientModule, NgIf, NgFor, CommonModule],
  templateUrl: './mlb.component.html',
  styleUrl: './mlb.component.scss',
})
export class MlbComponent implements OnInit, OnDestroy {

  constructor(private scoresService: ScoresService) { }

  scoreboardData: any;
  //intervalId: any | null = null; // Initialize intervalId to null
  dataSubscription: Subscription | null = null;

  ngOnInit() {
    this.fetchData();
    this.dataSubscription = interval(1 * 60 * 1000) // Emit every 5 minutes
      .subscribe(() => this.fetchData());
  }

  fetchData() {

    let date: any = new Date().toLocaleString("en-US");

    this.scoresService.getMlb()
      .subscribe(data => {
        // Update component properties with retrieved data (data processing might be needed)
        this.scoreboardData = data;
        //console.log(this.scoreboardData);
      });
      console.log("Refreshed " + date);
  }

  ngOnDestroy() {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
    console.log("Destroyed.");
  }

}
