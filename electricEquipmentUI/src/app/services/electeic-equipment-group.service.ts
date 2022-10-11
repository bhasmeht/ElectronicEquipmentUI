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
    return this.http.put(this.baseServerUrl+'addequipmentgroup',{
      EquipmentGroupId: equipmentgroup[1],
      EquipmentGroupName: equipmentgroup[2],
      EquipmentCategoryId: equipmentgroup[3],
      
    });
  }
  getAllEquipmentCategory(){
    return this.http.get('http://localhost:5000/api/EquipmentCategory/getequipmentcategory');
  }
}
