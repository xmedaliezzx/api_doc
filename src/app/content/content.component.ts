import { Component, EventEmitter, Output, inject } from '@angular/core';
import { getCouponServices } from './jsondoc';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  @Output() drawerEvent = new EventEmitter();
  _general = inject(GeneralService)


  loginResponses1 = [
    {
      status: '200',
      desc: '	Successful login',
    },
    {
      status: '400',
      desc: '	Please provide user name and password! ',
    },
    {
      status: '401',
      desc: '	Unauthorized',
    },
  ];

  UpdateWALLETSResponses = [
    {
      status: '200',
      desc: `Status: Success

      Business Details:
      ID: string
      Name: string
      Business Phone: string
      Website: string
      Address: string
      Opening Hours: string
      Identifier QR: string
      Identifier: string
      Gain Unit: string
      
      Visual Identity:
      Label Color: Hexadecimal: string; RGB: string
      Background Color: Hexadecimal: string; RGB: string
      Foreground Color: Hexadecimal: string; RGB: string
      
      Media Links:
      Facebook:string
      Instagram:string
      Linkedin:string
      
      Logo and Visuals:
      Logo Picture URL: string
      Icon Picture URL: string
      Strip Picture URL: string`,
    },
    {
      status: '404',
      desc: 'Wallet not found',
    },
  ];
  GetWALLETSResponses = [
    {
      status: '200',
      desc: `Status: Success

      Business Details:
      ID: string
      Name: string
      Business Phone: string
      Service Phone: string
      Website: string
      Address: string
      Opening Hours: string
      Identifier QR: string
      Identifier: string
      Gain Unit: string
      
      Visual Identity:
      Label Color: Hexadecimal: string; RGB: string
      Background Color: Hexadecimal: string; RGB: string
      Foreground Color: Hexadecimal: string; RGB: string
      
      Media Links:
      Facebook:string
      Instagram:string
      Linkedin:string
      
      Logo and Visuals:
      Logo Picture URL: string
      Icon Picture URL: string
      Strip Picture URL: string`,
    },
    {
      status: '404',
      desc: 'Wallet not found',
    },
  ];
  CreateCustomersResponses = [
    {
      status: '200',
      desc: `Created 
      id: (string) 
      gain: (Number)
      firstName: (string)
      lastName: (string)email: (string) 
      source: (string) 
      barcode: (string) 
      CreatedAt:(string) `,
    },
    {
      status: '204',
      desc: 'No Content ',
    },
    {
      status: '403',
      desc: 'Forbidden',
    },
    {
      status: '404',
      desc: 'Wallet not found',
    },
  ];
  UpdateCustomersResponses = [
    {
      status: '200',
      desc: `Customer successfully updated `,
    },
    {
      status: '204',
      desc: 'No Content ',
    },
    {
      status: '403',
      desc: 'Forbidden',
    },
    {
      status: '404',
      desc: 'Customer not found',
    },
  ];
  GetCustomerResponses = [
    {
      status: '200',
      desc: `_id: (string) 
      gain: (Number) 
      firstName: (string) 
      lastName: (string) 
      email: (string) 
      source: (string)
      barcode: (string) 
      CreatedAt:(string) `,
    },
    {
      status: '401',
      desc: 'Unauthorized ',
    },
    {
      status: '404',
      desc: 'Customer not found',
    },
  ];
  DeleteCustomerResponses = [
    {
      status: '200',
      desc: `successfully deleted `,
    },
    {
      status: '401',
      desc: 'Unauthorized ',
    },
    {
      status: '404',
      desc: 'Customer not found',
    },
  ];
  CreateOfferResponses2 = [
    {
      status: '200',
      desc: 'successful created ',
    },
    {
      status: '401',
      desc: 'Unauthorized ',
    },
    {
      status: '404',
      desc: 'Wallet  not found!  ',
    },
  ];
  GetOffersResponses2 = [
    {
      status: '200',
      desc: 'Offers list',
    },
    {
      status: '401',
      desc: 'Unauthorized ',
    },
    {
      status: '404',
      desc: 'Wallet  not found!  ',
    },
  ];

  loginResponses = [
    {
      name: 'name',
      type: 'string',
      required: true,
      desc: 'Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. ',
    },
    {
      name: 'FOREIGNCOLOR ',
      type: 'object ',
      required: true,
      desc: "To add Title color for ios passes Example:{'hex':'#eb6d12','gb' :'rgb(235,109,18)'} ",
    },
    {
      name: 'LABELCOLOR',
      type: 'object ',
      required: true,
      desc: "To add text color for ios passes Example:{'hex':'#eb6d12','rgb' :'rgb(235,109,18)'} ",
    },
    {
      name: 'backgroundColor',
      type: 'object ',
      required: true,
      desc: "To add background color for passes Example:{'hex':'#eb6d12','rgb' :'rgb(235,109,18)'} ",
    },
    {
      name: 'distributionUpdateStrategy',
      type: 'string',
      required: true,
      desc: 'The field contais the region code and  the phoneNumber Exemple +33 88 88 88 88  ',
    },
    {
      name: 'businessPhone ',
      type: 'string',
      required: true,
      desc: '',
    },
    {
      name: 'barcodeType',
      type: 'string',
      required: true,
      desc: 'refers to the specific type or format of a barcode used to represent data or information, such as QR code,AZTEC ',
    },
    {
      name: 'expirationType',
      type: 'string',
      required: true,
      desc: "select the desired expiration type for our business requirements, such as options like 'NO_EXPIRATION' or 'AT_DATETIME' ",
    },
    {
      name: 'expirationDate',
      type: 'string',
      required: false,
      desc: 'The expiration date and time should be represented in ISO 8601 format, including the year, month, day, hours, minutes, seconds, and time zone offset. For instance: 2023-10-18T16:53:00+08:00. ',
    },
    {
      name: 'expirationAfterPeriod',
      type: 'string',
      required: false,
      desc: "This field enables you to establish a time duration, and when that specific period, whether it's in months, weeks, or years, has passed, the expiration takes effec-- ",
    },
    {
      name: 'PKTextAlignmentLeft',
      type: 'string',
      required: false,
      desc: 'Field used to show value of pass in the left side 60d  ',
    },
    {
      name: 'programName',
      type: 'string',
      required: true,
      desc: "used to left-align values inside passes like- 'expiration date', 'creation date' ",
    },
    {
      name: 'iosHeaderFields',
      type: 'object',
      required: true,
      desc: "Field comprises key-value pairs in a structured JSON format, enabling customization and data presentation within an iOS app's UI and network requests. For instance, in the given example: { 'label' : 'FULLNAME' , 'labelPersonnalizedText' : '+d’infos...' , 'value' : 'FULLNAME' , 'valuePersonnalizedText' : 'Default text' }. ",
    },
    {
      name: 'additionalContacts',
      type: 'array',
      required: false,
      desc: 'field include secondary contacts ',
    },
    {
      name: 'socialMedia',
      type: 'object',
      required: false,
      desc: 'Field Field includes various social media platforms  to show value of pass in the left side 60d  ',
    },
    {
      name: 'website',
      type: 'object',
      required: false,
      desc: 'Optional field to add our personnel  website ',
    },
    {
      name: 'address ',
      type: 'string',
      required: true,
      desc: 'site Required to add adress for a business, organization ',
    },
    {
      name: 'openingHours',
      type: 'string',
      required: true,
      desc: 'Required to add operating hours or times of availability for a business, organization ',
    },
    {
      name: 'descriptions',
      type: 'array',
      required: false,
      desc: 'Max size of field (100 char )',
    },
    {
      name: 'emailingConfig ',
      type: 'string',
      required: true,
      desc: 'provides the option to select either SMTP or SES as the email service ',
    },
    {
      name: 'displayWalletName',
      type: 'boolean',
      required: true,
      desc: 'A boolean option to display the organization name on passes.',
    },
    {
      name: 'A boolean option to display the organization name on passes. ',
      type: 'array',
      required: false,
      desc: 'add operating locations for a business, organization ',
    },
    {
      name: 'gainUnit',
      type: 'string',
      required: false,
      desc: 'unit of measurement used to quantify and express gains ',
    },
    {
      name: 'logo',
      type: 'file',
      required: true,
      desc: 'Recommended',
    },
    {
      name: 'icon',
      type: 'file',
      required: true,
      desc: '',
    },
    {
      name: 'strip',
      type: 'file',
      required: true,
      desc: '',
    },
  ];
  CreateOfferResponses = [
    {
      name: 'startDate',
      type: 'string',
      required: true,
      desc: 'Field with string iso formt ',
    },
    {
      name: 'ENDdate',
      type: 'string',
      required: true,
      desc: 'Field with string iso formt ',
    },
    {
      name: 'description',
      type: 'string',
      required: true,
      desc: '',
    },
    {
      name: 'Strip',
      type: 'file',
      required: true,
      desc: '',
    },
  ];

  logData(): void {
    getCouponServices();
  }

  openCloseDrawer(): void {
    this.drawerEvent.emit('opened');
  }
}
