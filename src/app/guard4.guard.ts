import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminComponent } from './admin/admin.component';

@Injectable({
  providedIn: 'root'
})
export class Guard4Guard implements CanDeactivate<AdminComponent> {
  canDeactivate(
    component: AdminComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(component.unsaved){
      return window.confirm("are you sure")
    }
      return true;
  }
  
}
