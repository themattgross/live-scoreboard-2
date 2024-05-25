import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScoresService } from '../scores.service';
import { HttpClientModule } from '@angular/common/http';
import { NgIf, NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-mls',
  standalone: true,
  imports: [HttpClientModule, NgIf, NgFor, CommonModule],
  templateUrl: './mls.component.html',
  styleUrl: './mls.component.scss'
})
export class MlsComponent implements OnInit, OnDestroy {

  constructor(private scoresService: ScoresService) { }

  scoreboardData: any;
  intervalId: any | null = null; // Initialize intervalId to null

  ngOnInit() {
    this.fetchData();
    this.intervalId = setInterval(() => this.fetchData(), 5 * 60 * 1000); // Set interval for 5 minutes (in milliseconds)
  }

  fetchData() {
    this.scoresService.getMls()
      .subscribe(data => {
        // Update component properties with retrieved data (data processing might be needed)
        this.scoreboardData = data;
        console.log(this.scoreboardData);
      });
      console.log("Refreshed.");
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clear the interval when the component is destroyed to prevent memory leaks
    }
    console.log("Destroyed.");
  }

}
