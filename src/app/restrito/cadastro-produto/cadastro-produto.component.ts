import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {
  public produto: Produto = new Produto(0,"","","",0);
  router: any;

  constructor(private _produtoService: ProdutoService, _private
    router:Router) { }
    ngOnInit(): void {
    }
    cadastrar(){
    this._produtoService.cadastrarProduto(this.produto).subscribe(
      (    _produto: any): void => {
    this.produto = new Produto(0,"","","",0);
    alert("Cadastro Efetuado com Sucesso")
    },
      (    _err: any) => {
    alert("erro ao cadastrar")
    }
    );
    this.router.navigate(["/restrito/lista"]);
    }
}
