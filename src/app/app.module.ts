import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { DragDropModule} from '@angular/cdk/drag-drop';
import { MatDialogModule,} from '@angular/material/dialog';
import { ColumnFilterComponent } from './column-filter/column-filter.component';
// import { DialogData } from './DialogData';

// import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ColumnFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDialogModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ColumnFilterComponent],
schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]

})
export class AppModule { }
