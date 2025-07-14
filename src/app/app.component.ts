import { Component, OnInit } from '@angular/core';
import { OfService } from './services/of.service';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rxjsBasic';

  constructor(private _ofService : OfService){

  }

  ngOnInit(): void {
    this._ofService.of$
      .subscribe((num) => {
        // if(num % 2 === 0){
        //   console.log(num)
        // }

        console.log(num);
        
      })

      // interval(500)
      //   .subscribe((num) => {
      //     console.log(num);
          
      //   })


      let customInterval = new Observable<number>((observer) => {
        let count = 0;
        setInterval(() => {
          observer.next(count)
          count++

          if(count > 10){
            observer.error('Something went wrong!!!')
          }

          if(count > 5){
            observer.complete()
          }
        }, 500)
      })

      customInterval
      .subscribe({
        next : num => console.log(num),
        error : err => console.log(err),
        complete : () => console.log('completed!!')
        
      })
  }
}
