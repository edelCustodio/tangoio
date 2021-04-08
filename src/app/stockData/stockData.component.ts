import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dateFormatValidator } from './search-date-validator';

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

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.dateForm = this.formBuilder.group({
      SearchDate: ['', [Validators.required, dateFormatValidator]]
    });
  }
}

interface Data {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Data[];
}
