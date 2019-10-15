let btn = document.getElementById('btn');

btn.addEventListener('click', omikuji);

function omikuji() {
  // 0 ~ 4
  let res = [['ビッグマック','assets/img/bigmac_l.png'],
  ['チーズバーガー','assets/img/cheeseburger_l.png' ],
  ['チキンクリスプ','assets/img/chickencrisp_l.png'], 
  ['テリヤキバーガー','assets/img/teriyakimcburger_l.png'], 
  ['月見バーガー','assets/img/tsukimi2019_l.png']];
  let randomNum = Math.random();
  let result = document.getElementById('result');
  let img =document.getElementById('mac');
  // Math.floor
  // Math.ceil,
  // Math.round
  // 0, 1, 2, 3, 4

  // console.log(Math.floor(randomNum * res.length));

  let num = Math.floor(randomNum * res.length);

  result.textContent = res[num][0];
  img.src= res[num][1];
}