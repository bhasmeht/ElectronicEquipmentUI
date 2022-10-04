import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElecteicEquipmentCategoryService {

  constructor(private http: HttpClient) { }
  baseServerUrl = "http://localhost:5000/api/EquipmentCategory/addequipmentcategory";

  addEquipmentCategory(equipmentcategory:Array<any>){
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.baseServerUrl,{
      
      EquipmentCategoryName: equipmentcategory[0]
      
    });
  }
}
