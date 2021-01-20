import * as ModuloArrayLista from './ModuloArrayLista.js'

jQuery(document).ready(function(){
    let array_versiculos = ModuloArrayLista.gerar_lista_versiculos();
    console.log(array_versiculos);

    jQuery('.conteudo_lista').html(ModuloArrayLista.montar_lista_de_versiculos(array_versiculos));
});