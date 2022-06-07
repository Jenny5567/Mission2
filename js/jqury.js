$(document).ready(function () {
    $('.number').children('li').first().click(function(e){
        e.preventDefault();
        $('.price1').children('p').text(10000);
        $('.price2').children('p').text(600); 
        $('.price3').children('p').text(10000);
        $('.price4').children('p').text('1,600'); 
    });
    
    $('.number').children('li').eq(1).click(function(e){
        e.preventDefault();
        $('.price1').children('p').first().text(15000);
        $('.price2').children('p').text(500); 
        $('.price3').children('p').first().text(15000);
        $('.price4').children('p').text('1,500'); 
    });

    $('.number').children('li').eq(2).click(function(e){
        e.preventDefault();
        $('.price1').children('p').first().text(20000);
        $('.price2').children('p').text(400); 
        $('.price3').children('p').first().text(20000);
        $('.price4').children('p').text('1,400'); 
    });

    $('.number').children('li').eq(3).click(function(e){
        e.preventDefault();
        $('.price1').children('p').first().text(25000);
        $('.price2').children('p').text(300); 
        $('.price3').children('p').first().text(25000);
        $('.price4').children('p').text('1,300'); 
    });

    $('.number').children('li').eq(4).click(function(e){
        e.preventDefault();
        $('.price1').children('p').first().text('>25000');
        $('.price2').children('p').text(200); 
        $('.price3').children('p').first().text('>25000');
        $('.price4').children('p').text('1,200'); 
    });
    
    
    
});