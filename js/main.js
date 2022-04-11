let impModal;
let promModal;
let btnImp  = document.getElementById("btnImp");
let btnCanjear  = document.getElementById("btnCanjear");
let codValid = 'true';

window.onload = function () {

    if (pagina == 'index') {
        promModal.show();
        promModal = new bootstrap.Modal(document.getElementById('exampleModal'))
    } else {
        impModal = new bootstrap.Modal(document.getElementById('modalImpresion'))
    }
  
}

let exampleModal = document.getElementById('modalImpresion')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
    var button = event.relatedTarget
  // Extract info from data-bs-* attributes
    var recipient = button.getAttribute('data-bs-action')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  if (recipient == null) {
    btnImp.hidden = true;
  } else {
    btnImp.hidden = false;
  }
  // Update the modal's content.
    btnImp.innerHTML = recipient
})

btnImp.addEventListener("click", imprimir);
btnCanjear.addEventListener("click", envCode);

function showImpModal() {
    impModal.show();
}

function imprimir() {
    impModal.hide();
    swal("Generación de transacción correcta", "No olvide recoger su ticket", "success");
}

function envCode() {
  if(codValid == 'true') {
    swal("Código redimido correctamente", "Ahora puedes hacer válido tu promoción", "success");
    setTimeout(function(){
      impModal.show();
      swal.close();
    }, 1000);
    btnImp.hidden = true;

  } else if (codValid == 'false') {
    swal("Error al redimir el código", "Hubo un error al redimir tu código, verificalo e inténtalo nuevamente o acude a caja", "error");
  } else if (codValid == 'noValido') {
    swal("Código no válido", "Hubo un error con el código que ingresaste, verificalo e inténtalo nuevamente o acude a caja", "error");
  } else if (codValid == 'caduco') {
    swal("Código ha caducado", "El código que ingresaste ya ha caducado", "warning");
  } else if (codValid == 'ya') {
    swal("Código ya redimido", "Recuerda que solo puede hacerse efectivo una vez", "warning");
  }
}