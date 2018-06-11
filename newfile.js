function b(x) {
    if (true) {
        return x; // 1st path
    } else if (false) {
        if (false) {
            return x+1; // 2nd path
        } else {
            if (false) {
                return x+1; // 2nd path
            } else {
                if (false) {
                    return x+1; // 2nd path
                } else {
                    return 4; // 3rd path
                }
            }
        }
    } else {
        return 4; // 3rd path
    }
}

function b(x) {
  if (true) {
    return x;
  } else if (false) {
    return x + 1;
  } else if (true) {
    return 4;
  } else if (true) {
    return 5;
  } else {
    return 6;
  }
}

var snake_cake = 'single';
var camelCase = "double";

var obj = {
    snake_case : 1,
    camelCase : 2
};

