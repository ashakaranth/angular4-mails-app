import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { MailsComponent } from "./mails/mails.component";
import { AppComponent } from "./app.component";
import { ContentAreaComponent } from "./content-area/content-area.component";
import { MailComponent } from "./mail/mail.component";

const routes: Routes = [
  {
    path: "",
    component: ContentAreaComponent,
    children: [
      { path: "about", component: AboutComponent },
      {
        path: "mails",
        component: MailsComponent,
        children: [
          {
            path: ":id",
            component: MailComponent
          }
        ]
      }
    ]
  },
  { path: "**", component: ContentAreaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
