import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // + is added to make id a number, as id is a string
    // const id = +this.route.snapshot.params['id'];

    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     // add + here too
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // )

    // resolving dynamic data with the resolve guard
    this.route.data.subscribe(
      (data: Data) => {
        // server is same as server in app-module.ts server-resolver
        this.server = data['server'];
      }
    );
  }

  onEdit() {
    // this.router.navigate(['/servers', this.server.id, 'edit']); OR

    // queryParamsHandling is added to preserve allowEdit otherwise it will loose its value for all the servers when we click on edit server
    // queryParamsHandling:preserve/merge ,,,, merge is used to merge old and new query params
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }

}
