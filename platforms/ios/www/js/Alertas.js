
$(document).ready(function()
 {
   var url="http://climapesca.org/api/get_category_posts/?id=95";
   //var url="https://climapesca.org/?json=get_tag_posts&tag_slug=actualidad";
   $.getJSON(url,function(result){
    $.each(result.posts, function(i, field){
       	var mDateAlert=field.date;
       	var mToday=new Date().getTime();
       	var link=field.url;
       	var mid=field.id;
       	var strDate = new Date(mToday);
        var dd = strDate.getDate();
        var mm = strDate.getMonth()+1; //January is 0!
        var yyyy = strDate.getFullYear();
          if(dd<10){
            dd='0'+dd;
          } 
          if(mm<10){
            mm='0'+mm;
          }

       var today = yyyy+''+mm+''+dd;
       var mAlertNumber =mDateAlert.substring(0,10);
       mDateInit=mAlertNumber.replace('-','');
       mDateIni=mDateInit.replace('-','');
       mDateEnd = today;
       	var mDays = (mDateEnd-mDateIni)/ (1000 * 60 * 60 * 24);
        console.log(mDays);
        console.log(mDateIni);
        console.log(mDateEnd);
       	if(mDays<= 5){
       		var x = document.getElementById("toast")
    		x.className = "show";
    		setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
       	}
    });
   }).fail(function(jqXHR) {
    if (jqXHR.status == 404) {
       $("#posts").append("<li><h1>Error 404</h1></li>");
    } else {
        $("#posts").append("<li><h1>Error al obtener Condiciones Registradas En La Semana, compruebe su conexión.</h1></li>");
    }
});
});