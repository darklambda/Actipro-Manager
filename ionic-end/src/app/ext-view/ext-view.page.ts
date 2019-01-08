import { Component, OnInit } from '@angular/core';
import { ExtViewService} from "./ext-view.service";
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ext-view',
  templateUrl: './ext-view.page.html',
  styleUrls: ['./ext-view.page.scss'],
})
export class ExtViewPage implements OnInit {

    Ext: Object;

  constructor(private extViewService: ExtViewService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let serial = this.route.snapshot.paramMap.get('serial');
      console.log(serial);
      this.getData(serial);

  }

  getData(serial){
      this.extViewService.getExtinguisher(serial)
          .subscribe(
              res =>{
                  this.Ext = res[0];});
  }

}
