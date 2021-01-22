function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);


   function onClick() {
      const input = document.querySelector('#searchField').value.toLocaleLowerCase();
      const rows = document.querySelectorAll('tbody tr');

      for (let row of rows) {
         if (row.textContent.toLocaleLowerCase().includes(input)) {
            row.setAttribute('class', 'select');
         } else {
            row.removeAttribute('class');
         }
      }
   }
}