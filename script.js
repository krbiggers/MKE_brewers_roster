fetch('data.json')
  .then(response => response.json())
  .then(data => {

    const rosterData = data;
    const mainContainer = document.getElementById("myData");

    function displayRoster(){
      
      for (let i=0; i<data.length;i++){
        var div = document.createElement("div");

        div.innerHTML = rosterData[i].number + ' ' + rosterData[i].firstName + ' ' + rosterData[i].lastName + ' ';
        mainContainer.appendChild(div);
        var more_info = document.createElement("button");
        more_info.innerHTML = 'more info';
        more_info.id = rosterData[i].id;
        more_info.addEventListener('click', () => {
          displayPlayerDetails(rosterData, rosterData[i].id);
        });
        div.appendChild(more_info);
      }
      
    };

    function displayPlayerDetails(data, player_id){
      const player = data.find(p => p.id === player_id);
      var img = document.createElement("img"); 
      img.src = player.picture; 
      img.id = "pic"
      
      var div3 = document.createElement("div");
      div3.innerHTML = player.number + ' ' + player.firstName + ' ' + player.lastName + ' ';

      var div1 = document.createElement("div");
      div1.innerHTML = "Position: " + player.primaryPosition + " Bats: " + player.batSide + " Throws: " + player.throwSide + ' ';
      var div2 = document.createElement("div");
      div2.innerHTML = " Birthplace: " + player.birthCity + " " + player.birthStateProvince + ", " + player.birthCountry;


      var btn = document.createElement("button");
      btn.innerHTML = "Return to full roster";
      btn.addEventListener('click', () => {
        refreshPage();
      });


      mainContainer.innerHTML = "";


      mainContainer.appendChild(img);
      mainContainer.appendChild(div3);

      mainContainer.appendChild(div1);
      mainContainer.appendChild(div2);


      mainContainer.appendChild(btn);

    };



    const refreshPage = () => {
      location.reload();
    }



    displayRoster();
  })

