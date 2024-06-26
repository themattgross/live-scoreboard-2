import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MlsScoresComponent } from './mls-scores/mls-scores.component';

@Component({
  selector: 'app-mls',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, MlsScoresComponent],
  templateUrl: './mls.component.html',
  styleUrls: ['./mls.component.scss']
})
export class MlsComponent {

}
