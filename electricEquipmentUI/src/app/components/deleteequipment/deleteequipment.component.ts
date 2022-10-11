import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ElecteicEquipmentService } from 'src/app/services/electeic-equipment.service';

@Component({
  selector: 'app-deleteequipment',
  templateUrl: './deleteequipment.component.html',
  styleUrls: ['./deleteequipment.component.css']
})
export class DeleteequipmentComponent implements OnInit {

  constructor(private deleteEquipmentService:ElecteicEquipmentService) { }

  equipmentList:any;

  ngOnInit(): void {

    this.deleteEquipmentService.getAllEquipment().subscribe(equipmentList=>
      {this.equipmentList = equipmentList
    });
  }

  // equipmentDeleted(){
  //   this.deleteEquipmentService.deleteEquipment()
  // }
  equipmentForm = new FormGroup({
    
    equipmentname: new FormControl(""),
    
  });

  equipmentDeleted(){
    this.deleteEquipmentService.deleteEquipment([
      this.equipmentForm.value.equipmentname])
  }


}
