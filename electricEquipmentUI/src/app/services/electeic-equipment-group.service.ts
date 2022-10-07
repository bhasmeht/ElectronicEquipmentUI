import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElecteicEquipmentGroupService {

  constructor(private http: HttpClient) { }
  baseServerUrl = "http://localhost:5000/api/EquipmentGroup/";

  addEquipmentGroup(equipmentgroup:any){
    return this.http.post(this.baseServerUrl+'addequipmentgroup',{
      
      EquipmentGroupName: equipmentgroup[0],
      EquipmentCategoryId: equipmentgroup[1],
      
    });
  }

  updateEquipmentGroup(equipmentgroup:any){
    return this.http.put(this.baseServerUrl+'updateequipmentgroup',{
      EquipmentGroupId: equipmentgroup[0],
      EquipmentGroupName: equipmentgroup[1],
      EquipmentCategoryId: equipmentgroup[2],
      
    });
  }
}
