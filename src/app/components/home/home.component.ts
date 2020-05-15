import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LocalStorageService } from "../../services/local-storage.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  kangarooForm: FormGroup;
  submitted = false;
  result: string;

  constructor(
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.buildKangarooForm();
  }

  buildKangarooForm() {
    this.kangarooForm = this.formBuilder.group({
      x1: ["", [Validators.required]],
      v1: ["", [Validators.required]],
      x2: ["", [Validators.required]],
      v2: ["", [Validators.required]],
    });
  }

  get fc() {
    return this.kangarooForm.controls;
  }
  getResult() {
    this.submitted = true;
    if (this.kangarooForm.invalid) {
      return;
    }
    const { x1, v1, x2, v2 } = this.kangarooForm.value;
    this.result = this.kangaroo(x1, v1, x2, v2);
    const date = this.getDate();
    const localStorageObject = {
      date,
      fields: [x1, v1, x2, v2],
      result: this.result,
    };
    this.saveToLocalStorage(localStorageObject);
  }

  resetForm() {
    this.submitted = false;
    this.kangarooForm.reset();
    this.result = "";
  }

  kangaroo(...args) {
    const x1 = args[0];
    const v1 = args[1];
    const x2 = args[2];
    const v2 = args[3];
    if ((x2 > x1 && v2 >= v1) || (x2 - x1) % (v1 - v2) !== 0) {
      return "NO";
    } else {
      return "YES";
    }
  }

  getDate() {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;
    return dateTime;
  }

  saveToLocalStorage(obj) {
    this.localStorageService.saveToLocalStorage("formData", obj);
  }
}
