import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { HttpClientModule } from '@angular/common/http';
import { NgIf, NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-mlb',
  standalone: true,
  imports: [HttpClientModule, NgIf, NgFor, CommonModule],
  templateUrl: './mlb.component.html',
  styleUrl: './mlb.component.scss',
})
export class MlbComponent {

  constructor(private scoresService: ScoresService) { }

  scoreboardData: any;

  ngOnInit() {
    this.scoresService.getMlb()
      .subscribe(data => {
        // Update component properties with retrieved data (data processing might be needed)
        this.scoreboardData = data;
        console.log(this.scoreboardData);
      });
  }

}
