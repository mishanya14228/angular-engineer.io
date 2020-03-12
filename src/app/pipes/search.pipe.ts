import { Pipe, PipeTransform } from "@angular/core";
import { SearchResult } from "../types";

const checkValue = (val: string, search: string): boolean => {
  if (!val || !search) return false;
  return val.toLowerCase().includes(search.toLowerCase());
};

@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  transform(values: SearchResult[], query: string): SearchResult[] {
    if (!query) return values;

    return values.filter(
      value =>
        checkValue(value.url, query) ||
        checkValue(value.title, query) ||
        checkValue(value.author, query)
    );
  }
}
