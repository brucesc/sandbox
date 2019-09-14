import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FieldConfig } from '../Factory/field.interface';

@Injectable({
  providedIn: 'root'
})
export class FieldConfigurationService {

  private _fieldConfig: BehaviorSubject<FieldConfig[]> = new BehaviorSubject<FieldConfig[]>([]);
  public readonly fieldConfig: Observable<FieldConfig[]> = this._fieldConfig.asObservable();

  private _formTitle: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public readonly formTitle: Observable<string> = this._formTitle.asObservable();

  constructor() { }

  public getFormConfigurationByRoute(route: string) {
    
  }
}
