function pseudoLocalization (input) {
  var output = input
  var normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var pseudo = 'αḅͼḍḛϝḡḥḭĵḳḽṃṇṓṗʠṛṡṭṵṽẁẋẏẓḀḂḈḌḚḞḠḤḬĴḰḺṀṄṎṔǪṚṢṪṲṾŴẊŶŻ'
  for (var i = 0; i < normal.length; i++) {
    output = output.replace(normal[i], pseudo[i])
  }
  var expansionFactor = 1.0
  if (output.length < 11) {
    expansionFactor = 3
  } else if (output.length < 21) {
    expansionFactor = 2
  } else if (output.length < 31) {
    expansionFactor = 1.8
  } else if (output.length < 51) {
    expansionFactor = 1.6
  } else if (output.length < 71) {
    expansionFactor = 1.4
  } else {
    expansionFactor = 1.0
  }
  var expansion = '+'.repeat(output.length * expansionFactor - 2)
  output = '[' + output + expansion + ']'
  return output
}

alert(pseudoLocalization('Lorem ipsum dolored sit amed'))
