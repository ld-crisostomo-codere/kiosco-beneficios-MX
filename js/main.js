let impModal;
let promModal;

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
  // Update the modal's content.
    btnImp.innerHTML = recipient
})
let btnImp  = document.getElementById("btnImp");

btnImp.addEventListener("click", imprimir);

function showImpModal() {
    impModal.show();
}

function imprimir() {
    impModal.hide();
    swal("Generación de transacción correcta", "No olvide recoger su ticket", "success");
}