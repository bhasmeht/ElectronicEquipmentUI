import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ElecteicEquipmentService } from 'src/app/services/electeic-equipment.service';

@Component({
  selector: 'app-updateequipment',
  templateUrl: './updateequipment.component.html',
  styleUrls: ['./updateequipment.component.css']
})
export class UpdateequipmentComponent implements OnInit {

  constructor(private updateEquipmentService: ElecteicEquipmentService) { }

  ngOnInit(): void {
  }
  updateEquipmentForm = new FormGroup({
    equipmentid: new FormControl(""),
    equipmentname: new FormControl(""),
    partid: new FormControl(""),
    equipmentgroupid: new FormControl(""),
    equipmentcategoryid: new FormControl("")
  });

  equipmentUpdated(){
    this.updateEquipmentService.updateEquipment([
      this.updateEquipmentForm.value.equipmentid,
      this.updateEquipmentForm.value.equipmentname,
      this.updateEquipmentForm.value.partid,
      this.updateEquipmentForm.value.equipmentgroupid,
      this.updateEquipmentForm.value.equipmentcategoryid
    ]).subscribe()
  }
}
