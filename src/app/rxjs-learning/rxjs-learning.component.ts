import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, interval } from 'rxjs';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent implements OnInit {

  /*
  // For demo 1
  agents: Observable<string>;
  agentName: string;
  */

  /*
  // For demo 2
  avengersList = (['Steve', 'Bruce', 'Tony', 'Natasha', 'Thor', 'Clint']);
  avengers: Observable<string[]> = of(this.avengersList);

  hulk: Observable<string> = of('Bruce');

  asgardian = {
    id: 1,
    name: 'Loki'
  }
  asgardian$: Observable<any> = of(this.asgardian);
  */

  /*
  // For demo 3
  avengersList = (['Steve', 'Bruce', 'Tony', 'Natasha', 'Thor', 'Clint']);
  avengers: Observable<string> = from(this.avengersList);
  */

  /*
  // For demo 4
  @ViewChild('validate')
  validate: ElementRef;

  @ViewChild('getLink')
  getLink: ElementRef;
  */

  /*
  // For demo 5
  avengersList = (['Steve', 'Bruce', 'Tony', 'Natasha', 'Thor', 'Clint']);
  avengers: Observable<string> = from(this.avengersList);
  */

  
  constructor() {}

  ngOnInit(): void {

    /*

    // 1. Creating Observable and show data
    this.agents = new Observable(
      function(observer) {
        try {
          observer.next("Tony");
          setInterval(() => {
            observer.next("Steve");
          }, 3000);
          setInterval(() => {
            observer.next("Natasha")
          }, 6000)
        } catch(e) {
          observer.error(e)
        }
      }
    );

    this.agents.subscribe(data => {
      this.agentName = data;
    });

    */

    /*
    // 2. of operator
    this.avengers.subscribe((data) => {
      console.log(`List of Avengers: ${data}`);
    });

    this.hulk.subscribe((data) => {
      console.log(`Actual name of Hulk is ${data}`);
    });

    this.asgardian$.subscribe((data) => {
      console.log(`God of Mischief: ${data.name}`);
    })
    */

    /*
    // 3. from operator
    this.avengers.subscribe((data) => {
      console.log(data);
    })
    */

    /*
    // 5. Interval operator
    this.avengers.subscribe(data => {
      const sequence = interval(1000);

      sequence.subscribe(num => {
        if(num < 3) {
          console.log(data + num)
        }
      })
    })
    */
    

  }

  /*
  // 4. FromEvent Operator
  eventObservable() {
    const btnObservable$ = fromEvent(this.validate?.nativeElement,'click');
    btnObservable$.subscribe(data => {
      console.log(data)
    })
  }

  linkEventObservable() {
    const linkObservable$ = fromEvent(this.getLink?.nativeElement,'mouseover');
    linkObservable$.subscribe(data => {
      console.log(data)
    })
  }
  */

}
