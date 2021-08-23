document.addEventListener('DOMContentLoaded', (event) => {

    function getRectArea(a, b) {
        if (a > 0 && b > 0) {
          return a / b;
        }
        return 0;
      }
      console.log(getRectArea(4, 3));
});