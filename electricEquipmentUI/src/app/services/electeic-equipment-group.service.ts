import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElecteicEquipmentGroupService {

  constructor(private http: HttpClient) { }
  baseServerUrl = "http://localhost:5000/api/EquipmentGroup/addequipmentgroup";

  addEquipmentGroup(equipmentgroup:Array<any>){
    return this.http.post(this.baseServerUrl,{
      
      EquipmentGroupName: equipmentgroup[0],
      EquipmentCategoryId: equipmentgroup[1],
      
    });
  }
}
