import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ElecteicEquipmentGroupService } from 'src/app/services/electeic-equipment-group.service';

@Component({
  selector: 'app-updateequipmentgroup',
  templateUrl: './updateequipmentgroup.component.html',
  styleUrls: ['./updateequipmentgroup.component.css']
})
export class UpdateequipmentgroupComponent implements OnInit {

  constructor(private updateEquipmentGroupService: ElecteicEquipmentGroupService) { }

  ngOnInit(): void {
  }

  equipmentGroupForm = new FormGroup({
    equipmentgroupid: new FormControl(""),
    equipmentgroupname: new FormControl(""),
    equipmentcategoryid: new FormControl(""),
  });

  equipmentGroupUpdated(){
    this.updateEquipmentGroupService.updateEquipmentGroup([
      this.equipmentGroupForm.value.equipmentgroupid,
      this.equipmentGroupForm.value.equipmentgroupname,
      this.equipmentGroupForm.value.equipmentcategoryid
      ]).subscribe()
  }
}