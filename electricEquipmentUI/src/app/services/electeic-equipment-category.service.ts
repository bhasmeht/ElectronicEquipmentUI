import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElecteicEquipmentCategoryService {

  constructor(private http: HttpClient) { }
  baseServerUrl = "http://localhost:5000/api/EquipmentCategory/";

  addEquipmentCategory(equipmentcategory:any){
    
    return this.http.post(this.baseServerUrl+'addequipmentcategory',{
      
      EquipmentCategoryName: equipmentcategory[0]
      
    });
  }

  updateEquipmentCategory(equipmentcategory:any){
    
    return this.http.post(this.baseServerUrl+'updateequipmentcategory',{
      
      EquipmentCategoryId: equipmentcategory[0],
      EquipmentCategoryName: equipmentcategory[1]
      
    });
  }
}
