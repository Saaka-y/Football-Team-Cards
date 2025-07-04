const footballTeam = {
  team: "Argentina",
  year: 1990,
  headCoach: "Simon Texas",
  players: [
    {name: "Rei Machenzie",
     position: "forward",
     isCaptain: false},
    {name: "Yuto Kubo",
     position: "midfielder",
     isCaptain: true}, 
    {name: "Sedan Guriot",
     position: "defender",
     isCaptain: false}, 
    {name: "Roy bark",
     position: "goalkeeper",
     isCaptain: false}
    ],
}

const coach = document.getElementById("head-coach");
const team = document.getElementById("team");
const year = document.getElementById("year");
const cardBox = document.getElementById("player-cards");
const playerFilter = document.getElementById("players");

// Dsiplay Team stats
team.innerText = footballTeam.team;
year.innerText = footballTeam.year;
coach.innerText = footballTeam.headCoach;

// Filter player cards
function filterPlayer(playerPosition) {
  const sortedPlayers =
  playerPosition === "all" ?
  footballTeam.players :
  footballTeam.players.filter(player => player.position === playerPosition);

  const newDisplay =
  sortedPlayers.map(({name, position, isCaptain}) => {
    return`
    <div class="player-card">
    <h2>${isCaptain === true ? "(Captain)" : ""} ${name}</h2>
    <p>Position: ${position}</p>
    </div>
    `
  });

  return newDisplay.join("");
}

// Display Players data
playerFilter.addEventListener("change", () => {
  cardBox.innerHTML = filterPlayer(playerFilter.value);
});

