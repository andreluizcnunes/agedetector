function verificar(){
  let data = new Date();
  let ano = data.getFullYear();
  let formAno = window.document.getElementById('anoNascimento');
  let result = window.document.getElementById('resultado');

  if (formAno.value.length == 0 || Number(formAno.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente');
  } else {
    let formSexo = document.getElementsByName('sexo');
    let idade = ano - Number(formAno.value);
    let genero = '';

    let img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (formSexo[0].checked) {
      genero = 'Masculino';

      if (idade >=0 && idade < 5) {
        // baby
        img.setAttribute('src', 'assets/img/babyboy.png');
      } else if (idade >=6 && idade < 13) {
        // criança
        img.setAttribute('src', 'assets/img/criancaboy.png');
      } else if (idade >=13 && idade < 19) {
        // adolescente
        img.setAttribute('src', 'assets/img/adolescenteboy.png')
      } else if (idade >=20 && idade < 29) {
        // jovem
        img.setAttribute('src', 'assets/img/jovemboy.png')
      } else if (idade >=30 && idade < 49) {
        // adulto
        img.setAttribute('src', 'assets/img/adultoboy.png')
      } else if (idade >=50 && idade < 69) {
        // idoso nivel 1
        img.setAttribute('src', 'assets/img/idosoboynivel1.png')
      } else {
        // idoso nivel 2
        img.setAttribute('src', 'assets/img/idosoboynivel2.png')
      }
    } else if (formSexo[1].checked) {
      genero = 'Feminino';

      if (idade >=0 && idade < 5) {
        // baby
        img.setAttribute('src', 'assets/img/babygirl.png');
      } else if (idade >=6 && idade < 13) {
        // criança
        img.setAttribute('src', 'assets/img/criancagirl.png');
      } else if (idade >=13 && idade < 19) {
        // adolescente
        img.setAttribute('src', 'assets/img/adolescentegirl.png')
      } else if (idade >=20 && idade < 29) {
        // jovem
        img.setAttribute('src', 'assets/img/jovemgirl.png')
      } else if (idade >=30 && idade < 49) {
        // adulto
        img.setAttribute('src', 'assets/img/adultogirl.png')
      } else if (idade >=50 && idade < 69) {
        // idoso nivel 1
        img.setAttribute('src', 'assets/img/idosogirlnivel1.png')
      } else {
        // idoso nivel 2
        img.setAttribute('src', 'assets/img/idosogirlnivel2.png')
      }
    }

    result.style.textAlign = 'center';
    result.innerHTML = `<h3>${genero} com ${idade} anos</h3>`;
    result.appendChild(img);
  }
}