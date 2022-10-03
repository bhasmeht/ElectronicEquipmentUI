import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElecteicEquipmentService {

  constructor(private http: HttpClient) { }

  baseServerUrl = "http://localhost:5000/api/Equipment/addequipment";

  addEquipment(equipment:Array<any>){
    return this.http.post(this.baseServerUrl,{
      EquipmentId: equipment[0],
      EquipmentName: equipment[1],
      PartId: equipment[2],
      EquipmentGroupId: equipment[3],
      EquipmentCategoryId: equipment[4]

    },{responseType:'text'});
  }
}
