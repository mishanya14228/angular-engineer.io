import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { SearchResult } from "../../types";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  constructor(public api: ApiService) {}

  itemToInspect?: SearchResult;
  searchQuery: string = "";

  sort: { direction: "asc" | "desc"; field?: string } = {
    direction: "asc",
    field: ""
  };

  toggleSort(field: string) {
    if (!this.sort.field) {
      this.sort = {
        field,
        direction: "asc"
      };
    } else {
      if (this.sort.direction === "asc") {
        this.sort.direction = "desc";
      } else {
        this.sort.field = "";
      }
    }
  }

  ngOnInit() {
    this.api.initDataRequesting();
  }

  rowClick(item: SearchResult) {
    this.itemToInspect = item;
  }

  onScroll() {
    this.api.paginationSubject$.next();
  }
}
