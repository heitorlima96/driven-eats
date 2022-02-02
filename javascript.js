const categorias = document.querySelectorAll(".categoria");

function selecionarPrato(a) {
  const pratos = categorias[0];

  const pratoSelecionado = pratos.querySelector(".selecionado");
  if (pratoSelecionado !== null) {
    pratoSelecionado.classList.remove("selecionado");
  }
  const item = document.querySelector("." + a);
  item.classList.add("selecionado");

  const ocultar1 = document.querySelector(".ocultar1");
  ocultar1.classList.remove("ocultar1");
}

function selecionarBebida(a) {
  const bebidas = categorias[1];

  const bebidaSelecionada = bebidas.querySelector(".selecionado");
  if (bebidaSelecionada !== null) {
    bebidaSelecionada.classList.remove("selecionado");
  }
  const item = document.querySelector("." + a);
  item.classList.add("selecionado");

  const ocultar2 = document.querySelector(".ocultar2");
  ocultar2.classList.remove("ocultar2");
}

function selecionarSobremesa(a) {
  const sobremesas = categorias[2];

  const sobremesaSelecionada = sobremesas.querySelector(".selecionado");
  if (sobremesaSelecionada !== null) {
    sobremesaSelecionada.classList.remove("selecionado");
  }
  const item = document.querySelector("." + a);
  item.classList.add("selecionado");

  const ocultar3 = document.querySelector(".ocultar3");
  ocultar3.classList.remove("ocultar3");
}

function habilitarTelaConfirmarPedido() {
  const telaFinal = document.querySelector(".tela-final");
  telaFinal.classList.remove("ocultar-tela-final");

  const itensSelecionados = document.querySelectorAll(".selecionado");
  const nomeDoPrato = itensSelecionados[0].querySelector(".item-do-menu__nome")
    .innerHTML;
  const nomeDaBebida = itensSelecionados[1].querySelector(".item-do-menu__nome")
    .innerHTML;
  const nomeDaSobremesa = itensSelecionados[2].querySelector(
    ".item-do-menu__nome"
  ).innerHTML;

  let precoDoPrato = itensSelecionados[0]
    .querySelector(".item-do-menu__preco")
    .innerHTML.replace("R$", "");

  let precoDaBebida = itensSelecionados[1]
    .querySelector(".item-do-menu__preco")
    .innerHTML.replace("R$", "");

  let precoDaSobremesa = itensSelecionados[2]
    .querySelector(".item-do-menu__preco")
    .innerHTML.replace("R$", "");

  let valor =
    +precoDoPrato.replace(",", ".") +
    +precoDaBebida.replace(",", ".") +
    +precoDaSobremesa.replace(",", ".");
  valor = valor.toFixed(2).replace(".", ",");

  let infoDoPedido = document.querySelector(".info-do-pedido");
  infoDoPedido.innerHTML =
    "<div>" +
    nomeDoPrato +
    "</div>" +
    "<div class='preco'>" +
    precoDoPrato +
    "</div>" +
    "<div>" +
    nomeDaBebida +
    "</div>" +
    "<div class='preco'>" +
    precoDaBebida +
    "</div>" +
    "<div>" +
    nomeDaSobremesa +
    "</div>" +
    "<div class='preco'>" +
    precoDaSobremesa +
    "</div>" +
    "<div>" +
    "TOTAL" +
    "</div>" +
    "<div class='preco'>" +
    "R$ " +
    valor +
    "</div>";
}

function codificarTexto(texto) {
  let textoCodificado = encodeURIComponent(texto);
  return textoCodificado;
}

function mandarMensagem() {
  const itensSelecionados = document.querySelectorAll(".selecionado");
  const nomeDoPrato = itensSelecionados[0].querySelector(".item-do-menu__nome")
    .innerHTML;
  const nomeDaBebida = itensSelecionados[1].querySelector(".item-do-menu__nome")
    .innerHTML;
  const nomeDaSobremesa = itensSelecionados[2].querySelector(
    ".item-do-menu__nome"
  ).innerHTML;

  let precoDoPrato = itensSelecionados[0]
    .querySelector(".item-do-menu__preco")
    .innerHTML.replace("R$", "");
  precoDoPrato = precoDoPrato.replace(",", ".");

  let precoDaBebida = itensSelecionados[1]
    .querySelector(".item-do-menu__preco")
    .innerHTML.replace("R$", "");
  precoDaBebida = precoDaBebida.replace(",", ".");

  let precoDaSobremesa = itensSelecionados[2]
    .querySelector(".item-do-menu__preco")
    .innerHTML.replace("R$", "");
  precoDaSobremesa = precoDaSobremesa.replace(",", ".");

  let valor = +precoDoPrato + +precoDaBebida + +precoDaSobremesa;
  valor = valor.toFixed(2);

  const nomeDoCliente = prompt("Por favor, digite seu nome:");
  const endereco = prompt("Por favor, digite seu endereço:");

  let mensagem =
    "Olá, gostaria de fazer o pedido: \n" +
    "- Prato: " +
    nomeDoPrato +
    "\n" +
    "- Bebida: " +
    nomeDaBebida +
    "\n" +
    "- Sobremesa: " +
    nomeDaSobremesa +
    "\n" +
    "Total: R$ " +
    valor +
    "\n" +
    "\n" +
    "Nome: " +
    nomeDoCliente +
    "\n" +
    "Endereço: " +
    endereco;

  const numeroDeCelular = "558196964286";
  window.open(
    "https://wa.me/" + numeroDeCelular + "?text=" + codificarTexto(mensagem)
  );
}

function cancelar() {
  const telaFinal = document.querySelector(".tela-final");
  telaFinal.classList.add("ocultar-tela-final");
}
