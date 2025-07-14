import { Injectable } from "@angular/core";
import { filter, map, of } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class OfService{
    of$ = of(23, 44, 67, 98, 65, 22)
    .pipe(
        //map((num : number) => num)
        filter((num : number) => num % 2 === 0)
    )

}