function check_real_leteger_number(n) {
    let flag = 1;
    if (Math.ceil(n) != Math.floor(n)) flag = 0;
    return flag;
  }
  
  function find_square_number(n) {
    let flag = 0;
    if (check_real_leteger_number(Math.sqrt(n))) flag = 1;
    return flag;
  }
  let a = 0;
  let b = 0;
    do {
        a = prompt(" nhap mot so tu nhien a >0: ");
        b = prompt("nhap mot so tu nhien b >0:");
        a = Number(a);
        b = Number(b);
    } while (a < 0 || b < 0);
    
  for (let i = a; i <= b; i++) {
    if (find_square_number(i) == 1) {
      console.log(`${i} la so chinh phuong`);
      document.write(`${i} la so chinh phuong <br>`);
    }
  }