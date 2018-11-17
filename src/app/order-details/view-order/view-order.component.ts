import { Component, OnInit } from '@angular/core';

//----------------------------------------------------//

import { OrderService } from '../order.service';
import { order } from '../../order.model';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
  /**
   * declare variable of model type
   * it stores the data which we get using getdata method from 
   * data and give it to template to print that data 
   */
  viewdata:order[];
  constructor(private order:OrderService) { }

  ngOnInit() {
   
    this.getdata();
  }
  /**
   * 
   * @param id it takes id from template and perform delete 
   * of that perticular id data from server  by calling getdata method 
   */
  public delete(id):void{
    this.order.deletedata(id).subscribe();
    this.getdata();
  }

/**
 * get the data which we create in in-memory-web-api service using subscribing it
 */
  public getdata():void{
    this.order.getdata() .subscribe(
      (data)=>{
    this.viewdata=data;
      }


    )
  }

}
