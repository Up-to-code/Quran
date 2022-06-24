
let  colm = document.getElementById("colm");
let aya = [];
let sory = document.getElementById('home')
let h4 = document.getElementById('h4');
async function get() {
  const url = await fetch('Quran.json');
  const data = await url.json();
let ay =document.getElementById("ay")
    ay.onclick =function () {
      sory.style.width = "0%";
     
    }

  colm.onclick =function () {
    sory.style.width = "50%";
  }
  

  for (var i = 0; i < data.length; i++) {
    let soryOp = data[i].Name;
    aya.push(data[i].Surah)

    sory.innerHTML += `
  <p id='id${i}'>${soryOp}</p>
  `
h4.innerHTML+=`
let id0 = document.getElementById('id0');
  id0.onclick = function() {
    h4.innerHTML = aya[0];
    id0.style.background='#7A85FFCC'
  }



`


  }
  h4.innerHTML = aya[0];

  let id0 = document.getElementById('id0');
  id0.onclick = function() {
    h4.innerHTML = aya[0]
  }



  let id1 = document.getElementById('id1');
  id1.onclick = function() {
    h4.innerHTML = aya[1]
  }



  let id2 = document.getElementById('id2');
  id2.onclick = function() {
    h4.innerHTML = aya[2]
  }



  let id3 = document.getElementById('id3');
  id3.onclick = function() {
    h4.innerHTML = aya[3]
  }



  let id4 = document.getElementById('id4');
  id4.onclick = function() {
    h4.innerHTML = aya[4]
  }



  let id5 = document.getElementById('id5');
  id5.onclick = function() {
    h4.innerHTML = aya[5]
  }



  let id6 = document.getElementById('id6');
  id6.onclick = function() {
    h4.innerHTML = aya[6]
  }



  let id7 = document.getElementById('id7');
  id7.onclick = function() {
    h4.innerHTML = aya[7]
  }



  let id8 = document.getElementById('id8');
  id8.onclick = function() {
    h4.innerHTML = aya[8]
  }



  let id9 = document.getElementById('id9');
  id9.onclick = function() {
    h4.innerHTML = aya[9]
  }



  let id10 = document.getElementById('id10');
  id10.onclick = function() {
    h4.innerHTML = aya[10]
  }



  let id11 = document.getElementById('id11');
  id11.onclick = function() {
    h4.innerHTML = aya[11]
  }



  let id12 = document.getElementById('id12');
  id12.onclick = function() {
    h4.innerHTML = aya[12]
  }



  let id13 = document.getElementById('id13');
  id13.onclick = function() {
    h4.innerHTML = aya[13]
  }



  let id14 = document.getElementById('id14');
  id14.onclick = function() {
    h4.innerHTML = aya[14]
  }



  let id15 = document.getElementById('id15');
  id15.onclick = function() {
    h4.innerHTML = aya[15]
  }



  let id16 = document.getElementById('id16');
  id16.onclick = function() {
    h4.innerHTML = aya[16]
  }



  let id17 = document.getElementById('id17');
  id17.onclick = function() {
    h4.innerHTML = aya[17]
  }



  let id18 = document.getElementById('id18');
  id18.onclick = function() {
    h4.innerHTML = aya[18]
  }



  let id19 = document.getElementById('id19');
  id19.onclick = function() {
    h4.innerHTML = aya[19]
  }



  let id20 = document.getElementById('id20');
  id20.onclick = function() {
    h4.innerHTML = aya[20]
  }



  let id21 = document.getElementById('id21');
  id21.onclick = function() {
    h4.innerHTML = aya[21]
  }



  let id22 = document.getElementById('id22');
  id22.onclick = function() {
    h4.innerHTML = aya[22]
  }



  let id23 = document.getElementById('id23');
  id23.onclick = function() {
    h4.innerHTML = aya[23]
  }



  let id24 = document.getElementById('id24');
  id24.onclick = function() {
    h4.innerHTML = aya[24]
  }



  let id25 = document.getElementById('id25');
  id25.onclick = function() {
    h4.innerHTML = aya[25]
  }



  let id26 = document.getElementById('id26');
  id26.onclick = function() {
    h4.innerHTML = aya[26]
  }



  let id27 = document.getElementById('id27');
  id27.onclick = function() {
    h4.innerHTML = aya[27]
  }



  let id28 = document.getElementById('id28');
  id28.onclick = function() {
    h4.innerHTML = aya[28]
  }



  let id29 = document.getElementById('id29');
  id29.onclick = function() {
    h4.innerHTML = aya[29]
  }



  let id30 = document.getElementById('id30');
  id30.onclick = function() {
    h4.innerHTML = aya[30]
  }



  let id31 = document.getElementById('id31');
  id31.onclick = function() {
    h4.innerHTML = aya[31]
  }



  let id32 = document.getElementById('id32');
  id32.onclick = function() {
    h4.innerHTML = aya[32]
  }



  let id33 = document.getElementById('id33');
  id33.onclick = function() {
    h4.innerHTML = aya[33]
  }



  let id34 = document.getElementById('id34');
  id34.onclick = function() {
    h4.innerHTML = aya[34]
  }



  let id35 = document.getElementById('id35');
  id35.onclick = function() {
    h4.innerHTML = aya[35]
  }



  let id36 = document.getElementById('id36');
  id36.onclick = function() {
    h4.innerHTML = aya[36]
  }



  let id37 = document.getElementById('id37');
  id37.onclick = function() {
    h4.innerHTML = aya[37]
  }



  let id38 = document.getElementById('id38');
  id38.onclick = function() {
    h4.innerHTML = aya[38]
  }



  let id39 = document.getElementById('id39');
  id39.onclick = function() {
    h4.innerHTML = aya[39]
  }



  let id40 = document.getElementById('id40');
  id40.onclick = function() {
    h4.innerHTML = aya[40]
  }



  let id41 = document.getElementById('id41');
  id41.onclick = function() {
    h4.innerHTML = aya[41]
  }



  let id42 = document.getElementById('id42');
  id42.onclick = function() {
    h4.innerHTML = aya[42]
  }



  let id43 = document.getElementById('id43');
  id43.onclick = function() {
    h4.innerHTML = aya[43]
  }



  let id44 = document.getElementById('id44');
  id44.onclick = function() {
    h4.innerHTML = aya[44]
  }



  let id45 = document.getElementById('id45');
  id45.onclick = function() {
    h4.innerHTML = aya[45]
  }



  let id46 = document.getElementById('id46');
  id46.onclick = function() {
    h4.innerHTML = aya[46]
  }



  let id47 = document.getElementById('id47');
  id47.onclick = function() {
    h4.innerHTML = aya[47]
  }



  let id48 = document.getElementById('id48');
  id48.onclick = function() {
    h4.innerHTML = aya[48]
  }



  let id49 = document.getElementById('id49');
  id49.onclick = function() {
    h4.innerHTML = aya[49]
  }



  let id50 = document.getElementById('id50');
  id50.onclick = function() {
    h4.innerHTML = aya[50]
  }



  let id51 = document.getElementById('id51');
  id51.onclick = function() {
    h4.innerHTML = aya[51]
  }



  let id52 = document.getElementById('id52');
  id52.onclick = function() {
    h4.innerHTML = aya[52]
  }



  let id53 = document.getElementById('id53');
  id53.onclick = function() {
    h4.innerHTML = aya[53]
  }



  let id54 = document.getElementById('id54');
  id54.onclick = function() {
    h4.innerHTML = aya[54]
  }



  let id55 = document.getElementById('id55');
  id55.onclick = function() {
    h4.innerHTML = aya[55]
  }



  let id56 = document.getElementById('id56');
  id56.onclick = function() {
    h4.innerHTML = aya[56]
  }



  let id57 = document.getElementById('id57');
  id57.onclick = function() {
    h4.innerHTML = aya[57]
  }



  let id58 = document.getElementById('id58');
  id58.onclick = function() {
    h4.innerHTML = aya[58]
  }



  let id59 = document.getElementById('id59');
  id59.onclick = function() {
    h4.innerHTML = aya[59]
  }



  let id60 = document.getElementById('id60');
  id60.onclick = function() {
    h4.innerHTML = aya[60]
  }



  let id61 = document.getElementById('id61');
  id61.onclick = function() {
    h4.innerHTML = aya[61]
  }



  let id62 = document.getElementById('id62');
  id62.onclick = function() {
    h4.innerHTML = aya[62]
  }



  let id63 = document.getElementById('id63');
  id63.onclick = function() {
    h4.innerHTML = aya[63]
  }



  let id64 = document.getElementById('id64');
  id64.onclick = function() {
    h4.innerHTML = aya[64]
  }



  let id65 = document.getElementById('id65');
  id65.onclick = function() {
    h4.innerHTML = aya[65]
  }



  let id66 = document.getElementById('id66');
  id66.onclick = function() {
    h4.innerHTML = aya[66]
  }



  let id67 = document.getElementById('id67');
  id67.onclick = function() {
    h4.innerHTML = aya[67]
  }



  let id68 = document.getElementById('id68');
  id68.onclick = function() {
    h4.innerHTML = aya[68]
  }



  let id69 = document.getElementById('id69');
  id69.onclick = function() {
    h4.innerHTML = aya[69]
  }



  let id70 = document.getElementById('id70');
  id70.onclick = function() {
    h4.innerHTML = aya[70]
  }



  let id71 = document.getElementById('id71');
  id71.onclick = function() {
    h4.innerHTML = aya[71]
  }



  let id72 = document.getElementById('id72');
  id72.onclick = function() {
    h4.innerHTML = aya[72]
  }



  let id73 = document.getElementById('id73');
  id73.onclick = function() {
    h4.innerHTML = aya[73]
  }



  let id74 = document.getElementById('id74');
  id74.onclick = function() {
    h4.innerHTML = aya[74]
  }



  let id75 = document.getElementById('id75');
  id75.onclick = function() {
    h4.innerHTML = aya[75]
  }



  let id76 = document.getElementById('id76');
  id76.onclick = function() {
    h4.innerHTML = aya[76]
  }



  let id77 = document.getElementById('id77');
  id77.onclick = function() {
    h4.innerHTML = aya[77]
  }



  let id78 = document.getElementById('id78');
  id78.onclick = function() {
    h4.innerHTML = aya[78]
  }



  let id79 = document.getElementById('id79');
  id79.onclick = function() {
    h4.innerHTML = aya[79]
  }



  let id80 = document.getElementById('id80');
  id80.onclick = function() {
    h4.innerHTML = aya[80]
  }



  let id81 = document.getElementById('id81');
  id81.onclick = function() {
    h4.innerHTML = aya[81]
  }



  let id82 = document.getElementById('id82');
  id82.onclick = function() {
    h4.innerHTML = aya[82]
  }



  let id83 = document.getElementById('id83');
  id83.onclick = function() {
    h4.innerHTML = aya[83]
  }



  let id84 = document.getElementById('id84');
  id84.onclick = function() {
    h4.innerHTML = aya[84]
  }



  let id85 = document.getElementById('id85');
  id85.onclick = function() {
    h4.innerHTML = aya[85]
  }



  let id86 = document.getElementById('id86');
  id86.onclick = function() {
    h4.innerHTML = aya[86]
  }



  let id87 = document.getElementById('id87');
  id87.onclick = function() {
    h4.innerHTML = aya[87]
  }



  let id88 = document.getElementById('id88');
  id88.onclick = function() {
    h4.innerHTML = aya[88]
  }



  let id89 = document.getElementById('id89');
  id89.onclick = function() {
    h4.innerHTML = aya[89]
  }



  let id90 = document.getElementById('id90');
  id90.onclick = function() {
    h4.innerHTML = aya[90]
  }



  let id91 = document.getElementById('id91');
  id91.onclick = function() {
    h4.innerHTML = aya[91]
  }



  let id92 = document.getElementById('id92');
  id92.onclick = function() {
    h4.innerHTML = aya[92]
  }



  let id93 = document.getElementById('id93');
  id93.onclick = function() {
    h4.innerHTML = aya[93]
  }



  let id94 = document.getElementById('id94');
  id94.onclick = function() {
    h4.innerHTML = aya[94]
  }



  let id95 = document.getElementById('id95');
  id95.onclick = function() {
    h4.innerHTML = aya[95]
  }



  let id96 = document.getElementById('id96');
  id96.onclick = function() {
    h4.innerHTML = aya[96]
  }



  let id97 = document.getElementById('id97');
  id97.onclick = function() {
    h4.innerHTML = aya[97]
  }



  let id98 = document.getElementById('id98');
  id98.onclick = function() {
    h4.innerHTML = aya[98]
  }



  let id99 = document.getElementById('id99');
  id99.onclick = function() {
    h4.innerHTML = aya[99]
  }



  let id100 = document.getElementById('id100');
  id100.onclick = function() {
    h4.innerHTML = aya[100]
  }



  let id101 = document.getElementById('id101');
  id101.onclick = function() {
    h4.innerHTML = aya[101]
  }



  let id102 = document.getElementById('id102');
  id102.onclick = function() {
    h4.innerHTML = aya[102]
  }



  let id103 = document.getElementById('id103');
  id103.onclick = function() {
    h4.innerHTML = aya[103]
  }



  let id104 = document.getElementById('id104');
  id104.onclick = function() {
    h4.innerHTML = aya[104]
  }



  let id105 = document.getElementById('id105');
  id105.onclick = function() {
    h4.innerHTML = aya[105]
  }



  let id106 = document.getElementById('id106');
  id106.onclick = function() {
    h4.innerHTML = aya[106]
  }



  let id107 = document.getElementById('id107');
  id107.onclick = function() {
    h4.innerHTML = aya[107]
  }



  let id108 = document.getElementById('id108');
  id108.onclick = function() {
    h4.innerHTML = aya[108]
  }



  let id109 = document.getElementById('id109');
  id109.onclick = function() {
    h4.innerHTML = aya[109]
  }



  let id110 = document.getElementById('id110');
  id110.onclick = function() {
    h4.innerHTML = aya[110]
  }



  let id111 = document.getElementById('id111');
  id111.onclick = function() {
    h4.innerHTML = aya[111]
  }



  let id112 = document.getElementById('id112');
  id112.onclick = function() {
    h4.innerHTML = aya[112]
  }



  let id113 = document.getElementById('id113');
  id113.onclick = function() {
    h4.innerHTML = aya[113]
  }

}
get()
