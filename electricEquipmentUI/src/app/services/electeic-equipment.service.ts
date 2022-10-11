import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElecteicEquipmentService {

  constructor(private http: HttpClient) { }

  baseServerUrl = "http://localhost:5000/api/Equipment/";

  addEquipment(equipment:any){
    return this.http.post(this.baseServerUrl+'addequipment',{
      
      EquipmentName: equipment[0],
      PartId: equipment[1],
      EquipmentGroupId: equipment[2],
      EquipmentCategoryId: equipment[3]

    });
  }

  updateEquipment(equipment:any){
    return this.http.put(this.baseServerUrl+'updateequipment',{
      EquipmentId: equipment[0],
      EquipmentName: equipment[1],
      PartId: equipment[2],
      EquipmentGroupId: equipment[3],
      EquipmentCategoryId: equipment[4]

    });
  }

  deleteEquipment(equipment:any){
    return this.http.delete(this.baseServerUrl+'deleteequipment');
  }

  getAllEquipmentCategory(){
    return this.http.get('http://localhost:5000/api/EquipmentCategory/getequipmentcategory');
  }

  getAllEquipment(){
    return this.http.get('http://localhost:5000/api/Equipment/getequipment');
  }

  getEquipmentGroupByCategoryId(equipCatId:any){
    return this.http.get('http://localhost:5000/api/EquipmentGroup/getequipmentcategorybygroupid/'+equipCatId);
  }
}
