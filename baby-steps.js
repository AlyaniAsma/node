let element = 0;
for (let index = 2; index < process.argv.length; index++) {
  element = element + Number(process.argv[index]);
}
console.log(element);
