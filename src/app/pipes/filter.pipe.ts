import { Pipe, PipeTransform } from "@angular/core";
import { SearchResult } from "../types";
import { sortBy } from "lodash";


@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(values: SearchResult[], prop: string, type: "asc" | "desc", initialArray: SearchResult[]) {
    if (!prop) return initialArray;
    let copy = values;
    copy = sortBy(copy, prop);
    if (type === "desc") {
      copy = copy.reverse();
    }
    return copy;
  }
}
