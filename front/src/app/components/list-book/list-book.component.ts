import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/models/book";
import { BookService } from "src/app/services/book.service";

@Component({
  selector: "app-listar-",
  templateUrl: "./list-book.component.html",
  styleUrls: ["./list-book.component.css"],
})
export class ListBookComponent implements OnInit {
  book: Book[] = [];

  constructor(private service: BookService) {}

  ngOnInit(): void {
    this.service.list().subscribe((books) => {
      this.book = books;
      for (let book of books) {
        console.log(book);
      }
    });
  }
}
