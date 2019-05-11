$(function(){


        $.get("data/customers.json", function(Search, status){
            //console.log(data);
            //console.log(status);
            if(status == 'success'){
               var products = Search.Search;
               var tableHead = '<tr><th>ID</th><th>Name</th><th>Contact Name</th><th>Contact Title</th></tr>';
               $('#customers').append(tableHead);
               for(var index in products){
                   var product = products[index];
                   var tableRow = '<tr><td>' + product.customerID + '</td><td>' + product.companyName + '</td><td>' + product.contactName + '</td><td>' + product.contactTitle + '</td></tr>' ; 
                   $('#customers').append(tableRow);
                   console.log(product);
               } 
            }
        });

});