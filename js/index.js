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

auto_search();
function auto_search(){
    var i = 1;
    setInterval(function() {
        con.css('border','1px solid #4285f4')
        if(i > length) {
            button.css({
                "background": "#f2f2f2",
                "border": '1px solid #4285f4'
            });
            setTimeout(function(){
                page1.css('display','none');
                page2.addClass('active');
            },1000)
            clearInterval();
            return
        }
        if(i <= length) {
            con.attr("value", Name.substr(0,i));
            i++;
        }
    },300);
}



