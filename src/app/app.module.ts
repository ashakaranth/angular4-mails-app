import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ContentAreaComponent } from "./content-area/content-area.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { MailsComponent } from "./mails/mails.component";
import { MailComponent } from "./mail/mail.component";
import { AboutComponent } from "./about/about.component";
import { EmailService } from "./email.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentAreaComponent,
    NavbarComponent,
    SidebarComponent,
    MailsComponent,
    MailComponent,
    AboutComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule {}
