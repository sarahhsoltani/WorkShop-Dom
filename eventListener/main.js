
var achat=document.getElementById('acheter');
achat.addEventListener('mouseover',msg1);
achat.addEventListener('mousedown',msg2);

function msg1 (){
    
    achat.innerHTML='ajouter au panier !';
    achat.style.background='#51AAE7 ';
}
function msg2 (){
  alert("votre produit a été ajoutée")
}