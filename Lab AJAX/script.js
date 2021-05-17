$(function(){
    $("#add_item").click(function(){
      let titulo = $("#add_item1").val();
      let descricao = $("#add_item2").val();
      let genero = $("#add_item3").val();
      let autor = $("#add_item4").val();

      let obj_tbody = $("<tbody>");
      let obj_tr = $("<tr>");
      let obj_td_titulo = $("<td>").text(titulo);
      let obj_td_descricao = $("<td>").text(descricao);
      let obj_td_genero = $("<td>").text(genero);
      let obj_td_autor = $("<td>").text(autor);  
      $("#table").append(obj_tbody).append(obj_tr).append(obj_td_titulo);
      //$("#table").append(obj_tr);
      //$("#table").append(obj_td_titulo); 
      console.log("Foi-----------------"); 
    })



});