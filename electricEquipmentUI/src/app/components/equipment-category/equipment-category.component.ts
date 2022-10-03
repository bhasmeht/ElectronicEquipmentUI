import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ElecteicEquipmentCategoryService } from 'src/app/services/electeic-equipment-category.service';

@Component({
  selector: 'app-equipment-category',
  templateUrl: './equipment-category.component.html',
  styleUrls: ['./equipment-category.component.css']
})
export class EquipmentCategoryComponent implements OnInit {

  constructor(private addEquipmentCategoryService: ElecteicEquipmentCategoryService ) { }

  ngOnInit(): void {
  }


  equipmentCategoryForm = new FormGroup({
    equipmentcategoryid: new FormControl(""),
    equipmentcategoryname: new FormControl(""),
  });

  equipmentCategoryAdded(){
    this.addEquipmentCategoryService.addEquipmentCategory([
      this.equipmentCategoryForm.value.equipmentcategoryid,
      this.equipmentCategoryForm.value.equipmentcategoryname
      
    ]).subscribe()
  }

}
