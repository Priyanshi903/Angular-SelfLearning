// created by us

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";

import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServiceResolver } from "./servers/server/server-resolver.service";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

// NOTE: dont add '/' in path starting
const appRoutes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ]
  },

  // Child(Nested) Routes
  {
    path: 'servers',

    // to protect whole servers route
    //  canActivate: [AuthGuard],

    // to protect only child routes
    canActivateChild: [AuthGuard],

    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent, resolve: { server: ServiceResolver } },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    ]
  },

  // { path: 'not-found', component: PageNotFoundComponent },

  // passing static data to a route
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },

  // Wild Card Routes
  // always in the last
  { path: '**', redirectTo: '/not-found' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

// notice: we can change name
export class AppRoutingModulee {

}

// { path: '', redirectTo: '/somewhere-else' }
// This route will now ALWAYS redirect you! Why?
// Since the default matching strategy is "prefix" , Angular checks if the path you entered in the URL does start with the path specified in the route. Of course every path starts with ''  (Important: That's no whitespace, it's simply "nothing").
// To fix this behavior, you need to change the matching strategy to "full" :
// { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' }
// Now, you only get redirected, if the full path is ''.
