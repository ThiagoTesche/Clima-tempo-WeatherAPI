document.getElementById('btn').addEventListener("click", ()=>{

    function Search(){
        var text = document.getElementById('text').value;
        city = text.toString();
        url = "http://api.openweathermap.org/data/2.5/weather" + "?q=" + city + "&lang=pt_br&units=metric&appid=5bf273c69d98f7dce8c6b7e019b631f4";
    }

    function PegarDados(){
    Search();
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data){
        console.log(data);

        var dados = [{
            'cidade' :data.name,
            'country': data.sys.country,
            'temperatura' : data.main.temp,
            'tempMin' : data.main.temp_min,
            'tempMax' : data.main.temp_max,
            'desc' : data.weather[0].description,
            'icon' : data.weather[0].icon
        }
        ];
        
        let cidade = document.querySelector('.city');
        let uf = document.querySelector('.UF');
        let temp = document.querySelector('.temp');
        let desc = document.querySelector('.desc');
        let tempMin = document.querySelector('.tempMin');
        let tempMax = document.querySelector('.tempMax');
        var iconCode = dados[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        var icon = document.getElementById('wicon');
       
        function colocarDados(){
            cidade.innerHTML = dados[0].cidade + '<span class="UF">'+ dados[0].country +'</span>';
            uf.innerHTML = dados[0].country;
            temp.innerHTML = Math.floor(dados[0].temperatura) + '°';
            desc.innerHTML = dados[0].desc;
            tempMin.innerHTML = Math.floor(dados[0].tempMin)+ '°' + '/';
            tempMax.innerHTML = Math.floor(dados[0].tempMax) + '°';
            icon.setAttribute('src', iconUrl);
        }

        function DataAtual(){
            var dataAtual = new Date();
            var dia = String(dataAtual.getDate()).padStart(2, '0');   
            var dataHoje = dia + ' de julho, de 2021';
            document.getElementById('data').innerHTML = dataHoje;
        }

        
        DataAtual();
        colocarDados();
        
    })
    
    }

  PegarDados();
});


