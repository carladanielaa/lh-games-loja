import { Component } from '@angular/core';
import { Produto } from '../models/Produto.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  public produtos: Produto[] = [];

  constructor(private _produtosService:ProdutosService){}

  ngOnint(): void {
    this.listarProdutos();

  }
  listsrProdutos():void{
    this._produtosService.getProduto().subscribe(
      retornaProdutos =>{
        this.produtos = retornaProdutos.map(
          item => {
            return new Produto(
              item.id,
              item.produto,
              item.descrição,
              item.foto,
              item.preco
            );
          }
        )
      }
    )
  }
}
