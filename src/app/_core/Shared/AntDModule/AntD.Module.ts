import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';


@NgModule({

    imports: [NzButtonModule, NzIconModule, NzTypographyModule, NzLayoutModule, NzGridModule, NzDividerModule, NzSpaceModule, NzTableModule, NzBreadCrumbModule],
    exports: [NzButtonModule, NzIconModule, NzTypographyModule, NzLayoutModule, NzGridModule, NzDividerModule, NzSpaceModule, NzTableModule, NzBreadCrumbModule],


})
export class AntDModule { }
