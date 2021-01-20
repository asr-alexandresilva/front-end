export function gerar_lista_versiculos(){
    let array_versiculos = [
        {
            livro: 'Gênesis',
            capitulo: '1',
            numero: '1',
            conteudo: 'No princípio criou Deus o céu e a terra.'
        },
        {
            livro: '1 Samuel',
            capitulo: '7',
            numero: '12',
            conteudo: 'Então tomou Samuel uma pedra, e a pôs entre Mizpá e Sem, e chamou-lhe Ebenézer; e disse: Até aqui nos ajudou o Senhor.'
        },
        {
            livro: 'Isaías',
            capitulo: '55',
            numero: '8',
            conteudo: 'Porque os meus pensamentos não são os vossos pensamentos, nem os vossos caminhos os meus caminhos, diz o Senhor.'
        },
        {
            livro: 'Isaías',
            capitulo: '55',
            numero: '9',
            conteudo: 'Porque assim como os céus são mais altos do que a terra, assim são os meus caminhos mais altos do que os vossos caminhos, e os meus pensamentos mais altos do que os vossos pensamentos.'
        },
        {
            livro: 'João',
            capitulo: '3',
            numero: '16',
            conteudo: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.'
        },
    ];

    return array_versiculos;
}

export function montar_lista_de_versiculos(array_versiculos){

    let lista_versiculos = '';

    array_versiculos.forEach(item => {
        lista_versiculos += `
            <div>
                <p><strong>Livro:</strong> ${item.livro} | <strong>Capitulo e Versículo:</strong> ${item.capitulo}:${item.numero}</p>
                <p><strong>Livro:</strong>  ${item.conteudo}</p>
                <hr>
            </div>
        `;
    });

    return lista_versiculos;
}