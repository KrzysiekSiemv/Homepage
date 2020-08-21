!function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0];
    if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;
        js.src='https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js,fjs);
    }
}
(document,'script','weatherwidget-io-js');

var x = document.cookie;
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function saveSettings(){
    var searchDefault = getCookie("searchDefault");
    if(document.getElementById('searchDef').value == "google"){
        setCookie("searchDefault", "google", 365);
        document.getElementById('searchPlaceholder').placeholder = "Szukaj w Google";
        document.getElementById('searchForm').action = "https://google.com/search"
    } else if(document.getElementById('searchDef').value == "duckduckgo"){
        setCookie("searchDefault", "duckduckgo", 365);
        document.getElementById('searchPlaceholder').placeholder = "Szukaj w DuckDuckGo";
        document.getElementById('searchForm').action = "https://duckduckgo.com"
    } else if(document.getElementById('searchDef').value == "bing"){
        setCookie("searchDefault", "bing", 365);
        document.getElementById('searchPlaceholder').placeholder = "Szukaj w Bing";
        document.getElementById('searchForm').action = "https://bing.com/search"
    } else if(document.getElementById('searchDef').value == "yahoo"){
        setCookie("searchDefault", "yahoo", 365);
        document.getElementById('searchPlaceholder').placeholder = "Szukaj w Yahoo!";
        document.getElementById('searchForm').action = "https://yahoo.com/search"
    }

    if(document.getElementById('switch1').checked == true){
        $('body').addClass('dark-mode');
        setCookie("darkMode", "yes", 14);
    } else {
        $('body').removeClass('dark-mode');
        setCookie("darkMode", "no", 14);
    }
}

$(document).ready(
    function checkCookie(){
        var cookieInfo = getCookie("cookieInfo");
        var searchDefault = getCookie("searchDefault");
        var darkMode = getCookie("darkMode");

        if(cookieInfo == ""){
            $('.alert').toast('show');
            setCookie("cookieInfo", "showed", 14);
        }

        if(searchDefault == "google"){
            document.getElementById('searchDef').value = "google";
            document.getElementById('searchPlaceholder').placeholder = "Szukaj w Google";
            document.getElementById('searchForm').action = "https://google.com/search"
        } else if(searchDefault == "duckduckgo"){
            document.getElementById('searchDef').value = "duckduckgo";
            document.getElementById('searchPlaceholder').placeholder = "Szukaj w DuckDuckGo";
            document.getElementById('searchForm').action = "https://duckduckgo.com"
        } else if(searchDefault == "bing"){
            document.getElementById('searchDef').value = "bing";
            document.getElementById('searchPlaceholder').placeholder = "Szukaj w Bing";
            document.getElementById('searchForm').action = "https://bing.com/search"
        } else if(searchDefault == "yahoo"){
            document.getElementById('searchDef').value = "yahoo";
            document.getElementById('searchPlaceholder').placeholder = "Szukaj w Yahoo!";
            document.getElementById('searchForm').action = "https://yahoo.com/search"
        } else if(searchDefault == ""){
            document.getElementById('searchDef').value = "google";
            document.getElementById('searchPlaceholder').placeholder = "Szukaj w Google";
            document.getElementById('searchForm').action = "https://google.com/search"
            setCookie("searchDefault", "google", 365);
        }

        if(darkMode == "no"){
            $('body').removeClass('dark-mode');
            document.getElementById('switch1').checked = false;
        } else {
            $('body').addClass('dark-mode');
            document.getElementById('switch1').checked = true;
        }
    }
);