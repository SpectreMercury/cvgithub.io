/**
 * Created by Francis on 25/08/2016.
 */
var Name = "Li Jiaqi"
//The name you want to put in the input elements
var con = $('.page1 .fake-textarea .text-area');
//choose the container to input the name
var length = Name.length;
//The length of the name for loop
var button  = $('.fake-button .button');

var page1 = $('.page1');
var page2 = $('.page2');
initPage();
function initPage() {
    auto_search();
    clearInterval();
    $('.main-header').on('click',_onClickChangePage);
}
function auto_search(){
    var i = 1;
    setInterval(function() {
        con.css('border','1px solid #4285f4')
        if(i > length) {
            button.css({
                "background": "#f2f2f2",
                "border": '1px solid #4285f4'
            });
            clearInterval();
            return
        }
        if(i <= length) {
            con.attr("value", Name.substr(0,i));
            i++;
        }
    },300);
    setTimeout(function(){
            page1.css('display','none');
            page2.addClass('active');
            $('body').css('background','#ffffff');
            $('.main-header').css('visibility','visible');
        },3500)
}
function _onClickChangePage(e) {
    var curr_active = $('.main-header .active');
    var curr_page = $('.container .active');
    var curr_tar = $(e.target);
    if(curr_tar.hasClass('active')) {
        return
    }
    if(curr_tar.hasClass('personal-details')) {
        curr_page.removeClass('active');
        curr_active.removeClass('active');
        curr_tar.addClass('active');
        $('.page2').addClass('active');
    } else if(curr_tar.hasClass('personal-education')) {
        curr_page.removeClass('active');
        curr_active.removeClass('active');
        curr_tar.addClass('active');
        $('.page3').addClass('active');
    } else if(curr_tar.hasClass('personal-skills')) {
        curr_page.removeClass('active');
        curr_active.removeClass('active');
        curr_tar.addClass('active');
        $('.page4').addClass('active');
    } else if(curr_tar.hasClass('personal-experience')) {
        curr_page.removeClass('active');
        curr_active.removeClass('active');
        curr_tar.addClass('active');
        $('.page5').addClass('active');
    } else if(curr_tar.hasClass('personal-statement')) {
        curr_page.removeClass('active');
        curr_active.removeClass('active');
        curr_tar.addClass('active');
        $('.page6').addClass('active');
    }
}



