import { Injectable } from '@angular/core';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';
import {LocalStorageService} from 'local-storage.service';
import {State} from 'state';


@Injectable()
export class StateService implements State {

  stateEventChange$: Observable<string>;

  private _stateEvent: string;
  private _stateEventObserver: Observer<string>;

  constructor(public databaseService: LocalStorageService) {

    this._stateEvent = 'init';

    this.stateEventChange$ = new Observable<string>(
      (observer:any) => this._stateEventObserver = observer
    ).share();

  }

  get stateEvent(): string {
    return this._stateEvent;
  }

  set stateEvent(value: string) {
    if (this.stateEvent !== value) {
      this.stateEvent = value;
      if (this._stateEventObserver) {
        this._stateEventObserver.next(value);
      }
    }
  }

}
