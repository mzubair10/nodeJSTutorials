//jshint esversion: 6
function getNthFib(n) {
  if (n == 1) return 0;
  if (n == 2) return 1;
  while(n > 0) {
      return getNthFib(n-2) + getNthFib(n-1);
  }
}

console.log(getNthFib(6));
