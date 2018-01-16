$(document).ready(function (){




 $(window).scroll(function() {
        if ($(this).scrollTop() >= 30) {
            $('div.header-fix').addClass('sticky-nav');
        }
        else {
            $('div.header-fix').removeClass('sticky-nav');
        }
    });







$('#anhorelink1').addClass('addactive');

$(window).on("scroll", function() {
console.log($(window).scrollTop())

//<li><a id="anhorelink1" href="#anhore">Про послугу</a></li>
//<li><a id="anhorelink2" href="#tarif">Інтернет</a></li>
//<li><a id="anhorelink3" href="#vegaphone">Телефонія</a></li>
//<li><a id="anhorelink4" href="#tv">ТБ</a></li>
var a=$(window).scrollTop();
	switch(true)
{
	case  a>=0&&a<=2022:
	{
		
		$('#anhorelink2').removeClass('addactive');

		$('#anhorelink1').addClass('addactive');
		break;
		
	}
	case a>=2023&&a<=2601:
	{
	$('#anhorelink3').removeClass('addactive');	
	$('#anhorelink3').addClass('trainee-menu-fix-focus');	
	$('#anhorelink2').addClass('addactive');
   	$('#anhorelink1').removeClass('addactive');	
   	break;
   	
	}

	case a>=2602&&a<=3154:
	{
		
		$('#anhorelink3').addClass('addactive');
		   $('#anhorelink2').removeClass('addactive');	
		   $('#anhorelink5').removeClass('addactive');
		break;
	}
	case a>=3155:
	{
		$('#anhorelink5').addClass('addactive');
   		$('#anhorelink3').removeClass('addactive');	
		break;
	}
}

    });

$("a[name$='ukr']").on("click",function(){
	$("a[name$='rus']").removeClass("addactive");
	$("a[name$='ukr']").addClass("addactive");
	langcheck="ukr";
	checklang();
	
	
})
$("a[name$='rus']").on("click",function(){
	$("a[name$='ukr']").removeClass("addactive");
	$("a[name$='rus']").addClass("addactive");
	langcheck="rus";
	checklang();
	
})


$("a[name$='apartment']").on("click",function(){

	$("a[name$='house']").removeClass("addactive");
	$("a[name$='apartment']").addClass("addactive");
	


})

$("a[name$='house']").on("click",function(){
	$("a[name$='apartment']").removeClass("addactive");
	$("a[name$='house']").addClass("addactive");
	

})



















}) 