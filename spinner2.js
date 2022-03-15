const symbols = ['\r|  ', '\r/  ' , '\r-  ', '\r\\  ' , '\r|  ', '\r/  ' , '\r-  ', '\r\\  ','\r|  ' ];
let time = 1;
for (const sym of symbols) {
  setTimeout(() => {
    process.stdout.write(sym);
  },time);
  time += 300;
}
