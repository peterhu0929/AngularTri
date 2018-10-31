import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ProgramsService } from './programs/programs.service';

import { Tri001Component } from './programs/tri001/tri001.component';
import { Tri002Component } from './programs/tri002/tri002.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { PipeModule } from './_pipe/pipe.module';
import { Code2namePipe } from './_pipe/code2name.pipe';
import { ShareDialogComponent } from './share-dialog/share-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    Tri001Component, Tri002Component, ShareDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // RouterModule,
    HttpClientModule,
    AngularMaterialModule,
    PipeModule
  ],
  providers: [],
  entryComponents: [ShareDialogComponent],// 動態載入
  bootstrap: [AppComponent]
})
export class AppModule { }
