import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//---------------------------------------//

import { order } from '../order.model';

@Injectable()
export class OrderService {
  private orderurl='api/orderDetails';
  constructor(private http:HttpClient) { }

  /**
   * getdata method to get the data from database
   */
  getdata():Observable<order[]>
  {
    return this.http.get<order[]>(this.orderurl);
  }

  

  /**
   * 
   * @param id is for take the id and get the data
   */
  editdata(id):Observable<order>
  {
    return this.http.get<order>(this.orderurl+"/"+id);
  }

  /**
   * 
   * @param data adddata to add the data on server 
   */
  adddata(data):Observable<order>
  {
    return this.http.post<order>(this.orderurl,data);
  }

/**
 * 
 * @param id is use to delete the data of perticular id
 */
  deletedata(id):Observable<order>
  {
    return this.http.delete<order>(this.orderurl+"/"+id);
  }

  /**
   * 
   * update the data
   */
  updatedata(id):Observable<order>
  {
    return this.http.put<order>(this.orderurl,id);
  }

}
