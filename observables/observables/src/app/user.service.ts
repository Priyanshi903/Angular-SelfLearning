import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

// use providedIn: 'root' or add userServce to the providers in app.module.ts
@Injectable({ providedIn: 'root' })
export class UserService {
  // activatedEmitter = new EventEmitter<boolean>();
  // subject used as alternative of EventEmitter:
  activatedEmitter = new Subject<boolean>();
}

// subjects cant be used with @Output(), they r used for communication between components through service
