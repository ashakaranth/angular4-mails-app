import { Component, OnInit } from "@angular/core";
import { EmailService } from "../email.service";

@Component({
  selector: "app-mails",
  templateUrl: "./mails.component.html",
  styleUrls: ["./mails.component.scss"]
})
export class MailsComponent implements OnInit {
  constructor(private emailService: EmailService) {}
  private newMails: any;
  public name: Number = 1;
  private markAsImp = impMarked => {
    if (this.newMails[impMarked - 1].isImp == "Important") {
      this.newMails[impMarked - 1].isImp = "";
    } else {
      this.newMails[impMarked - 1].isImp = "Important";
    }
  };
  private updateMailView = id => {
    this.name = id;
  };
  ngOnInit() {
    this.emailService.getEmails().subscribe(data => {
      this.newMails = data;
    });
  }
}
