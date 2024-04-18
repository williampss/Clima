const ClimaTemp = () =>{
  const name = document.querySelector('#name').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&lang=pt_br&units=metric&appid=777fd6c175f16899b669ab9b22be7638`;

  fetch(url)
    .then(resposta =>{
      // console.log(resposta)
      return resposta.json()
    })
      .then(dados =>{
        console.log(dados)
        document.querySelector('#temp').value=dados.main.temp;
      
      })
      .catch(erro => {
        console.log(erro)
      })
}