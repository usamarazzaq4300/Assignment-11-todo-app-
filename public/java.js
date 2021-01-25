function createTable() 
{
    var title = document.getElementById("tit").value;
    var priority = document.getElementById("pri").value;
    var description = document.getElementById("Des").value ;
    var table = document.getElementById("work");
    var date = new Date;
    var current_date = date.getDate();
    var current_day = date.getMonth();
    var current_year = date.getFullYear();
    var toShowDate = current_date+"/"+current_day+"/"+current_year;
    var row = table.insertRow();
    var cell = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    cell.style.color =  'rgb(40,127,168)';
    cell.style.fontSize = '17px'
    cell.style.fontFamily = 'Arial, Helvetica, sans-serif'
    cell2.style.fontSize = '16px'
    cell2.style.fontFamily = 'Arial, Helvetica, sans-serif'
    cell3.style.fontSize = '16px'
    cell3.style.fontFamily = 'Arial, Helvetica, sans-serif'
    cell4.style.fontSize = '16px'
    cell4.style.fontFamily = 'Arial, Helvetica, sans-serif'
    cell4.style.textAlign = 'center'
    cell.innerHTML = title;
    cell2.innerHTML = priority;
    cell3.innerHTML = description;
    cell4.innerHTML  = toShowDate;
}