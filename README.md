# RxjsAngularLearnings

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# About Project
### This project has practice of observables and some of it's useful operators

## What is RxJS?
RxJS (Reactive Extension for JavaScript) is a library for reactive programming using observables that make it easier to compose asynchronous or callback-based code.

## Operators
1. of operator: It make observable from a string or array or an object
> Whenever we want to pass a variable which has to be observable instead of array or sting, we use of operator
> ex- ```viewers: Observable<string[]> = of(['this','is','of','operator']);```

2. from operator: It will create an observable from an array, an array like object, a promise, an iterable object, or an observable like object.
> It will always take array or array like
> ex- ```students: Observable<string> = from(['this','is','from','operator']);```

3. fromEvent operator: Creates an observable that emits events of a specific type coming from the given event target
> We can bind target elements and methods to make sure we get observable as output
> Angular Specific-> We will use ViewChild, NativeElement as target element and bind events
> ex-
    ```
    const student = fromEvent(this.validateBtn?.nativeElement,'click');
    console.log(student);
    student.subscribe(data => {
        console.log(data);
    })
    ```

4. interval operator: Creates an observable that emits sequential numbers every specified interval of time, on a specified SchedularLike
> ex- ```let numbers = interval(500)```

5. debounceTime operator: It emits a notification from the source Observable only after a particular time span has passed without another source emission
> ex- 
    ```
    let numbers = interval(500)
    numbers.pipe(
        debaunceTime(100)
    ).subscribe(data => console.log(data));
    ```

5. take operator: It emits only the first count value emitted by the source observable
> ex- 
    ```
    let numbers = interval(500);
    numbers.pipe(
        take(2),
        debounceTime(100)
    ).subscribe(data => console.log(data));
    ```

6. takeWhile operator: Emits values emitted by the source Observable so long as each value satisfies the given predicate, and then completes as soon as this predicate is not satisfied.
> ex- 
    ```
    let numbers = interval(500);
    numbers.pipe(
        takeWhile((v) => this.checkCount(v)),
        debounceTime(100)
    ).subscribe(data => console.log(data));
    ```

7. takeLast operator: Waits for the source to complete, then emits the last N values from the source, as specified by the count argument.
> ex- 
    ```
    let numbers = interval(500)
    numbers.pipe(
        takeLast(2),
        debounceTime(100)
    ).subscribe(data=> console.log(data));
    ```

8. first operator: It will give the first value emitted by the source Observable
> ex- 
    ```
    let nubmers = interval(500);
    numbers.pipe(
        first()
    ).subscribe(data => console.log(data));
    ```

9. last operator: It will give the last value emitted by the source Observable
> ex- 
    ```
    let numbers = interval(500);
    numbers.pipe(
        last()
    ).subscribe(data => console.log(data));
    ```

10. elementAt operator: It will give a single value from the source observable based upon the index given. It is an array index, so it will always starts with 0
> ex- 
    ```
    this.avenger$.pipe(
        elementAt(2)
    ).subscribe(data => console.log(data));
    ```

11. filter operator: It will give filter the values from the source Observable based on the predicate function given
> ex- ```filter((v) => this.filterText(v));```

12. distinct operator: It will give all the values form the source observable that are distinct when compared with the previous value
> ex- 
    ```
    this.avenger$.pipe(
        distinct()
    )
    .subscribe(data => console.log(data));
    ```

13. skip operator: It will give back an observable that will skip the first occurance of count items taken as input
> ex- 
    ```
    this.avengers.pipe(
        skip(2)
    ).subscribe(data => console.log(data));
    ```

14. count operator: It will give back an observable that will skip the first occurance of count items taken as input.
> ex- 
    ```
    this.avengers.pipe(
        count()
    ).subscribe(data =>  console.log(data));
    ```

15. max operator: It will take in an observable with all values and return an observable with the max value.
> ex- 
    ```
    numbers = [1234, 54,343,232,2312];
    number$: Observable<number> = from(this.numbers);
    
    this.number$.pipe(
        max()
    ).subscribe(data => console.log(data));
    ```

16. min operator: It will take in an observable with all values and return an observable with the min value.
> ex- 
    ```
    numbers = [1234, 54,343,232,2312];
    number$: Observable<number> = from(this.numbers);
    
    this.number$.pipe(
        min()
    ).subscribe(data => console.log(data));
    ```