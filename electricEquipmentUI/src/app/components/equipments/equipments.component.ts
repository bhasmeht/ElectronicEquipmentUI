import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ElecteicEquipmentService } from 'src/app/services/electeic-equipment.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

  
   

  constructor(private addEquipmentService: ElecteicEquipmentService) { }
  equipmentCategoryList:any;
  equipmentGroupList: any;
  

  ngOnInit() {
    this.addEquipmentService.getAllEquipmentCategory().subscribe(equipmentCategoryList=>
      {this.equipmentCategoryList = equipmentCategoryList
    });
    
  }
  


  equipmentForm = new FormGroup({
    
    equipmentname: new FormControl(""),
    partid: new FormControl(""),
    equipmentgroupid: new FormControl("123"),
    equipmentcategoryid: new FormControl("")
  });

  equipmentAdded(){
    this.addEquipmentService.addEquipment([
      
      this.equipmentForm.value.equipmentname,
      this.equipmentForm.value.partid,
      this.equipmentForm.value.equipmentgroupid,
      this.equipmentForm.value.equipmentcategoryid
    ]).subscribe()
  }

  GetEquipGroupById(event:any){
     console.log(event);
     this.addEquipmentService.getEquipmentGroupByCategoryId(event).subscribe(equipmentGroupList=>{
      this.equipmentGroupList=equipmentGroupList;
     })

  }
}
