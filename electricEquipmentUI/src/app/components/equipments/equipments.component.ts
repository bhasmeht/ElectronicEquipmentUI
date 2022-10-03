import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ElecteicEquipmentService } from 'src/app/services/electeic-equipment.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

  constructor(private addEquipmentService: ElecteicEquipmentService) { }

  ngOnInit(): void {
  }


  equipmentForm = new FormGroup({
    equipmentid: new FormControl(""),
    equipmentname: new FormControl(""),
    partid: new FormControl(""),
    equipmentgroupid: new FormControl(""),
    equipmentcategoryid: new FormControl("")
  });

  equipmentAdded(){
    this.addEquipmentService.addEquipment([
      this.equipmentForm.value.equipmentid,
      this.equipmentForm.value.equipmentname,
      this.equipmentForm.value.partid,
      this.equipmentForm.value.equipmentgroupid,
      this.equipmentForm.value.equipmentcategoryid
    ]).subscribe()
  }
}
