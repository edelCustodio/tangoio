import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dateFormatValidator } from './search-date-validator';
import { StockDataService } from '../services/stock-data.service';
import { IApiResponse } from './stock-data';

@Component({
  selector: 'stock-data',
  templateUrl: './stockData.component.html',
  styleUrls: ['./stockData.component.scss']
})
export class StockData implements OnInit {

  dateForm: FormGroup;

  get searchDateControl(): FormGroup {
    return this.dateForm.get('SearchDate') as FormGroup;
  }

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private stockDataService: StockDataService) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.dateForm = this.formBuilder.group({
      SearchDate: ['', [Validators.required, dateFormatValidator]]
    });
  }

  search(): void {
    console.log('Search button');
    const form = this.dateForm.value;
    this.stockDataService.getStocks(form.SearchDate).subscribe((response: IApiResponse) => {
      console.log(response);
    });
  }
}

