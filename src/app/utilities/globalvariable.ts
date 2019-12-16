import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariable {
  public hostWeb:string = 'http://203.154.174.129/RLaiRodService';
  //public hostWeb:string = 'http://192.168.1.252/RLaiRodService';
  // public hostWeb:string = 'http://192.168.1.98/RLaiRodService';
  public hostWebService:string = 'http://203.154.174.129/RLaiRodService/RFService.asmx';
  //public hostWebService:string = 'http://192.168.1.252/RLaiRodService/RFService.asmx'
  // public hostWebService:string = 'http://192.168.1.98/RLaiRodService/RFService.asmx';
  public deviceToken:string = '';
}
