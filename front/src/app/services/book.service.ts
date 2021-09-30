import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "../models/book";

@Injectable({
  providedIn: "root",
})
export class BookService {
  private baseURL = "http://localhost:5002/api/book";

  constructor(private http: HttpClient) {}

  list(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseURL}/list`);
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.baseURL}/create`, book);
  }
}
