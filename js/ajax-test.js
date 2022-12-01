
$(loadDoc('projects/main.html',ChMainBody));

function loadDoc(url, cFunction) {
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        cFunction(this);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
  function ChMainBody(xhttp) {
    document.getElementById("demo").innerHTML =
    xhttp.responseText;
  }

  function ChangeUrl(page, url) {
    if (typeof (history.pushState) != "undefined") {
        var obj = { Page: page, Url: url };
        history.pushState(obj, obj.Page, obj.Url);
    } else {
        alert("Browser does not support HTML5.");
    }
}
$(function () {
    $("#nightLight").click(function () {
        loadDoc('projects/nightTest.html', ChMainBody);
        ChangeUrl('Page1', 'NightLight.htm');
    });
    $("#button2").click(function () {
        ChangeUrl('Page2', 'Page2.htm');
    });
    $("#button3").click(function () {
        ChangeUrl('Page3', 'Page3.htm');
    });
});

// window.addEventListener("popstate",function(e){
//   // if (e.state.Page == 'main'){
//   //   loadDoc('projects/main.html',ChMainBody);
//   // }
// })

// window.onpopstate = (event) => {
//   alert(`location: ${document.location}, state: ${JSON.stringify(event.state)}`)
//   if (event.state.view == 'main'){
//     loadDoc('projects/main.html',ChMainBody);
//   }
  
// }