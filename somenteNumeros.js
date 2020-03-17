function somenteNumeros(e) {
   const er = /[^0-9,]/;
   er.lastIndex = 0;
   let charInString = String.fromCharCode(e.charCode);
   if (er.test(charInString)) {
     e.preventDefault();
   }
}   