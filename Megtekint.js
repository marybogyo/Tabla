
class NevMegjelenit {
    constructor(NEVEK, szuloElem) {
      this.NEVEK = NEVEK;
      this.szuloElem = szuloElem;
      let sor = this.tablaOsszeallit(NEVEK);
      this.szuloElem.find("tbody").html(sor); // Megkeressük a tbody-t és hozzáadjuk az új tartalmat
    }
  
    tablaOsszeallit(NEVEK) {
      let sor = "";
  
      NEVEK.forEach(adat => {
        let tr = $("<tr>");
        tr.append($("<td>").text(adat.vnev)); // Vezetéknév
        tr.append($("<td>").text(adat.knev)); // Keresztnév
        sor += tr.prop('outerHTML'); // A teljes sor HTML kódja
      });
     
      return sor;
      
    }
  }
  
  export default NevMegjelenit;
  
  
  
  
  
  