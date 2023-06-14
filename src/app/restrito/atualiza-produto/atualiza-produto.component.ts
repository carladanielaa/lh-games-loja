import { Component } from '@angular/core';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-atualiza-produto',
  templateUrl: './atualiza-produto.component.html',
  styleUrls: ['./atualiza-produto.component.css']
})
export class AtualizaProdutoComponent {

  public produtoId :number = 0;
  public produto: Produto = new Produto(0,"","","",0);
  constructor(private _produtoService: ProdutoService,private _activatedRoute: 
  ActivatedRoute, private _router:Router) {
  this._activatedRoute.params.subscribe((params: { [x: string]: number; }) => this.produtoId = 
  params['id']);
  }
  ngOnInit():void{
  this.listarProduto();
  }
  listarProduto():void{
  this._produtoService.getProduto(this.produtoId)
  .subscribe((res:any) => { console.log(res[0].produto);
  this.produto = new
  Produto(res[0].id,res[0].produto,res[0].descricao,res[0].foto,res[0].preco);
  })
  }
  atualizar(id: number){
  this._produtoService.atualizarProduto(id,this.produto).subcribe(
    (  _produto: any): void => {this.produto = new Produto(0,"","","",0)},
    (  err: any) => {console.log("erro ao atualizar")}
  );
  this._router.navigate(["/restrito/lista"]);
  }
}
}
