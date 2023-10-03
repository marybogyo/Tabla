
class NevMegjelenit {
    constructor(NEVEK, szuloElem) {
      this.NEVEK = NEVEK;
      this.szuloElem = szuloElem;
      let sor = this.tablaOsszeallit(NEVEK);
      this.szuloElem.find("tbody").html(sor); // Megkeressük a tbody-t és hozzáadjuk az új tartalmat
    }
  
    tablaOsszeallit() {
      let sor = "";
      for (let index = 0; index < this.NEVEK.length; index++) {
        const ad = this.NEVEK[index];
        let tr = $("<tr>");
        tr.append($("<td>").text(ad.vnev)); // Vezetéknév
        tr.append($("<td>").text(ad.knev)); // Keresztnév
        sor += tr.prop('outerHTML'); // A teljes sor HTML kódja
      };
     
      return sor;
      
    }
 
  }
  
  export default NevMegjelenit;
  
  
  
  
  
  