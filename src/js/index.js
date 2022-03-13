/* objetivo: esconder um card Pokemon e mostrar outro, a medida que ele é escolhido na lista de Pokemon's
elementos necessários para isso: listagem/ cartão-Pokemon
1 passo - criar 2 variáveis para trabalhar com os elementos da tela!
2- passo - trabalhar com o evento do click = quando clicar em um card não selecionado, ele deve ativar um evento e mostrar um cartão
2.1 - remover a classe ativo do cartão aberto, e atribuir o ela a outro cartão selecionado 
2.2 - os cartões terão que ter um id para o js saber qual cartão pegar */


//Criando as duas variáveis:
const listaPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

/*colocar o evento de click em todos os pokemons
 utilizando arrow function para criar as funções */
listaPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        //remover a classe aberto apenas do que esta selecionado
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //selecionar o id do pokemon clicado, e adicionar novamente a classe aberto
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = `cartao-${idPokemonSelecionado}`
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover classe ativo e coloca-la no pokemon selecionado
        const pokemonAtivo = document.querySelector('.ativo')
        pokemonAtivo.classList.remove('ativo')
        const pokemonSelecionado = document.getElementById(idPokemonSelecionado)
        pokemonSelecionado.classList.add('ativo')
    })
})
