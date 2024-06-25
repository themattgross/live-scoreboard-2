import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  private standingsApiUrl = 'https://site.web.api.espn.com/apis/v2/sports';

  constructor(private http: HttpClient) { }

  getMlbDivision(): Observable<any> {
    const sport = "baseball";
    const league = "mlb";
    const params = "?level=3";

    return this.getData(sport, league, params); // Call getData with sport and league values
  }

  getMlbWildcard(): Observable<any> {
    const sport = "baseball";
    const league = "mlb";
    const params = "?type=1&level=2&seasontype=2";

    return this.getData(sport, league, params); // Call getData with sport and league values
  }

  private getData(sport: string, league: string, params: string): Observable<any> { // Replace 'any' with a specific interface if known
    const apiUrl = `${this.standingsApiUrl}/${sport}/${league}/standings${params}`;

    return this.http.get<any>(apiUrl);
  }
}
