import { Injectable } from '@angular/core';
import { KangarooData } from '../models/KangarooData';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  saveToLocalStorage(name, obj: KangarooData) {
    const existing = JSON.parse(localStorage.getItem(name)) || [];
    // Save to local storage
    if (existing) {
      existing.push(obj);
      localStorage.setItem(name, JSON.stringify(existing));
    } else {
      localStorage.setItem(name, obj.toString());
    }
  }

  getFromLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name));
  }
}
