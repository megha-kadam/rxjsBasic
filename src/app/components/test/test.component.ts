import { Component, OnInit } from '@angular/core';
import { OfService } from 'src/app/services/of.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private _ofService : OfService) { }

  ngOnInit(): void {
    this._ofService.of$
      .subscribe((num) => {
        // if(num % 2 === 0){
        //   console.log(num);
        // }

        console.log(num);
        
      })
  }

}
