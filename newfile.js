function a(x) {
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
