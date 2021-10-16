## Enunciado Exercicio 1:
Uma revendedora de carros usados paga a seus vendedores um salário fixo de R$2000,00 por mês. <br>
Os vendedores recebem uma comissão para cada carro vendido, no valor de R$100 + 5% do valor do carro.

~~~javascript 
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    let salarioFixo = 2000
    let comissao = (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05)
    let salarioAReceber = comissao + salarioFixo
    return salarioAReceber 
}
~~~
