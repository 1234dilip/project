import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productForm: any;
  data: any = []


  constructor() { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      ptoductId: new FormControl(''),
      productName: new FormControl(''),
      productQuantity: new FormControl(''),
      productAmount: new FormControl(''),

    })
  }
  pAmount: number = 0;
  pQuantity: number = 0;


  onProductData() {


    console.log('data of product in product name', this.productForm.value.productName)

    if (this.data.length > 0) {
      for (let i = 0; i < this.data.length; i++) {

        if ((this.data[i].productName === this.productForm.value.productName)) {


          this.data[i].productAmount += this.productForm.value.productAmount

          this.data[i].productQuantity += this.productForm.value.productQuantity
          this.ngOnInit()
          console.log('if working -------------');



        }
        else {
          console.log('Id  different ----------- ')
          this.data.push(this.productForm.value)
          this.data[i].productAmount = this.productForm.value.productAmount
          this.data[i].productQuantity = this.productForm.value.productQuantity

        }
      }





    } else {
      console.log('data inside the else0000000000000', this.data)
      this.data.push(this.productForm.value)
    }


    // if(this.data.length > 1){
    //   console.log('condition in data',this.data)
    //   this.data.forEach((item: any) => {
    //     console.log('product of item',item)
    //     if (item.productName === this.productForm.value.productName) {
    //       item.productAmount += this.productForm.value.productAmount
    //       item.productQuantity += this.productForm.value.productQuantity
    //       console.log('if working ');



    //     } else {
    //       this.data.push(this.productForm.value)
    //       console.log('else working ');

    //     }
    //   }
    //   );
    // }else{
    //   console.log('data inside the else',this.data)
    //   this.data.push(this.productForm.value)
    // }

  }



  onClick(id: any) {
    console.log('id of data', id)
    let index = this.data.findIndex((e: any) => e.ptoductId === id);
    console.log('index of the', index)
    if (index != 1) {
      this.data.splice(index, 1)
    }
  }

}
