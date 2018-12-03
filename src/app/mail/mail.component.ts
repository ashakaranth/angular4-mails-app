import {
  Component,
  OnInit,
  Input,
  SimpleChange,
  Output,
  EventEmitter
} from "@angular/core";
import { EmailService } from "../email.service";

@Component({
  selector: "app-mail",
  templateUrl: "./mail.component.html",
  styleUrls: ["./mail.component.scss"]
})
export class MailComponent implements OnInit {
  @Input() mailId;
  @Output() impMarkOutput = new EventEmitter();
  public mail: Object = "ok";

  constructor(private emailService: EmailService) {}

  private markAsImportant = () => {
    this.impMarkOutput.emit(this.mailId);
  };
  ngOnInit() {}

  ngOnChanges(changes: SimpleChange) {
    for (let propName in changes) {
      let change = changes[propName];
      let curVal = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);

      if (propName == "mailId" && curVal !== prevVal) {
        this.emailService.getSingleEmail(curVal).subscribe(data => {
          this.mail = data;
        });
      }
    }
  }
}
