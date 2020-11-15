function add(data){
   var tb=document.getElementById('data-table');
   var row = tb.insertRow();
   var date = row.insertCell(0);
   var ma = row.insertCell(1);
   var thongbao =row.insertCell(2);
   date.innerHTML = data[0];
   ma.innerHTML = data[1];
   thongbao.innerHTML = data[2];
   console.log(data);
}