jQuery(document).ready(function () {
// jQuery('.ipt_filtro_pesquisa:checked')

jQuery(document).on('change', '.ipt_filtro_pesquisa', function(){
	console.log(jQuery(this).is(":checked"));
	jQuery('.ipt_filtro_pesquisa').each(function(){
		if(jQuery("input").is(":not(:checked)")){
			jQuery(this).parent().find('img').attr('src', 'img/check_out.png');
		}
	});
	if(jQuery(this).is(":checked")){
		jQuery(this).parent().find('img').fadeOut(600);
		jQuery(this).parent().find('img').attr('src', 'img/check.png');
		jQuery(this).parent().find('img').fadeIn(800);
	}
});
    
});