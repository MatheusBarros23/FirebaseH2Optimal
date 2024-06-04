<!DOCTYPE html>
<html>
<head>
  <title>H2Optimal</title>
  <link rel="stylesheet" type="text/css" href="style.css">
  <!-- SDK do Firebase -->
  <script src="https://www.gstatic.com/firebasejs/9.6.8/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.6.8/firebase-database-compat.js"></script>
</head>
<body>
    <div class="main">
        <div class="image">
            <img src="logo.png" alt="Logo" id="logo-image" width="80px">
        </div>
        <div class="text">
            <h1>Bem Vindo ao H2Optimal</h1>
            <p>Calculo umidade com controle: <span id="data">...</span></p>
        </div>
    </div>

  <script>
    // Configuração do Firebase obtida do console
    const firebaseConfig = {
 
    };

    // Inicializar Firebase
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();

    // Referência ao nó do Realtime Database que você quer acessar
    const ref = database.ref('*');

    // Obter dados uma vez
    ref.once('value')
      .then((snapshot) => {
        let str = snapshot.val();
        if (str.charCodeAt(0) < 32 || str.charCodeAt(0) > 126) {
            str = str.slice(1);
        }
        
        document.getElementById('data').innerText = str;
      })
      .catch((error) => {
        console.error("Erro ao obter dados: ", error);
      });
  </script>
</body>
</html>
