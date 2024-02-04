function climbingLeaderboard(ranked, player) {
  ranked = Array.from(new Set(ranked));
  let leaderBoard = [];

  let j = ranked.length - 1;
  for (let i = 0; i < player.length; i++) {
    let nb = player[i];
    while (nb >= ranked[j]) {
      j--;
    }
    leaderBoard.push(j+2);
  }
  return leaderBoard;
}

let ranked = [100, 100, 50, 40, 40, 20, 10];
let player = [5, 25, 50, 120];
console.log(climbingLeaderboard(ranked, player));
