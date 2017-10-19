$(document).ready(function() {
console.log("ready");
    $.getJSON("data.json", function(data) {
          var personal_data = ''; 
          $.each(data, function (key, value) {
          personal_data += '<tr>';
          personal_data += '<td>'+value.name+'</td>';
          personal_data += '<td>'+value.description+'</td>';
          personal_data += '<td>' + '<a href=https://www.google.com/maps?q=' + value.location + '><p>CLICK ME</p></a></td>';
          personal_data += '</tr>';
          });
          $('#wholetable').append(personal_data);
    });

    });


          // var list = <  
          // $("#nameid").text(nameList);
          //var description = $('descriptionid').val()
          //var location = $('locationid').val(); 
          //$name.text(data.name);
    
