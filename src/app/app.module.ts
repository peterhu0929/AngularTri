import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ProgramsService } from './programs/programs.service';
import { TrinavComponent } from './programs/trinav/trinav.component';
import { Tri001Component } from './programs/tri001/tri001.component';
import { Tri002Component } from './programs/tri002/tri002.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { PipeModule } from './_pipe/pipe.module';
import { Code2namePipe } from './_pipe/code2name.pipe';
import { ShareDialogComponent } from './share-dialog/share-dialog.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TrieventComponent } from './programs/trievent/trievent.component';
import { TrieventDetailComponent } from './programs/trievent/trievent-detail/trievent-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TrinavComponent,
    Tri001Component, Tri002Component, ShareDialogComponent, TrieventComponent, TrieventDetailComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // RouterModule,
    HttpClientModule,
    AngularMaterialModule,
    PipeModule,
    LayoutModule,
  ],
  providers: [],
  entryComponents: [ShareDialogComponent, TrieventDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
