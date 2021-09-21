
let totalPrice = 0 ;
let quantity;
let totals=0;
let total;
let sum = function(acc,x){return acc+x};
let timeout;


$(document).ready(function(){
    allUpdate();
    $(document).on('input', 'tr input', function () {
        clearTimeout(timeout);
        timeout = setTimeout(function(){
            allUpdate();
        },500)
        
      });
      $('#shopping').on('submit',function(event){
        event.preventDefault();
        let newItem = $(this).find('[name =name]').val();
        let newItem2 = $(this).find('[name =quantity]').val();
       $('tbody').append('<tr>' + '<th scope="row" class="first">' + newItem + '</th> <td ><span>$</span><p class="price">' + newItem2 + '</p></td>' + 
       '<td class="middle quantity1"><span >QTY</span><input type="text"  class="quantity" value="0"><button class="btn btn-secondary btn-sm remove-item">Cancel</button></td>' + 
      '<td><span>$</span><p class="total-price"></p></td>' + 
   '</tr>')
        
        allUpdate();
    
        $(this).find('[name =name]').val('');
        $(this).find('[name =quantity]').val('');
      });

    

      $(document).on('click', '.remove-item', function(event){
          $(this).closest('tr').remove();
         allUpdate();
      })

      
})


 function quantityUpdate(ele){
    let value1 = Number($(ele).find('.quantity1 input').val());
   
    let value2 = Number($(ele).find('.price').text());
   
    total = value1 * value2;
    
    $(ele).find('.total-price').text(total);
    
    return total;

}


function allUpdate(){
    let Alltotal =[];
    $('tbody tr').each(function(i,ele){
        
        let totalEachPrice = quantityUpdate(ele);
        Alltotal.push(totalEachPrice);
        
    });
    let totalAllPrice = Alltotal.reduce(sum)
    $('.total-price-calculated').on('click',function(){
        $('.total-price-show').text(totalAllPrice);
    })
   
}

function checkInput() {
    if($('.quantity').val('')){
        
        let value = $('.quantity').val();
        
        total =Number((value)) * Number($('.quantity1').parent().prev().text().slice(1));
        
        $('.quantity').parent().next().children('.total-price').text(total);
       totals+=Number($('.quantity1').parent().next().children('.total-price').text())
       totalPriceCalculated();
       }
}





