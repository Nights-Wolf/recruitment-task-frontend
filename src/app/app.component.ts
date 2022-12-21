import { Component } from '@angular/core';
import { SortNumbersService } from './sort-numbers.service';
import { DataNumbersRequest } from './data-numbers-request';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recruitment-task-frontend';
  numbers: number[] = [];
  order: string = "ASC";
  sortedNumbers: any = {numbers: []};

  constructor(private sortNumbersService: SortNumbersService) {}

  public addToList(number: any) {
    if (number) {
      this.numbers.push(parseInt(number))
    }    
  }

  public onSelected(order: string) {
    this.order = order;
  }

  public resetNumbers() {
    this.numbers = [];
    this.sortedNumbers = {number: []};
  }

  public onSubmit() {
    let request = new DataNumbersRequest(this.numbers, this.order);
    this.sortNumbersService.postNumbers(request).subscribe(
      res => {
        this.sortedNumbers=res;
      }
    )
  }


}
