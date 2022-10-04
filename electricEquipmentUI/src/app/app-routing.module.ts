import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentCategoryComponent } from './components/equipment-category/equipment-category.component';
import { EquipmentGroupComponent } from './components/equipment-group/equipment-group.component';
import { EquipmentsComponent } from './components/equipments/equipments.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:'',
  component: EquipmentsComponent
 },
 {path:'user',
  component: UserComponent
 },
 {path:'equipmentcategory',
  component: EquipmentCategoryComponent
 },
 {path:'equipmentgroup',
  component: EquipmentGroupComponent
 },
 {path:'updateuser',
  component: UpdateuserComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
