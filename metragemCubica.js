function handleVar() {
   const diametroInicial = document.getElementById('base').value;
   const diametroFinal = document.getElementById('topo').value;
   const comprimento = document.getElementById('comprimento').value;

   const respost = document.getElementById('respost');

   respost.innerHTML = "Metragem cúbica = " + calcularMetragemCubica(parseFloat(diametroInicial), parseFloat(diametroFinal), parseFloat(comprimento)) + " m³";

}

function calcularMetragemCubica(diametroInicial, diametroFinal, comprimento) {

   const mediaDiametro = (diametroInicial + diametroFinal) / 2;
   const raioEmCm = (mediaDiametro / 2) / 100;
   const vc = Math.PI * Math.pow(raioEmCm, 2) * comprimento;
   
   return vc.toFixed(3);
}