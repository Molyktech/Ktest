import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from "../../services/local-storage.service";
import { KangarooData } from "../../models/KangarooData";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"],
})
export class HistoryComponent implements OnInit {
  collection: KangarooData[];
  p = 1;
  itemsPerPage = 10;

  constructor(private loalStorageService: LocalStorageService) {}

  ngOnInit() {
    this.getFormData();
  }

  getFormData() {
    this.collection = this.loalStorageService.getFromLocalStorage("formData");
  }
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.p - 1) + indexOnPage;
  }
}
