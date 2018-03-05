import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AlertBoxModule } from '../alert-box/alert-box.module';
import { LicenseComponent } from './license.component';
import { IssueModule } from '../issue/issue.module';


@NgModule({
 imports: [
    CommonModule,
    AccordionModule.forRoot(),
    HttpModule,
    FormsModule,
    IssueModule,
    AlertBoxModule
],
 declarations: [
    LicenseComponent
],
 exports: [
    LicenseComponent,
],
    providers: [],
})
export class LicenseModule { }
