$(function(){
    $('.parcel p').on('click',function(){
        // console.log($(this))
           $(this).addClass('pick').siblings().removeClass('pick');
           console.log(1)
    })


})