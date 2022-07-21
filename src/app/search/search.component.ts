
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Respuesta } from '../models/objetos.model';
import { ResultService } from '../services/result.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  consulta : string = "";
  lista: Array<any> = [];
  formSearch: any;
  @Output() list = new EventEmitter();


  constructor(
    private result: ResultService,
    public fb : FormBuilder
  ) { }



  ngOnInit(): void {
    this.formSearch = this.fb.group({
      query:['']
    });
  }

  changeSearch(){
    let consulta = this.formSearch.value.query;
    this.result.searchResult(consulta).subscribe((res: Respuesta ) => {
      let lista = res?.results;
      if (lista != undefined) {
        for(let obj of lista){
          if(this.lista.length < 4){
            let articulo = {
              "id":obj.id,
              "title":obj.title,
              "currency": obj.currency_id,
              "categories":obj.tags,
              "condition": obj.condition,
              "free_shipping": obj.shipping.free_shipping,
              "amount":obj.installments.amount,
              "picture":obj.thumbnail,
              "address":obj.address.state_name
             }
            this.lista.push(articulo);
          }
        }
      }
      console.log(this.lista);
      this.list.emit({arrayNew: this.lista});
    });
  }


}
