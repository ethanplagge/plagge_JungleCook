export function changePage(hashTag, pageName){
  $("#bread-crumb").html(``);
  if(pageName == ""){
      $.get(`pages/home.html`, (data) =>{
          $("#app").html(data);
      }).fail(() =>{
          console.log("failed")
      })
  }else{
      $("#bread-crumb").html(`<a href="${hashTag}">${pageName}</a>`);
      $.get(`pages/${pageName}.html`, (data) =>{
          if (data){
              $("#app").html(data);
              
          }else{
              alert("no")
          }
          
      }).fail(() =>{
          console.log("nah")
      })
  }
}