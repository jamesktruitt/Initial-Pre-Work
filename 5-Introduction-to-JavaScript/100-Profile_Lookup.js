function lookUpProfile(name, prop) {
    // Only change code below this line
    for (var a = 0; a < contacts.length; a++) {
        if (contacts[a].firstName === name) {
            if (contacts[a].hasOwnProperty(prop)) {
                return contacts[a][prop];
            } else {
                return 'No such property';
            }
        }
    }
    return 'No such contact';
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
