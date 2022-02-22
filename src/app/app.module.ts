import { NgModule } from '@angular/core';
import { CommonModule } from '@angul'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
// import { SharedModule, LayoutModule } from './modules';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    // AppRoutingModule,
    // SharedModule,
    // LayoutModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
