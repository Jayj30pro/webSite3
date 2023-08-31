import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotetakerModelService {

  constructor() { }

  notes: string[] = [];
  

  add(note: string) {
    this.notes.push(note);
  }

  getNotes() {
    return this.notes;
  }

}
