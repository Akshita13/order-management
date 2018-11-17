import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

//--------------------------------------------------------------------//

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { order } from '../../order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  public submitted:boolean;
  public orderForm:FormGroup;
  public orderData:order[];

  /**
   * 
   * @param order to inject service which have http methods
   * @param fb contains directives of forms
   * @param router to navigate the route
   */
  constructor(private order:OrderService,
    private fb:FormBuilder,
    private router:Router) {
    this.orderForm=this.fb.group({});
    this.orderData=[];
    this.submitted = false;
   }

   /**
    * validations of the form
    */
  ngOnInit() {
  
    this.orderForm=this.fb.group(
      {
        
          name:['',Validators.required],
          orderName:['',Validators.required],
          numOfItem:['',[Validators.required,Validators.maxLength(5)]],
          address:['',Validators.required],
          mobileNumber:['',[ Validators.required,Validators.minLength(10)]]
      });
  }
/**
 * 
 * here , filled data in the templated are pushed on the server by this method
 */
  submit(orderForm) {
    console.log(orderForm);
    
    this.order.adddata(orderForm)
      .subscribe(data => {
        this.orderData.push(data);
        this.submitted = true;
        this.orderForm.reset();
        this.router.navigate(['/view']);
      });

}

}
