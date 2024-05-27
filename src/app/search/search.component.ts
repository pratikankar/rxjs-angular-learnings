import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, count, debounceTime, distinct, elementAt, filter, first, from, last, max, min, skip, take, takeLast, takeWhile } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  searchForm: FormGroup;
  avengers = ['Steve', 'Tony', 'Natasha', 'Bruce', 'Thor', 'Clint'];
  avenger$: Observable<string> = from(this.avengers)

  avengersAgain = ['Steve', 'Tony', 'Natasha', 'Bruce', 'Thor', 'Clint','Steve', 'Tony', 'Natasha'];
  avengerAgain$: Observable<string> = from(this.avengers)

  numbers = [5232, 3453, 564, 2123, 3456, 46454, 8665, 3434];
  number$: Observable<number> = from(this.numbers);
  
  constructor() {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name: new FormControl('start search')
    });

    this.searchForm.get('name').valueChanges
    .pipe(
      // take(5),                // take 2 values
      // takeWhile((v) => this.checkValue(v)),    // take values till a condition is true.
      // debounceTime(3000)      // time lag before it emits next value
      // filter((val) => this.checkCount(val))
    ).subscribe(data => {
      //console.log(data);
      
      this.avenger$.pipe(
        // takeLast(3)           // Whenever you are sure about the data set, you need specific last emitted values
        // first()
        // last()
        // elementAt(2)
        //skip(3)
        //count()
      ).subscribe(aven => {
        // console.log(aven)
      })

      /* // distinct operator
      this.avengerAgain$.pipe(
        distinct()
      ).subscribe(data => {
        console.log(data)
      })
      */

      this.number$.pipe(
        //max(),
        min()
      ).subscribe(data => console.log(data));
    })
  }

  checkValue(value) {
    return value.length > 3 ? false: true;
  }

  readValue() {
    
  }

  checkCount(value) {
    return value.length < 10 ? true: false;
  }

}
