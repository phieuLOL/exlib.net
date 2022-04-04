var names = new Array();
var contribution = new Array();
var IDrank = new Array();
var rank = new Array();
var linkto = new Array();
/* user */
names[1] = "phieuLOL"; contribution[1] = 2; rank[1] = "thách đấu"; IDrank[1] = "r9"; linkto[1] = 1;
/* user */

const N = 1;

function printBXH() {
     for (let i = 1; i < N; ++i) {
          for (let j = i+1; j <= N; ++j) {
               if (contribution[j] > contribution[i]) {
                    const T1 = contribution[j];
                    contribution[j] = contribution[i];
                    contribution[i] = T1;

                    const T2 = names[i];
                    names[i] = names[j];
                    names[j] = T2;

                    const T3 = rank[i];
                    rank[i] = rank[j];
                    rank[j] = T3;

                    const T4 = IDrank[i];
                    IDrank[i] = IDrank[j];
                    IDrank[j] = T4;
               }
          }
     }

     for(let i = 1; i <= N; ++i) {
          var html = `
          <li class="info-hao-han" onclick="goto_user(` + linkto[i] + `)">
               <div class="number">` + i + `</div>
               <div class="name ` + IDrank[i] + `">` + names[i] + `</div>
               <div class="contribution">` + contribution[i] + `</div>
               <div class="rank ` + IDrank[i] + `">` + rank[i] + `</div>
          </li>`;
          document.getElementById('list-haohan').insertAdjacentHTML('beforeend', html);
     }
}

function goto_user(numb) {
     switch (numb) {
          case 1:
               window.location.assign("./user/phieulol.html");
               break;
     }
}