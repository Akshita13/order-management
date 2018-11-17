import { Injectable } from '@angular/core';
import{InMemoryDbService}from 'angular-in-memory-web-api'



@Injectable()
export class InMemoryWebApiService implements InMemoryDbService{

  /**
   * create database
   */

  createDb(){

    const orderDetails=[
      {
        id:1,
        name:'aneri',
        orderName:'watch',
        numOfItem:2,
        address:'motabazar',
        mobileNumber:7858666989
      },
      {
        id:2,
        name:'mona',
        orderName:'clothes',
        numOfItem:4,
        address:'godhdod',
        mobileNumber:3467890754
      }

    ];
    return {orderDetails};
  }

}
