import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from '../services/result.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 list: Array<any> = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  showPueblo(event: any):void{
    this.list = event.arrayNew;
  }

  detail(id:string) {
    let link = ["detail/"+id];
    this.router.navigate(link);
  }

}
