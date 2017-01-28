
        function submitForm() {
var account ={};           $( "[ID^='Account']" ).each(function(key,value){ debugger; account[$(value).attr('id')] =$(value).val();    })
         
            $.ajax({
                url: 'https://webapitest-developer-edition.eu6.force.com/services/apexrest/WebForms',
                type: "POST",
                dataType: "json", headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json; charset=UTF-8' }, data:JSON.stringify( {"jsondata": account}),
                success: function (result) {
                   
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log(xhr);
                }
            });
        }
