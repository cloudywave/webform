
        function submitForm() {
var data ={};           $( "[ID^='Account']" ).each(function(key,value){ debugger; account[$(value).attr('id')] =$(value).val();    })
         var account={}; $.ajax({
                url: 'https://webapitest-developer-edition.eu6.force.com/services/apexrest/WebForms',
                type: "POST",  contentType: 'application/json',
                dataType: "json", headers: { 'Access-Control-Allow-Origin': '*' }, data:   JSON.stringify({"prakash":[]}),
                success: function (result) {
                  console.log(result);
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log(xhr);
                }
            });
      
        }
