import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { HttpClientModule } from '@angular/common/http';
import { NgIf, NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-ufl',
  standalone: true,
  imports: [HttpClientModule, NgIf, NgFor, CommonModule],
  templateUrl: './ufl.component.html',
  styleUrl: './ufl.component.scss'
})
export class UflComponent {

  constructor(private scoresService: ScoresService) { }

  scoreboardData: any;

  ngOnInit() {
    this.scoresService.getUfl()
      .subscribe(data => {
        // Update component properties with retrieved data (data processing might be needed)
        this.scoreboardData = data;
        console.log(this.scoreboardData);
      });
  }

}
