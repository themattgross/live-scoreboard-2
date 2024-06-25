import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MlbScoresComponent } from './mlb-scores/mlb-scores.component';

@Component({
  selector: 'app-mlb',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, MlbScoresComponent],
  templateUrl: './mlb.component.html',
  styleUrls: ['./mlb.component.scss']
})
export class MlbComponent {
  
}
