var katzDeliLine = [];

function takeANumber(line, customerName) {
  line.push(customerName);
  return `Welcome, ${customerName}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length > 0) {
    var customerServed = line[0];
    line.shift();
    return `Currently serving ${customerServed}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var lineToString = 'The line is currently:';

    for (var i = 0; i < line.length; i++) {
      lineToString += ` ${i + 1}. ${line[i]}`;
      if (i != line.length - 1) {
        lineToString += ',';
      }
    }

    return lineToString;
  } else {
    return 'The line is currently empty.';
  }
}