function jsonify() {
  var player1 = `
    <br>
    &nbsp;&nbsp; "${document.getElementById('player1').value}": { <br>
    &nbsp;&nbsp;&nbsp "city": "${document.getElementById('city1').value}", <br>
    &nbsp;&nbsp;&nbsp  "side": "${document.getElementById('side1').value}", <br>
    &nbsp;&nbsp;&nbsp  "military": ${document.getElementById('military1').value}, <br>
    &nbsp;&nbsp;&nbsp  "gold": ${document.getElementById('gold1').value}, <br>
    &nbsp;&nbsp;&nbsp  "wonder": ${document.getElementById('wonder1').value}, <br>
    &nbsp;&nbsp;&nbsp  "civic": ${document.getElementById('civic1').value}, <br>
    &nbsp;&nbsp;&nbsp  "commercial": ${document.getElementById('commercial1').value}, <br>
    &nbsp;&nbsp;&nbsp  "guild": ${document.getElementById('guild1').value}, <br>
    &nbsp;&nbsp;&nbsp  "science": ${document.getElementById('science1').value}, <br>
    &nbsp;&nbsp;&nbsp  "total": ${document.getElementById('total1').value} <br>
    &nbsp;&nbsp; } <br>
  `

  var player2 = `
    <br>
    &nbsp;&nbsp; "${document.getElementById('player2').value}": { <br>
    &nbsp;&nbsp;&nbsp "city": "${document.getElementById('city2').value}", <br>
    &nbsp;&nbsp;&nbsp  "side": "${document.getElementById('side2').value}", <br>
    &nbsp;&nbsp;&nbsp  "military": ${document.getElementById('military2').value}, <br>
    &nbsp;&nbsp;&nbsp  "gold": ${document.getElementById('gold2').value}, <br>
    &nbsp;&nbsp;&nbsp  "wonder": ${document.getElementById('wonder2').value}, <br>
    &nbsp;&nbsp;&nbsp  "civic": ${document.getElementById('civic2').value}, <br>
    &nbsp;&nbsp;&nbsp  "commercial": ${document.getElementById('commercial2').value}, <br>
    &nbsp;&nbsp;&nbsp  "guild": ${document.getElementById('guild2').value}, <br>
    &nbsp;&nbsp;&nbsp  "science": ${document.getElementById('science2').value}, <br>
    &nbsp;&nbsp;&nbsp  "total": ${document.getElementById('total2').value} <br>
    &nbsp;&nbsp; } <br>
  `

  var player3 = `
    <br>
    &nbsp;&nbsp; "${document.getElementById('player3').value}": { <br>
    &nbsp;&nbsp;&nbsp "city": "${document.getElementById('city3').value}", <br>
    &nbsp;&nbsp;&nbsp  "side": "${document.getElementById('side3').value}", <br>
    &nbsp;&nbsp;&nbsp  "military": ${document.getElementById('military3').value}, <br>
    &nbsp;&nbsp;&nbsp  "gold": ${document.getElementById('gold3').value}, <br>
    &nbsp;&nbsp;&nbsp  "wonder": ${document.getElementById('wonder3').value}, <br>
    &nbsp;&nbsp;&nbsp  "civic": ${document.getElementById('civic3').value}, <br>
    &nbsp;&nbsp;&nbsp  "commercial": ${document.getElementById('commercial3').value}, <br>
    &nbsp;&nbsp;&nbsp  "guild": ${document.getElementById('guild3').value}, <br>
    &nbsp;&nbsp;&nbsp  "science": ${document.getElementById('science3').value}, <br>
    &nbsp;&nbsp;&nbsp  "total": ${document.getElementById('total3').value} <br>
    &nbsp;&nbsp; } <br>
  `

  var player4 = `
    <br>
    &nbsp;&nbsp; "${document.getElementById('player4').value}": { <br>
    &nbsp;&nbsp;&nbsp "city": "${document.getElementById('city4').value}", <br>
    &nbsp;&nbsp;&nbsp  "side": "${document.getElementById('side4').value}", <br>
    &nbsp;&nbsp;&nbsp  "military": ${document.getElementById('military4').value}, <br>
    &nbsp;&nbsp;&nbsp  "gold": ${document.getElementById('gold4').value}, <br>
    &nbsp;&nbsp;&nbsp  "wonder": ${document.getElementById('wonder4').value}, <br>
    &nbsp;&nbsp;&nbsp  "civic": ${document.getElementById('civic4').value}, <br>
    &nbsp;&nbsp;&nbsp  "commercial": ${document.getElementById('commercial4').value}, <br>
    &nbsp;&nbsp;&nbsp  "guild": ${document.getElementById('guild4').value}, <br>
    &nbsp;&nbsp;&nbsp  "science": ${document.getElementById('science4').value}, <br>
    &nbsp;&nbsp;&nbsp  "total": ${document.getElementById('total4').value} <br>
    &nbsp;&nbsp; } <br>
  `

  var player5 = `
    <br>
    &nbsp;&nbsp; "${document.getElementById('player5').value}": { <br>
    &nbsp;&nbsp;&nbsp "city": "${document.getElementById('city5').value}", <br>
    &nbsp;&nbsp;&nbsp  "side": "${document.getElementById('side5').value}", <br>
    &nbsp;&nbsp;&nbsp  "military": ${document.getElementById('military5').value}, <br>
    &nbsp;&nbsp;&nbsp  "gold": ${document.getElementById('gold5').value}, <br>
    &nbsp;&nbsp;&nbsp  "wonder": ${document.getElementById('wonder5').value}, <br>
    &nbsp;&nbsp;&nbsp  "civic": ${document.getElementById('civic5').value}, <br>
    &nbsp;&nbsp;&nbsp  "commercial": ${document.getElementById('commercial5').value}, <br>
    &nbsp;&nbsp;&nbsp  "guild": ${document.getElementById('guild5').value}, <br>
    &nbsp;&nbsp;&nbsp  "science": ${document.getElementById('science5').value}, <br>
    &nbsp;&nbsp;&nbsp  "total": ${document.getElementById('total5').value} <br>
    &nbsp;&nbsp; } <br>
  `

  var player6 = `
    <br>
    &nbsp;&nbsp; "${document.getElementById('player6').value}": { <br>
    &nbsp;&nbsp;&nbsp "city": "${document.getElementById('city6').value}", <br>
    &nbsp;&nbsp;&nbsp  "side": "${document.getElementById('side6').value}", <br>
    &nbsp;&nbsp;&nbsp  "military": ${document.getElementById('military6').value}, <br>
    &nbsp;&nbsp;&nbsp  "gold": ${document.getElementById('gold6').value}, <br>
    &nbsp;&nbsp;&nbsp  "wonder": ${document.getElementById('wonder6').value}, <br>
    &nbsp;&nbsp;&nbsp  "civic": ${document.getElementById('civic6').value}, <br>
    &nbsp;&nbsp;&nbsp  "commercial": ${document.getElementById('commercial6').value}, <br>
    &nbsp;&nbsp;&nbsp  "guild": ${document.getElementById('guild6').value}, <br>
    &nbsp;&nbsp;&nbsp  "science": ${document.getElementById('science6').value}, <br>
    &nbsp;&nbsp;&nbsp  "total": ${document.getElementById('total6').value} <br>
    &nbsp;&nbsp; } <br>
  `

  var player7 = `
    <br>
    &nbsp;&nbsp; "${document.getElementById('player7').value}": { <br>
    &nbsp;&nbsp;&nbsp "city": "${document.getElementById('city7').value}", <br>
    &nbsp;&nbsp;&nbsp  "side": "${document.getElementById('side7').value}", <br>
    &nbsp;&nbsp;&nbsp  "military": ${document.getElementById('military7').value}, <br>
    &nbsp;&nbsp;&nbsp  "gold": ${document.getElementById('gold7').value}, <br>
    &nbsp;&nbsp;&nbsp  "wonder": ${document.getElementById('wonder7').value}, <br>
    &nbsp;&nbsp;&nbsp  "civic": ${document.getElementById('civic7').value}, <br>
    &nbsp;&nbsp;&nbsp  "commercial": ${document.getElementById('commercial7').value}, <br>
    &nbsp;&nbsp;&nbsp  "guild": ${document.getElementById('guild7').value}, <br>
    &nbsp;&nbsp;&nbsp  "science": ${document.getElementById('science7').value}, <br>
    &nbsp;&nbsp;&nbsp  "total": ${document.getElementById('total7').value} <br>
    &nbsp;&nbsp; } <br>
  `

  var jsonWindow = window.open("", "MsgWindow", "width=400, height=600");
  jsonWindow.document.write(`
    { <br>
      &nbsp; "gameNumber": "${document.getElementById('gameNumber').value}", <br>
      &nbsp; "date": "${document.getElementById('date').value}", <br>
      &nbsp; "location": "${document.getElementById('location').value}", <br>
      &nbsp; "scores": {${player1}, ${player2}, ${player3}, ${player4}, ${player5}, ${player6}, ${player7}
      &nbsp; } <br>
    }
  `);
}
