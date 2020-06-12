export function checkWinner(selected){
    const winners = [
        ['1', '2', '3', '4', '5'],
        ['6', '7', '8', '9', '10'],
        ['11', '12', '13', '14', '15'],
        ['16', '17', '18', '19', '20'],
        ['21', '22', '23', '24', '25'],
        ['1', '6', '11', '16', '21'],
        ['2', '7', '12', '17', '22'],
        ['3', '8', '13', '18', '23'],
        ['4', '9', '14', '19', '24'],
        ['5', '10', '15', '20', '25'],
        ['1', '7', '13', '19', '25'],
        ['5', '9', '13', '17', '21']
    ];

    const possibleWinners = winners.length;

    for (let i = 0; i < possibleWinners; i++) {
      let matches = 0;

      for (var j = 0; j < 5; j++) {
        if (selected.includes(winners[i][j])) {
          matches++;
        }
      }
      if (matches === 5) {
        return true;
      }
    }
}