import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-lista-produto',
  standalone: false,
  
  templateUrl: './lista-produto.component.html',
  styles: ``
})
export class ListaProdutoComponent implements OnInit {

  public produtos: Produto[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.obterProdutos()
      .subscribe({
        next: produtos => { 
          this.produtos = produtos;
          console.log(produtos);
        },
        error : e => console.error(e)
      });
  }

}
