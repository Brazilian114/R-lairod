import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalvariableService {
  apiURL = 'http://203.154.174.129/RLaiRodService/RFService.asmx/';
  constructor() { }

}

