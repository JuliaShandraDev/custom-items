import { Injectable } from '@angular/core';
import { ITestParameters } from "../modules/test/test.interfaces";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  public testInfo$: BehaviorSubject<ITestParameters | null> = new BehaviorSubject<ITestParameters | null>(null);
  constructor() { }
}
