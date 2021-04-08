import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { APP_CONFIG } from "src/config/app.config";
import { AppConfig } from "src/config/app.config.interface";
import { IApiResponse } from "../stockData/stock-data";

@Injectable()
export class StockDataService {

    private stocksURL = `${this.config.MOCK_HACKER_RANK_URL}/api/stocks`;

    constructor(
        @Inject(APP_CONFIG) private config: AppConfig,
        private http: HttpClient) { }

    getStocks(date: string): Observable<IApiResponse> {
        return this.http.get<IApiResponse>(this.stocksURL + `/?date=${date}`)
    }
}