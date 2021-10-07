fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
    .then(response => response.json())
    .then(data => console.log(data['data']['Amumu']))