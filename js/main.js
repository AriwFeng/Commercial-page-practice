
$(document).ready(function(){
//    nav-li hover e
    var num;
    $('.nav-main>li[id]').hover(function(){
       /*图标向上旋转*/
        $(this).children().removeClass().addClass('hover-up');
        /*下拉框出现*/
        var Obj = $(this).attr('id');
        num = Obj.substring(3, Obj.length);
        $('#box-'+num).slideDown(300);
    },function(){
        /*图标向下旋转*/
        $(this).children().removeClass().addClass('hover-down');
        /*下拉框消失*/
        $('#box-'+num).hide();
    });
    $('.hidden-box').hover(function(){
        /*保持图标向上*/
      // $('#li-'+num).children().removeClass().addClass('hover-up');
        $(this).show();
    },function(){
        $(this).slideUp(200);
        //s$('#li-'+num).children().removeClass().addClass('hover-down');
    });
});



//设置右边导航
$('#fullpage_Nav a').click(function(){

	$('#fullpage_Nav a').removeClass();
	$(this).addClass('activator');
	if($(this).attr('href')=='#page1'){
	   //$(this).attr('style',"background-color:#C6D30D");
	   $(this).addClass('icon-show');
	}else if($(this).attr('href')=='#page2'){
	  // $(this).attr('style',"background-color:#73BDDC");
	   $(this).addClass('icon-superiority');
	}else if($(this).attr('href')=='#page3'){
	   //$(this).attr('style',"background-color:#1BBC9B");
	   $(this).addClass('icon-introduce');
	}else{
		//$(this).attr('style',"background-color:#F0DA3F");
		$(this).addClass('icon-buy');
	}
	
	//var color=$('#fullpage_Nav a.activator').css('background-color');

	
	//$('#fullpage_Nav a:not(".activator")').attr('style',"background-color:transparent");
	$('#fullpage_Nav a:not(".activator")').addClass('notActive');



})


$('#fullpage_Nav a').mouseenter(function(){
	$(this).removeClass('notActive');
	var color=$('#menu li.active a').css('background-color');
	//$(this).attr('style',"background-color:"+color+' !important');
	$(this).css('background-color',color);
}) 
$('#fullpage_Nav>ul>li').on('mouseleave','a:not(.activator)',function(){
	//$(this).attr('style',"background-color:transparent");
	$(this).css('background-color','transparent');

})
//$('#fullpage_Nav a:not(.activator)').attr('style',"background-color:transparent");

$('#fullpage_Nav a:not(.activator)').addClass('notActive');


//设置随着鼠标移动

  $('#show').on('mousemove', function(e) {
    var offsetX = e.clientX / window.innerWidth - 0.5,
        offsetY = e.clientY / window.innerHeight - 0.5;
    //$('#show #car').css('left', -18 +40 * offsetX).css('top', 25 - 40 * offsetY);
	$('#show #text').css('left', 10 +45 * offsetX).css('top', 10 - 20 * offsetY);
	$('#show_child').css('left', -2 +30 * offsetX).css('top', 10 - 15 * offsetY);
    //$('#show #text').css('left', -18 + 40 * offsetX).css('top', 25 - 40 * offsetY);
  });