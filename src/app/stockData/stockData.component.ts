import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dateFormatValidator } from './search-date-validator';
import { StockDataService } from '../services/stock-data.service';
import { IApiResponse, IStockData } from './stock-data';

@Component({
  selector: 'stock-data',
  templateUrl: './stockData.component.html',
  styleUrls: ['./stockData.component.scss']
})
export class StockData implements OnInit {

  dateForm: FormGroup;
  stockData: IStockData;
  init = true;

  get searchDateControl(): FormGroup {
    return this.dateForm.get('SearchDate') as FormGroup;
  }

  constructor(private formBuilder: FormBuilder,
    private stockDataService: StockDataService) {
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
    const form = this.dateForm.value;
    this.stockDataService.getStocks(form.SearchDate).subscribe((response: IApiResponse) => {
      this.init = false;
      this.stockData = response.data.length > 0 ? response.data[0] : undefined;
    });
  }
}

