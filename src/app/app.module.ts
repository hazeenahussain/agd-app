import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageAgdComponent } from './home-page-agd/home-page-agd.component';
import { FooterComponent } from './footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { MatModule } from './mat.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageAgdComponent,
    FooterComponent
  ],
  imports: [
    MenubarModule, 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }