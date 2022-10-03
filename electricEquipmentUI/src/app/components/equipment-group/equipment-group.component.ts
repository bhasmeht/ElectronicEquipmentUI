import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ElecteicEquipmentGroupService } from 'src/app/services/electeic-equipment-group.service';

@Component({
  selector: 'app-equipment-group',
  templateUrl: './equipment-group.component.html',
  styleUrls: ['./equipment-group.component.css']
})
export class EquipmentGroupComponent implements OnInit {
  equipmentGroupForm: any;

  constructor(private addEquipmentGroupService: ElecteicEquipmentGroupService ) { }

  ngOnInit(): void {
  }


  equipmentCategoryForm = new FormGroup({
  equipmentgroupid: new FormControl(""),
  equipmentgroupname: new FormControl(""),
  equipmentcategoryid: new FormControl("")
  });

  equipmentGroupAdded(){
    this.addEquipmentGroupService.addEquipmentGroup([
      this.equipmentGroupForm.value.equipmentgroupid,
      this.equipmentGroupForm.value.equipmentgroupname,
      this.equipmentGroupForm.value.equipmentcategoryid
      
    ]).subscribe()
  }
}
