import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  submitted = false;
  id:number;
  public orderForm:FormGroup;
  public orderData;

  /**
   * 
   * @param order to inject service which have crud methods
   * @param fb to use forms directives
   * @param route to activate the route
   * @param router to navigate
   * 
   * 
   * create object of formbuilder
   */
  constructor(private order:OrderService,
              private fb:FormBuilder,
              private route:ActivatedRoute,
              private router:Router) {
              //  const id=+this.route.snapshot.paramMap.get("id");          
    this.orderForm=this.fb.group({});
   }

   /**
    * call getdata method to get the data and apply validations on it
    */
  ngOnInit() {
    this.getdata();
    this.orderForm=this.fb.group(
      {
          id:['',Validators.required],
          name:['',Validators.required],
          orderName:['',Validators.required],
          numOfItem:['',Validators.required],
          address:['',Validators.required],
          mobileNumber:['', Validators.required]
      });
  }

  /**
   * call edit method .take snapshot of it and get id from the data
   * then patch that id's value
   */
  public getdata()
  {
    const id=+this.route.snapshot.paramMap.get("id");
    this.order.editdata(id).subscribe
      (data=>{this.orderData=data;
        
      this.orderForm.patchValue({
        id:this.orderData.id,
        name:this.orderData.name,
        orderName:this.orderData.orderName,
        numOfItem:this.orderData.numOfItem,
        address:this.orderData.address,
        mobileNumber:this.orderData.mobileNumber

      })
     }) ;
  }

  /**
   * 
   *id which we selected by calling edit method and get data by get method 
   and update that data on server and submit
   */
  public onUpdate(id:number):void
  {
    this.order.updatedata(id).subscribe(
      ()=>{
        this.orderForm.reset();
        this.router.navigate(['/view']);
        this.submitted = true;
      }
    );
  }



}
