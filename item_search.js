$( document ).ready(function() {

    const myArr = JSON.stringify(data);
    // console.log(typeof myArr)
    // console.log(myArr)

    const jsonArr = JSON.parse(myArr)
    // console.log(typeof jsonArr)
    // console.log(jsonArr)


    $.each(jsonArr.customers.items, function(key,value) {
      // alert(item.id);
      // $("#foo").append("<p id='item_id'>" + value.id + "</p>")
      // $("#foo").append("<p id='mod_id'>" + value.MODS + "</p>")
        var customer_abbr = value.item_short;
        var item = value.id;
        var current_mod = value.current_mod;
        var mods = value.MODS

        var item_name = customer_abbr + "_" + item;
        var itemMOD = "_MOD" + current_mod ;

        var item_proof_path = "./items/" + item_name + "/Proof/" + customer_abbr + "_" + item + itemMOD + "_proof.pdf";
        var item_gallery_image_path = "./items/" + item_name + "/"  + customer_abbr + "_" + item + itemMOD + ".png";
        // console.log(customer_abbr)
        // console.log(item)
        // console.log(current_mod)
        // console.log(mods)
        // console.log(item_name)
        // console.log(itemMOD)
        // console.log(item_proof_path)
        // console.log(item_gallery_image_path)

        console.log(value.name)

       $('#item_gallery').append('<div id="' + item_name + '" class="col item_card"><div class="card shadow-sm"><a class="item-pdf-link" href="' + item_proof_path + '" title="View Label Proof" target="_blank"><img src="' + item_gallery_image_path + '" class="card-img-top" alt="..."></a><div class="card-body"><p class="h7 text-truncate text-bold text-bold">' + item_name + itemMOD + '</p><div class="d-flex justify-content-between align-items-center mod_link_container"><a tabindex="0" role="button" data-toggle="popover" data-bs-trigger="focus" class="btn btn-lg pull-right btn-light" data-bs-html="true" data-bs-content="No MODS" target="_blank" Title="View Archived MODs"><i class="bi-collection-fill" title="View Archived MODs"></i></a></div></div></div></div>')


    }); 

      // $.each(item_data, function(i, obj){
      //   // var mods = obj.MODS
      //   // if (mods.length > 0) {
      //   //   for (var key in mods) {
      //   //       if (mods.hasOwnProperty(key)) {
      //   //           alert(mods[key]);
      //   //       }
      //   //   }
      //   // } else {
      //   //   alert("No MODS Here")
      //   // }
        
        

      //   var customer_abbr = obj.customer_abbr;
      //   var item = obj.item;
      //   var current_mod = obj.current_mod;
      //   var mods = obj.MODS

      //   var item_name = customer_abbr + "_" + item;
      //   var itemMOD = "_MOD" + current_mod ;

      //   var item_proof_path = "./items/" + item_name + "/Proof/" + customer_abbr + "_" + item + itemMOD + "_proof.pdf";
      //   var item_gallery_image_path = "./items/" + item_name + "/"  + customer_abbr + "_" + item + itemMOD + ".png";


      //   $('#item_gallery').append('<div id="' + item_name + '" class="col item_card"><div class="card shadow-sm"><a class="item-pdf-link" href="' + item_proof_path + '" title="View Label Proof" target="_blank"><img src="' + item_gallery_image_path + '" class="card-img-top" alt="..."></a><div class="card-body"><p class="h7 text-truncate text-bold text-bold">' + item_name + itemMOD + '</p><div class="d-flex justify-content-between align-items-center mod_link_container"><a tabindex="0" role="button" data-toggle="popover" data-bs-trigger="focus" class="btn btn-lg pull-right btn-light" data-bs-html="true" data-bs-content="No MODS" target="_blank" Title="View Archived MODs"><i class="bi-collection-fill" title="View Archived MODs"></i></a></div></div></div></div>')


      //     if (mods.length > 0) {
      //       alert(mods.length)
      //       for (var key in mods) {
      //           if (mods.hasOwnProperty(key)) {
      //               var oldItemMOD = "_MOD" + key
      //               var item_mods_proof_path = "<a target='_blank' href='./items/" + item_name + "/Archived MODs/" + customer_abbr + "_" + item + oldItemMOD + "_proof.pdf'>" + item_name + oldItemMOD + "</a>" ;


      //               // alert(mod.length)

      //               // $(".mod_link_container").append('<a tabindex="0" role="button" data-toggle="popover" data-bs-trigger="focus" class="btn btn-lg pull-right btn-light" data-bs-html="true" data-bs-content="' + item_mods_proof_path + '"  target="_blank" Title="View Archived MODs"><i class="bi-collection-fill" title="View Archived MODs"></i></a>');

      //               // alert(item_mods_proof_path)

      //               // $('#item_gallery').append('<div id="' + item_name + '" class="col item_card"><div class="card shadow-sm"><a class="item-pdf-link" href="' + item_proof_path + '" title="View Label Proof" target="_blank"><img src="' + item_gallery_image_path + '" class="card-img-top" alt="..."></a><div class="card-body"><p class="h7 text-truncate text-bold text-bold">' + item_name + itemMOD + '</p><div class="d-flex justify-content-between align-items-center"><a tabindex="0" role="button" data-toggle="popover" data-bs-trigger="focus" class="btn btn-lg pull-right btn-light" data-bs-html="true" data-bs-content="' + item_mods_proof_path + '"  target="_blank" Title="View Archived MODs"><i class="bi-collection-fill" title="View Archived MODs"></i></a></div></div></div></div>')
      //           }
      //       }
      //     } else {
      //       // $('#item_gallery').append('<div id="' + item_name + '" class="col item_card"><div class="card shadow-sm"><a class="item-pdf-link" href="' + item_proof_path + '" title="View Label Proof" target="_blank"><img src="' + item_gallery_image_path + '" class="card-img-top" alt="..."></a><div class="card-body"><p class="h7 text-truncate text-bold text-bold">' + item_name + itemMOD + '</p><div class="d-flex justify-content-between align-items-center"><a tabindex="0" role="button" data-toggle="popover" data-bs-trigger="focus" class="btn btn-lg pull-right btn-light" data-bs-html="true" data-bs-content="No MODS" target="_blank" Title="View Archived MODs"><i class="bi-collection-fill" title="View Archived MODs"></i></a></div></div></div></div>')
      //     }


      // });


});