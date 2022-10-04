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
      
      EquipmentName: equipment[0],
      PartId: equipment[1],
      EquipmentGroupId: equipment[2],
      EquipmentCategoryId: equipment[3]

    });
  }
}
