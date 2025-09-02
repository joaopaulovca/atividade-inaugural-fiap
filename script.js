const meuBotao = document.getElementById('meuBotao');
const meuForm = document.getElementById('meuFormulario');

async function enviarRequisicaoPost(jsonPayload) {
  
  const resposta = await fetch('https://fsdt-contact.onrender.com/contact', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: jsonPayload
  });

  if (resposta.ok) {
    alert('POST OK !');
    meuForm.reset(); 
  } else {
    alert('Erro !');
  }

}

meuForm.addEventListener('submit', async (e) => {

  e.preventDefault();

  let names = [
    document.getElementById("nome1").value, 
    document.getElementById("nome2").value, 
    document.getElementById("nome3").value,
    document.getElementById("nome4").value,
    document.getElementById("nome5").value
  ];

  let message = document.getElementById("historia").value;

  if 
    ((names[0] == '') || 
    (names[1] == '') ||
    (names[2] == '') ||
    (names[3] == '') ||
    (names[4] == '') ||
    (message == ''))  {
      alert('Informe todos os nomes e a história do grupo.');
  } else {
    const myArray = { 
      names, 
      message
    };
    const jsonPayload = JSON.stringify(myArray);
    enviarRequisicaoPost(jsonPayload);
  }

});
