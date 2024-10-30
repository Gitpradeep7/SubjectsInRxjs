import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
const materialHub = [
  MatTableModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatListModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatDividerModule,
  MatButtonModule,
  BrowserAnimationsModule,
  MatToolbarModule
  
]
@NgModule({
  declarations: [],
  imports: [materialHub],
  exports:[materialHub]
})
export class MaterialModule { }
