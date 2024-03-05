import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, take } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ResolumeService {
  private baseUrl: string = ``

  constructor(private http:HttpClient) {
    this.baseUrl = environment.resolume
  }

  playColumn(number:number){
    const heads = {'accept': '*/*', 'Content-Type':'application/json'}

    // console.log(this.baseUrl + `v1/composition/columns/${number}/connect`)
    return this.http.post(this.baseUrl + `v1/composition/columns/${number}/connect`, '', {headers: heads}).pipe(take(1)).subscribe()
  }
}
