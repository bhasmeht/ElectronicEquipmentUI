import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentCategoryComponent } from './components/equipment-category/equipment-category.component';
import { EquipmentGroupComponent } from './components/equipment-group/equipment-group.component';
import { EquipmentsComponent } from './components/equipments/equipments.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateequipmentComponent } from './components/updateequipment/updateequipment.component';
import { UpdateequipmentcategoryComponent } from './components/updateequipmentcategory/updateequipmentcategory.component';
import { UpdateequipmentgroupComponent } from './components/updateequipmentgroup/updateequipmentgroup.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:'',
  component: LoginComponent
 },
 {
  path:'login',
  component: LoginComponent
 },
 {path:'user',
  component: UserComponent
 },
 {path:'updateuser',
  component: UpdateuserComponent
 },
 {path:'equipmentcategory',
  component: EquipmentCategoryComponent
 },
 {path:'updateequipmentcategory',
  component: UpdateequipmentcategoryComponent
 },
 {path:'equipmentgroup',
  component: EquipmentGroupComponent
 },
 
 {path:'updateequipmentgroup',
  component: UpdateequipmentgroupComponent
 },
 {path:'equipment',
  component: EquipmentsComponent
 },
 {path:'updateequipment',
  component: UpdateequipmentComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
