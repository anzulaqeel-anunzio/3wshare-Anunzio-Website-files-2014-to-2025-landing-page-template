// JavaScript Document
/*˵*/
function menu(title,content,open_callback,close_callback,init_stat)
{
	this._parent = false;
	var head = $('#'+title);
	var body = $('#'+content);
	function toogle(){
		if(body.css('display')=='none')
		{
			body.slideDown('fast');
//			if(this._parent)this._parent._stat
			if (open_callback)open_callback(head.get(0),body.get(0));
		}
		else
		{
			body.slideUp('fast');
			if (close_callback)close_callback(head.get(0),body.get(0));
		}
	}
	head.click(toogle);
	head.keypress(toogle)
	this.open = function()
	{
		if(body.css('display')=='none')
		{
			body.slideDown('fast');
			if (open_callback)open_callback(head.get(0),body.get(0));
		}
	};
	this.close = function()
	{
		if(body.css('display')!='none')
		{
			body.slideUp('fast');
			if (close_callback)close_callback(head.get(0),body.get(0));
		}
	};
	/* ˵ʼ*/
	if(init_stat == 'hide' || init_stat == 'close' || init_stat == false ){
		if(body.css('display')!='none'){
			body.slideUp('fast');
			if (close_callback)close_callback(head.get(0),body.get(0));
		}
	}
}
// ˵ȫչȫĹ
function menubar()
{
	var menus = new Array();
/* Developed by Anunzio International */
	this.menu = function(title,content,open_callback,close_callback,init_stat)
	{
		menus.push(new menu(title,content,open_callback,close_callback,init_stat));
	};
	this.expand = function()
	{
			for(var i = 0 ;i<menus.length;i++){menus[i].open();}
	};
	this.collapse = function()
	{
			for(var i = 0 ;i<menus.length;i++)menus[i].close();
	};
}
/**/
/*Ӧʵ*/
var show = true;
var hide = false;
//޸Ĳ˵¼ͷ
function my_on(head,body)
{
	head.className='head_open'
}
function my_off(head,body)
{
	head.className="head"
}

//Ӳ˵	
window.onload=function()
{
	menus = new menubar();
	menus.menu("menu1",'menu1_content',my_on,my_off,hide);
	menus.menu("menu2",'menu2_content',my_on,my_off,hide);
	$('.menu_expand').click(menus.expand);
	$('.menu_collapse').click(menus.collapse)
}