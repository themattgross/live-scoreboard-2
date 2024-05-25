import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  private scoreboardApiUrl = 'https://site.api.espn.com/apis/site/v2/sports';

  constructor(private http: HttpClient) { }

  getMlb(): Observable<any> {
    const sport = "baseball";
    const league = "mlb";

    return this.getData(sport, league); // Call getData with sport and league values
  }

  getUfl(): Observable<any> {
    const sport = "football";
    const league = "ufl";

    return this.getData(sport, league); // Call getData with sport and league values
  }

  getMls(): Observable<any> {
    const sport = "soccer";
    const league = "usa.1";

    return this.getData(sport, league); // Call getData with sport and league values
  }

  getData(sport: string, league: string): Observable<any> { // Replace 'any' with a specific interface if known
    const apiUrl = `${this.scoreboardApiUrl}/${sport}/${league}/scoreboard`;

    return this.http.get<any>(apiUrl);
  }
}