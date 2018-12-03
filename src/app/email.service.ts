import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EmailService {
  public res: any = {};
  constructor(private httpClient: HttpClient) {}

  getEmails() {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }

  getSingleEmail(id) {
    return this.httpClient.get(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
  }
}
