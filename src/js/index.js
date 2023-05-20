/*
    O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

        - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe black-mode no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe balck-mode no body
        - passo 5 - trocar a imagem do botão de alterar tema pra lua
    
        - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe balck-mode, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
        - passo 6 - verufucar se o body ja tem a classe black-mode
        - passo 7 - remover a classe do balck-mode do body
        - passo 8 - trocar a imagem do botão de alterar tema pra sol
*/

const changeThemeButton = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const changeTheme = document.querySelector(".image-button");

changeThemeButton.addEventListener("click", () => {
  const blackModeActive = body.classList.contains("black-mode");

  body.classList.toggle("black-mode");
  if (blackModeActive) {
    /*body.classList.remove("black-mode")*/
    changeTheme.setAttribute("src", "./src/imagens/sun.png")
  } else {
    /*body.classList.add("black-mode")*/
    changeTheme.setAttribute("src", "./src/imagens/moon.png")
  }
});
