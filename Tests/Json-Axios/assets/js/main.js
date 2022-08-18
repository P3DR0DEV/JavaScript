axios('pessoas.json')
 .then(response => loadJson(response.data))


function loadJson(json) {
   const container = document.querySelector('.pessoas');
   const table = document.createElement('table');
   const tr = document.createElement('tr');
   const tdNome = document.createElement('td')
   const tdSalario = document.createElement('td')
   const tdEmail = document.createElement('td')



   tdNome.innerHTML = 'Nome'
   tdSalario.innerHTML = 'Salario'
   tdEmail.innerHTML = 'E-mail'
   tr.appendChild(tdNome)
   tr.appendChild(tdSalario)
   tr.appendChild(tdEmail)
   table.appendChild(tr)


   
   for(let pessoa of json){
      const tr = document.createElement('tr')
      const nome = pessoa.nome 
      const salario = pessoa.salario
      const email = pessoa.email
      
      const tdNome = document.createElement('td')
      tdNome.innerHTML = nome

      const tdSalario= document.createElement('td')
      tdSalario.innerHTML = `R$ ${salario},00`
      tdSalario.classList.add('right-items')

      const tdEmail = document.createElement('td')
      tdEmail.innerHTML = email
      tdEmail.classList.add('right-items')


      tr.appendChild(tdNome)
      tr.appendChild(tdSalario)
      tr.appendChild(tdEmail)
      table.appendChild(tr)
   }
   
   container.appendChild(table)
}