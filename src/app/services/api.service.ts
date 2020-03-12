import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { merge, interval, Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { SearchResultsArray, SearchResult } from "../types";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  baseURL = "https://hn.algolia.com/api/v1/search_by_date?tags=story";
  pageNum: number = 0;

  paginationSubject$ = new Subject();

  tableItems: SearchResult[] = [];

  constructor(private http: HttpClient) {}

  initDataRequesting() {
    this.requestNewPage();
    merge(
      interval(10 * 1000).pipe(tap(() => console.log("FROM INTERVAL"))),
      this.paginationSubject$.pipe(tap(() => console.log("FROM SCROLL")))
    ).subscribe(this.requestNewPage.bind(this));
  }

  fetchItems(page: number = 0): Promise<SearchResultsArray> {
    console.log("req for page", page);
    return this.http.get(`${this.baseURL}&page=${page}`).toPromise() as Promise<
      SearchResultsArray
    >;
  }

  async requestNewPage() {
    const newItems = await this.fetchItems(this.pageNum);
    this.tableItems = [...this.tableItems, ...newItems.hits];
    this.pageNum++;
  }
}
