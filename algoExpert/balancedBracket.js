function balancedBrackets(string) {
    const bracketsToRightCategory = [")", "]", "}"];
    const bracketsToLeftCategory = ["(", "[", "{"];
    const mapOfMatchingBrackets = {
        "}": "{",
        "]": "[",
        ")": "("
    };
    let iteratedCollection = [];
    for (let iter = 0; iter < string.length; iter++) {
        if ((bracketsToRightCategory.indexOf(string[iter]) === -1) && 
            (bracketsToLeftCategory.indexOf(string[iter]) === -1)) continue;
        if (bracketsToRightCategory.indexOf(string[iter]) === -1) {
            iteratedCollection.push(string[iter]);
        } else {
            if ((iteratedCollection.length == 0) && (iter < string.length)) {
                return false;
            }
            const lastElt = iteratedCollection.pop();
            const matchingBracket = mapOfMatchingBrackets[string[iter]];
            if (lastElt == matchingBracket) {
                continue;
            } else {
                return false;
            }
        }
    }
    return !iteratedCollection.length > 0;
   
}

exports.balancedBrackets = balancedBrackets;
