import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  styleUrls: ['./reactive.component.css'],  
  templateUrl: './reactive.component.html',    
})

export class ReactiveFormComponent implements OnInit {
	form: FormGroup;
	// nameError: string;
	// usernameError: string;

  formErrors = {
      name: '',
      username: '',
      addresses: [
        {city: '', country: '' }
      ]
      
  };

  validationMessages = {
    name: {
      required: 'Name is required.',
      minlength: 'Name must be 3 chrs',
      maxlength: 'Name can\'t be longer than 6 chrs '
    },
    username: {
      required: 'userName is required.',
      minlength: 'userName must be 3 chrs'
    },
    addresses: {
      city: {
        required: 'City is required.',
        minlength: 'City must be 3 chrs'
      },
      country: {
        required: 'country is required.',
        minlength: 'country must be 3 chrs'
      },      
    },

  }



  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

//  	this.form = new FormGroup ({
//  		name: new FormControl(''),
//  		username: new FormControl('')
//		});

  buildForm() {

  	this.form = this.fb.group ({
  		name: ['', [Validators.minLength(3), Validators.maxLength(6)]], 
  		username: ['', Validators.minLength(3)],
      addresses: this.fb.array([
        this.createAddress()
        ])
  	});

  	this.form.valueChanges.subscribe(data =>  this.validateForm() );

  }

  validateForm() {


     for (let field in this.formErrors)
     {
        this.formErrors[field] = '';
        let input = this.form.get(field);

        if (input.invalid && input.dirty) {
          for (let error in input.errors) {
            this.formErrors[field] = this.validationMessages[field][error];

          }
        }

     }

     this.validateAddresses();

      // this.nameError = '';
      // this.usernameError = '';

      // let name = this.form.get('name');
      // let username = this.form.get('username');

      // if (name.invalid && name.dirty) {
      //   if (name.errors['required']) this.nameError = 'Name is required.';
      //   if (name.errors['minlength'])  this.nameError = 'Name must be at least 3 chrs';
      //   if (name.errors['maxlength'])  this.nameError = 'Name can not be more than 6 chrs';
      // }

      // if (username.invalid && username.dirty) {
      //   this.usernameError = 'Username is required.';
      // }    
  }

  createAddress() {
    return this.fb.group ({
          city: ['',[Validators.minLength(3)]],
          country: ['',[Validators.minLength(3)]]
         })
  }

  addAddress() {
    let addresses = <FormArray> this.form.get('addresses');
    addresses.push(this.createAddress());
  }

  removeAddress(i) {
    let addresses = <FormArray> this.form.get('addresses');
    addresses.removeAt(i);
  }

  validateAddresses() {
     let addresses = <FormArray> this.form.get('addresses');

     this.formErrors.addresses = []

     let n = 1;
     while (n <= addresses.length) {

       // add the clear errors back
       this.formErrors.addresses.push({city: '', country: '' });

       // grab the specific group address
       let address = <FormGroup> addresses.at(n - 1);

       // validate that specific group. loop through the groups controls
       for (let field in address.controls)
       {
          // get the formcontrol
          let input = address.get(field);

          // do the validation and save errors to formerrors if necessary
          if (input.invalid && input.dirty) {
            for (let error in input.errors) {
              this.formErrors.addresses[n-1][field] = this.validationMessages.addresses[field][error];
            }
          }
       }

       n++;

     }

  }


  processForm() {
  	console.log(this.form, this.form.value);
  }

}