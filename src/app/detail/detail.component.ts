import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Respuesta } from '../models/objetos.model';
import { ResultService } from '../services/result.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  obj:any;


  constructor(
    private result: ResultService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe( (parametros)=>{
      this.listDetail(String(parametros.get('id')));
    })

  }

  listDetail(id: string) {
    this.result.detailResult(id).subscribe(async (res: Respuesta ) => {
      let respuesta: any = res;
      this.obj = {
        "id": respuesta['id'],
        "title": respuesta['title'],
        "price":respuesta['price'],
        "currency": respuesta['currency_id'],
        "picture": respuesta.pictures[0]['url'],
        "condition": respuesta['condition'],
        "free_shipping": respuesta.shipping['free_shipping'],
        "sold_quantity": respuesta['sold_quantity']
      }
      this.description("MLA865425769")
    });
  }

async description(id:string) {
  this.result.descriptionResult(id).subscribe((res: Respuesta ) => {
    let des: any = res;
    this.obj.description  = des['plain_text'];
  });
}


}
