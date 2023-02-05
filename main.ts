
// set up functions

// setting up the finction for the store
function store () {
    story.showPlayerChoices("Change Background", "Add life (6 Points)", "Veiw high scores", "Back to game")
    if (story.getLastAnswer() == "Change Background") {
        story.showPlayerChoices("Home screne (2 points)","Citty (4 Points)", "Dino Dig (12 Points)", "Back")
        if (story.getLastAnswer() == "Citty (4 Points)") {
            if (info.score() >= 4) {
                scene.setBackgroundImage(img`
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999
                    9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999
                    9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999999999
                    9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999999999
                    9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999
                    9999999999999999111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999
                    9999999999999999111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999
                    9999999999999999911111111111111111119991199999999999999999999999999999999999999999999999999999999991111111111111111111999119999999999999999999999999999999999999
                    9999999999999111191111111111111111119911111999999999999999999999999999999999999999999999999999911119111111111111111111991111199999999999999999999999999999999999
                    9999999999991111119111111111111111199911111999999999999999999999999999999999999999999999999999111111911111111111111119991111199999999999999999999999999999999999
                    9999999999991111111111111111111111911111111199999999999999999999999999999999999999999999999999111111111111111111111191111111119999999999999999999999999999999999
                    9999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999
                    9999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999
                    9911199991111911111111111111111111111111111991199999999999991111999999999999999999991119999111191111111111111111111111111111199119999999999999111199999999999999
                    9111119911111111111111111111111111111111111911119999999999911111199999999999999999911111991111111111111111111111111111111111191111999999999991111119999999999999
                    9111119111111111111111111111111111111111111911119999999999911111191119999999999999911111911111111111111111111111111111111111191111999999999991111119111999999999
                    9911111111111111111111111111111111111111111111119999999999999111111111999999999999991111111111111111111111111111111111111111111111999999999999911111111199999999
                    9111111111111111111111111111111111111111111111199999999911119111111111999999999999911111111111111111111111111111111111111111111119999999991111911111111199999999
                    1111111111111111111111111111111111111111111111119999999111111111111119999999999199111111111dd1111111111111111111111111111111111111999999911111111111111999999999
                    1111111111111111111111111111111111111111111111111911199111111111111111111999999ddd111111111ddd111111111111111111111111111111111111191119911111111111111111199999
                    1111111111111111111111111111111111111111111111111111111111111111111111111199991ddd111111111ddd111111111111111111111111111111111111111111111111111111111111119999
                    11111111111111111111111111111111111111111111111111111111111111111111111111999ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111119999
                    11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
                    11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
                    1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
                    111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
                    11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
                    11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
                    11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
                    11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
                    d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
                    dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
                    dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
                    dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
                    dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
                    ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
                    ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
                    ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
                    ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
                    dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
                    dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
                    dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
                    dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
                    dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
                    dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
                    dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
                    dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
                    dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
                    dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
                    dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
                    dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
                    bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbb
                    bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7
                    bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77
                    bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777b
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                `)
            } else {
                story.printText("Not enough points!", 0, 0)
            }
        } else if (story.getLastAnswer() == "Dino Dig (12 Points)") {
            if (info.score() >= 12) {
                scene.setBackgroundImage(img`
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                    9999999999999999999999999999999999999669999999999999999999999999999999999999966999999999999999999999999999999999999996699999999999999999999999999999999999999669
                    9999999999999999999999999999999999999669999999999999999999999999999999999999966999999999999999999999999999999999999996699999999999999999999999999999999999999669
                    9999999999999999999999999999999999999676999999999999999999999999999999999999967699999999999999999999999999999999999996769999999999999999999999999999999999999676
                    9999999999966999999999999999999999999676999999999996699999999999999999999999967699999999999669999999999999999999999996769999999999966999999999999999999999999676
                    9999999999967699999999999999999996699676999999999996769999999999999999999669967699999999999676999999999999999999966996769999999999967699999999999999999996699676
                    9996996669996769999966999999996696769676999699666999676999996699999999669676967699969966699967699999669999999966967696769996996669996769999966999999996696769676
                    9966999676996776999676966999967696769676996699967699677699967696699996769676967699669996769967769996769669999676967696769966999676996776999676966999967696769676
                    6676999967699676999676667699677696776677667699996769967699967666769967769677667766769999676996769996766676996776967766776676999967699676999676667699677696776677
                    6676669996769677696776667769676696676677667666999676967769677666776967669667667766766699967696776967766677696766966766776676669996769677696776667769676696676677
                    6776769996776667696766666766776666677677677676999677666769676666676677666667767767767699967766676967666667667766666776776776769996776667696766666766776666677677
                    6766776996667767667766666776766666677677676677699666776766776666677676666667767767667769966677676677666667767666666776776766776996667767667766666776766666677677
                    7766676966677667667667766676766776667677776667696667766766766776667676677666767777666769666776676676677666767667766676777766676966677667667667766676766776667677
                    7766677666776667777666776677767766667777776667766677666777766677667776776666777777666776667766677776667766777677666677777766677666776667777666776677767766667777
                    7666667666776767777666676677667666767777766666766677676777766667667766766676777776666676667767677776666766776676667677777666667666776767777666676677667666767777
                    7667667767766777776677677677677667766777766766776776677777667767767767766776677776676677677667777766776776776776677667777667667767766777776677677677677667766777
                    7667767767766777776776667677677667666777766776776776677777677666767767766766677776677677677667777767766676776776676667777667767767766777776776667677677667666777
                    7666767767666777676766667b776776b766677b7666767767666777676766667b776776b766677b7666767767666777676766667b776776b766677b7666767767666777676766667b776776b7666777
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbebbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbebbbbbbbbbb
                    bbbeeeeebbbbbbbbbbbebbbeeeebbbbbbbbebbbbbbbeeeeebbbbbbbbbbbebbbeeeebbbbbbbbebbbbbbbeeeeebbbbbbbbbbbebbbeeeebbbbbbbbebbbbbbbeeeeebbbbbbbbbbbebbbeeeebbbbbbbbebbbb
                    beeeebeeeebbbbeebbbbbeeeeeeeebbeebbbbbebbeeeebeeeebbbbeebbbbbeeeeeeeebbeebbbbbebbeeeebeeeebbbbeebbbbbeeeeeeeebbeebbbbbebbeeeebeeeebbbbeebbbbbeeeeeeeebbeebbbbbeb
                    eeeeeeeeeeebbbeebbbbeebeeeeeeebeebbbbbbbeeeeeeeeeeebbbeebbbbeebeeeeeeebeebbbbbbbeeeeeeeeeeebbbeebbbbeebeeeeeeebeebbbbbbbeeeeeeeeeeebbbeebbbbeebeeeeeeebeebbbbbbb
                    ebbeeeeeeeeebbbbbbbeeeeeeeeeeeebbbbbbbbeebbeeeeeeeeebbbbbbbeeeeeeeeeeeebbbbbbbbeebbeeeeeeeeebbbbbbbeeeeeeeeeeeebbbbbbbbeebbeeeeeeeeebbbbbbbeeeeeeeeeeeebbbbbbbbe
                    ebbeeeeeeeeeeebbbeeeeeeeeeebbeeeebbbbeeeebbeeeeeeeeeeebbbeeeeeeeeeebbeeeebbbbeeeebbeeeeeeeeeeebbbeeeeeeeeeebbeeeebbbbeeeebbeeeeeeeeeeebbbeeeeeeeeeebbeeeebbbbeee
                    eeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeee
                    eeeeeeeeeebbeeeeeebbeeeeeeeeeeebeeeeeebeeeeeeeeeeebbeeeeeebbeeeeeeeeeeebeeeeeebeeeeeeeeeeebbeeeeeebbeeeeeeeeeeebeeeeeebeeeeeeeeeeebbeeeeeebbeeeeeeeeeeebeeeeeebe
                    eeeeeeeeeebbeeeeeebbeeeeeeeeeeeeeebbeeeeeeeeeeeeeebbeeeeeebbeeeeeeeeeeeeeebbeeeeeeeeeeeeeebbeeeeeebbeeeeeeeeeeeeeebbeeeeeeeeeeeeeebbeeeeeebbeeeeeeeeeeeeeebbeeee
                    eeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeebbeeee
                    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeefdbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeffbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdbfeeeeeeeeeeeeeeeeeeee
                    eeeeeeeefddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbddfeeeeeeeeeeeeeeeeeeee
                    eeeeeeeefbdddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddffeeeeeeeeeeeeeeeeeee
                    eeeeeeeeffffbdffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddbffeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeffddfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffddffeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeffbdddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddffeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeffddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddffeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeefddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffdbffffeeeeeeeeeeee
                    eeeeeeeeeeeeeefbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffdddbfeeeeeeeeeeee
                    eeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddfeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbffeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdfeeeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffddddddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeeeeeeeefffddddddddddddffddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeeeeeeeffddddddddffffdddffdddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeeeeeeffdddfffddfffffdddddddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeeeeeffdddfffffdffffddddddbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeeeeffdddffffffddddddddbfdfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeeeefddddfffffdddddddfdffdfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeeeefdddddfffddddfffdffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeeeefdddddddddffffefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeeeeffdddbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeefffffbddddbbffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeefdffefdddddddddffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeeeeeefddfffddddddddddffddddfdfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeeeefffbbdfffdddddddddddddddbdbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeefffddfffffeffddddddddddddddddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeefdbbdddfbfeeffffddddddffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeeefddbbfffdfeeeeeffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeffffdddfefdffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeefbbfffffffddffeeeeffffeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeffbbbfffdbdddffffefddbfffffbdddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeefffffdfdbbdddddfefdddddddbbbbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeffbbbfdbddbbbffffefffffdddbddbfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeefbbfffdbbdddffffffeeeeffffbbbdfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeefffffbddbbdddddddfeeeeeeeffdbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeefbbfdbbddbbfffffffeeeeeeffddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeefbffdbbbdddddddfeeeeeeeefddffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbdddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeffffdddbbfffffffeeeeeeeeffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeeffdffdddfeeeeeeeeeeeeeeeeeeffdffdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeffddffffffeeeeeeeeeeeeeeeeeefddffdffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeefddbffffeeeeeeeeeefffffffeeffddffdbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffbdffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeeeffbbfddfeeeeeeeeeefddbbdffefddfffddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eefeeeeeeeeefdddbbffeeeeeeeeffddbdddfefdffffbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeefddddfeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                    eeeeeeeeeefefffbbddfeeeeeeeefddfffddfffffeffbffeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeefeffbddfeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeee
                    eeefffffeeeeeefdddbffeeffffffddfeffddfffeefdbfffeeeeeeeeeeefeeeffffeeeeeeeefeeeeeeefffffeeeeeefdbfefeeeffffeeeeeeeefeeeeeeefffffeeeeefffffefeeeffffeeeeeeeefeeee
                    effffeffffeeeefdfbbdfffffffbddfffeffdffeeffddfffffeeeeffeeeeeffffffffeeffeeeeefeeffffeffffeeeeffffeeeffffffffeeffeeeeefeeffffeffffeeefbdbfeeeffffffffeeffeeeeefe
                    fffffffffffeeefffbdbffddddffbdfffeefffeefffbdffffffeeeffeeeeffefffffffeffeeeeeeefffffffffffeeeffeeeeffefffffffeffeeeeeeeffffffffffffffdddfeeffefffffffeffeeeeeee
                    feefffffffffeeeefddffbdffddfbbfeeeeeeeefffdbbfffffffeeeeeeeffffffffffffeeeeeeeeffeefffffffffeeeeeeeffffffffffffeeeeeeeeffeefffffffffbdddbffffffffffffffeeeeeeeef
                    feefffffffffffeefffffddfffdefffffeeeeffffbddffffffffffeeeffffffffffeeffffeeeeffffeefffffffffffeeeffffffffffeeffffeeeeffffeefffffffffddddddbffffffffeeffffeeeefff
                    fffffffffffffffffffffdddffdddfffffffffffdbbdfffffffffffffffffffbdbfeeffffffffffffffffffffffffffffffffffffffeefffffffffffffffffffffffbddbddddbfffffffefffffffffff
                    ffffffffffeeffffffeefffddddddffffffffdbddfffffffffeeffffffeefffdddfffffeffffffefffffffffffeeffffffeefffffffffffeffffffefffffffffffeffffffbddddbbddbffffeffffffef
                    ffffffffffeeffffffeefffddddddfffddbbddbdffffffffffeeffffffeefffbdddbffffffeeffffffffffffffeeffffffeeffffffffffffffeeffffffffffffffeefffffffbdddddddfffffffeeffff
                    ffffffffffffffefffffffffdddddffddfbddfffffffffffffffffeffffffbddddddffffffeeffffffffffffffffffefffffffffffffffffffeeffffffffffffffffffefffffffdddddfffffffeeffff
                    fffffffffffffffffffffffffdddfffffffffffffffffffffffffffffffbddddbddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffbddbbddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddfffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffdddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    `)
            }
        // test
        }else if (story.getLastAnswer() == "Home screne (2 points)"){
            
            if (info.score() >= 2){

            scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111155511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111155511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111155511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111155511111111111111111155511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111555511111111111111111155511111111111111111111111111111111111111555111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111555511111111111111111155511111111111111111111111111111111111111555111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111555111111111111111111155511111111111115555555555511111111111111555111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111555111111111111111111555511111111115555555555555555111111111111555111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111115555111111111111111111555511111111115555555555555555111111111115555111111111111111111111115551111111111111111111111111111111111111111111111
    1111111111111111111115555111111111111111111555111111111155555511111155555111111111115555111111111111111111111155551111111111111111111111111111111111111555111111
    1111111111111111111115551111111111111111115555111111111155551111111111555511111111115551111111111111111111111155551111111111111111111111111111111111111555111111
    1111111111111111111115551111111111111111115555111111111155551111111111555511111111155551111111111111111111111155511111111111111111115551111111111111111555111111
    1111111111111111111155555555555555555555555551111111111155511111111111155511111111155551111111111111111111111155511111111111111111155551111111111111111555111111
    1111111111111111111155555555555555555555555551111111111155511111111111155511111111155511111111111111111111111155511111111111111111555555555511111111111555111111
    1111111111111111111155515555555555555555555551111111111155511111111111155511111111155511111111111111111111111555511111111111111111555555555551111111111555111111
    1111111111111111111555511111111111111111155551111111111155555555555555555511111111555511111111111111111111111555511111111111111111555555555555111111111555111111
    1111111111111111111555511111111111111111155511111111111155555555555555555111111111555511111111111111111111111555111111111111111111555111115555511111111555111111
    1111111111111111111555111111111111111111555511111111111155555555555555555111111111555111111111111111111111115555111111111111111115555111111555551111111555111111
    1111111111111111111555111111111111111111555511111111111155511111111111111111111115555111111111111111111111115555111111111111111115555111111155551111111555111111
    1111111111111111115555111111111111111111555111111111111155511111111111111111111115555111111111111111111111115551111111111111111115551111111115555111111555111111
    1111111111111111115555111111111111111111555111111111111155511111111111111111111115551111111111111111111111115551111111111111111115551111111115555511111555111111
    1111111111111111115551111111111111111115555111111111111155511111111111111111111115551111111111111111111111115551111111111111111115551111111111555511111555111111
    1111111111111111115551111111111111111115555111111111111155551111111111111111111155551111111111111111111111155551111111111111111115551111111111155551111555111111
    1111111111111111155551111111111111111115551111111111111155551111111111111111111155551111111111111111111111155551111111111111111115551111111111155551111555111111
    1111111111111111155551111111111111111155551111111111111115555111111111111111111155511111111111111111111111555511111111111111111115551111111111155551111555111111
    1111111111111111155511111111111111111155551111111111111115555555555555111111111555511111111111111111111111555511111111111111111115555111111111155551111555111111
    1111111111111111111111111111111111111155511111177771111111555555555555111111111555511111111111111111111111555111111111111111111115555111111111155511111555111111
    1111111111111111111111111111111111111111111117777771111111555555555555111111111555111111111111111111111111555111111111111111111111555511111111155511111555111111
    1111111111111111111111111111111111111111111117777771111111111111111111111111111555111111111111111111111115555111111111111111111111555551111111155511111555111111
    1111111111111111111111111111111111111111111117777711111111111111111111111111115555551111111111111111111115555551111111111111111111155555111111155511111555111111
    1111111111111111111111111111111111111111111117777777111111111111111111111111115555555555511111111111111115555555555555555511111111115555555555555511111555111111
    1111111111111111111111111111111111111111111117777777777111111111111111111111115555555555555551111111111115555555555555555551111111111555555555555511111555111111
    1111111111111111111111111111111111111111111111117777777771111111111111111111111111555555555555551111111111111555555555555551111111111155555555555511111555111111
    1111111111111111111111111111111111111111111111111177777777771111111111111111111111111115555555551111111111111111111111115551111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111177777777711111111111111111111111111111555551111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111777777777111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111777777777111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111aaaaaaaaa71111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111188888888811111111aaaaaaaaaaaaaaaa771111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111188888888888811111aaaaaaaaaaaaaaaaaa77711111111111111111111111111111111111111111111111111111111111111111111111111555511111111
    111111111111111111111111111111111118888888888888888aaaaaaaaaa11111aaaaaaa777711111111111111111111111111111111111111111111111111111111111111111111111555555111111
    11111111111111111111111111111111118888811111888888aaaaaa111111111111aaaaaa77777111111111111111111111111111111111111111111111111111111111111111111111555555111111
    1111111111111111111111111111111111888811111111888aaaaaa11111111111111aaaaaa7777777111111111111111111111111111111111111111111111111111111111111111111115555111111
    111111111111111111111111111111111888811111111111aaaaa888811111111111111aaaa7777777777111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111188888111111111aaaaaa88888811111111111111aaaa177777777771111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111118888111111111aaaaaa118888888111111111111aaaaa11177777777771111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111888111111111aaaaaa11111888888111111111111aaaaa1111177777777771111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111118881111111aaaaaa11111111888888811111111111aaaaa111111777777777711111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111888811111aaaaaa2222211111188888881111111111aaaaa22222221777777777771111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111188888111aaaaaa222222221111188888881111111111aaaa22222222222777777777777111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111188881122222222222222221111118888881111112222aaa22222222222227777777777777771111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111888aa2222222222122222211111118888811222222222221111222222222222777777777777777111111111111111111111111111111111111111111111111
    11111111111111111111111111111111118222222222222111112fff21111111888822dddddddddd11111111111111122222277777777777777111111111111111111111111111111111111111111111
    11111111111111111111111111111111111222222288888811111fff22211111288882dddddddddd11111111111111111122211111777777777771111111111111111111111111111111111111111111
    1111111111111111111111111111111111222222228888888811ffff22221122288888dddddddddd11111111111111111222211111111177777777711111111111111111111111111111111111111111
    1111111111111111111111111111112222222aa7888888888888ffff222222222288888111111dddd1111111111111112222211111111111177777777111111111888888111111111111111111111111
    1111111111111111111111111112222222222aa7111111888888fff8122222222218888811111dddd1111111111111122222111111111111111777777771118888888888881111111111111111111111
    111111111111111222211111222222222222aaa7111111118888fff82222222211118888111111ddd1111111111111222221aaaaaaaaaaaaaaaaaa777777888888888888888111111111111111111111
    111111111111111222222222222222221111aaa7711111111118fff82222222211111888811111ddd1111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa7788888888881188888811111111111111111111
    111111111111111222288822222221111111aaa7711111111111fff22228222221111888881111ddd111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa888888871111111888811111111111111111111
    111111111111111112288882221111111111aaa777111111111ffff22228822222111188881111ddd11aaaaaaaaaaaaaaaaaaa88888888888111aaaaaa88887777711111188881111111111111111111
    111111111111111111188888111111111111aaa777711111111ffff22288888222221118888111ddd1aaaaa1111222211118888881111711111111aaaaaa177777771111188881111111111111111111
    111111111111111111118888811111111111aaa777711111111fff222188888882222118888811dddaaaaa111122221111888888111171111111188aaaaaa11777777711118881111111111111111111
    111111111111111111111888881111111111aaa177771111111fff221118888888222211888811ddddaaa11112222211888888111117111111118888aaaaaa1117777771118881111111111111111111
    111111111111111111111188888111111111aaa177777111111fff221111188888822227788887ddddaa11112222211888888117777111111118888811aaaaaa11777777788881111111111111111111
    111111111111111111111118888811111111aaaa17777711111fff21177777188882222218888adddda1111222221888888877711111111111188881111aaaaaa1117777788881111111111111111111
    111111111111111111111111888881111111aaaaa1777771111ffff771111111888122222288888ddd777722222788888811111111111111118888111111aaaaa1117777888811111111111111111111
    1111111111111111111111111888881111111aaaa1177771777fffff2111111188811222222888dddd11122222788888811111111111111118888811111111aaa1177777888811111111111111111111
    11111111111111111111111111888881111111aaaa117777111fffff221111118881112222a888dddd12222221188881111111111111111188888111111111aaa1177778888111111111111111111111
    11111111111111111111111111188888111111aaaaa1777771111fff222111118881111122aaaddddd8222221118881111111111111111118888111111111aaaa1777718888111111111111111111111
    111111111111111111111111111188888111111aaaa1177777111ffff2222111888111111aaaadddd88882211118881111111111111111118881111111111aaaa7777788881111111111111111111111
    1111111111111111111111111111188888ddddddaaaa777777711ffffff222118881111aaaaaadddd8888881111888111111111111111111888111111111aaaa77777888881111111111111111111111
    111111111111111111111111111111ddddddddddaaaaaddddddd1ffffffff222888aaaaaaaaadddd88888888811888111111111111111111888111111111aaaa77778888811111111111111111111111
    111111111111111111777777777ddddddddddddddaaaaadddddddddffffffffaaaaaaaaaaaadddddd888888888888811111111111111111188811111111aaaa777718888111111111111111111111111
    111111111111111111711111dddddddddddd8888ddaaaaaadddddddddfffaaaaaaaaaaaaadddddd222d1188888888811111111111111111888811111111aaaa777188881111111111111111111111111
    11111111111111117711dddddddddddd7888888888aaaaaaaaddddddaaaaaaaaaaaaaddddddddd222221111888888888111111111111111888811111111aa77771888881111111111111111111111111
    111111111111111711ddddddddddd111177788888888aaaaaaaaaaaaaaaaaaaaaffffffddddddd22222111111188888888111111111111188811111111aa777788888811111111111111111111111111
    11111111111117711ddddddddd1111111111111188888aaaaaaaaaaaaaaaaa188fffffff2222222222221111111888888888811111111118881111111aa7777788888111111111111111111111111111
    1111111111177111dddddd1111111111111111111111888aaaaaaaaaaa817888888ffffff2221222222211111118888888888881111111188811111aaa77777788881111111111111111111111111111
    111111111171111ddddd11111111111111111111111111111aaaaaaaaaa8888888822ffffff111112222211111188881888888888811118888111aaaaa77777888111111111111111111111111111111
    11111111171111ddddd11111111111111111111111111111111aaaaaaaaaaaa8822222ffffff7711122221111118888811188888888881888aaaaaaaa777778881111111111111111111111111111111
    1111111171111ddddd11111111111111111111111111111111111aaaaaaaaaaaaaaaaaaafffff17777222211111188888111188888888aaaaaaaaaaa7777788811111111111111111111111111111111
    111111111111ddddd1111111111111111111111111111111111111111aaaaaaaaaaaaaaaaaaaaaaaaaaaa27777777888811111118aaaaaaaaaaaaaa87777881111111111111111111111111111111111
    11111111111ddddd111111111111111111111111111111111111111112777aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa888877777811111111111111111111111111111111111
    1111111111ddddd1111111111111111111111111111111111111111222277777711111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa8888887777771111111111111111111111111111111111111
    111111111ddddd1111ddd1111111111111111111111111111111122222227777771111111111fffffffaaaaaaaaaaaaaaaaaaaaaaaa11188888887777771111111111111111111111111111111111111
    11111111ddddd11111dddd11111111111111111111111111122222222222117777711111111111fffffff221111111111888888888888888811177777711111111111111111111111111111111111111
    11111111dddd111111ddddd111111111111111111111112222222222221111177777111111111111ffffff21111111111111888888888888888877711111111111111111111111111111111111111111
    1111111dddd11111111ddddd111111111111111111122222222222221111111177777111111111111fffff21111111111111111888888888888888888811111111111111111111111111111111111111
    1111111dddd111111111dddd11111111111111111222222222222221111111111777777111111111111fff21111111111111111111118888888888888888888811111111111111111111111111111111
    1111111ddd11111111111dddd111111111111112222222222222211111111111117777771111111111112221111111111111111111111111888888888888888888881111111111111111111111111111
    1111111ddd11111111111ddddd11111111112222222222222221111111111111111777777111111111112221111111111111111111111111788888118888888888888811111111111111111111111111
    1111111ddd111111111111dddddddd1111222222222222222211111111111111111117777711111111112221111111111111111111111117778888811111118888888881111111111111111111111111
    1111111dddd111111111111ddddddddddd222222222222221111111111111111111111777777111111112221111111111111111111111177777888881111111111888881111111111111111111111111
    1111111dddd1111111111111dddddddddddddd22222222111111111111111111111111177777771111112222111111111111111111111177771188888111111111188881111111111111111111111111
    11111111ddd11111dddddddddddddddddddddddd11111111111111111dddd111111111117777777711112222111111111111111111111777711118888881111111888881111111111111111111111111
    11111111ddd1dddddddddddddddddddddddddddd11111111111111ddddddd111111111111177777777111222111111111111111111117777711111888888888888888811111111111111111111111111
    11111111ddddddddddddddddddddddddddddddddd1111111111dddddddddd111111111111111777777771111111111111111111111117777111111188888888888888111111111111111111111111111
    11111111dddddddddd111111111dddddddddddddd1111111ddddddddddd11111111111111111117777777711111111111111111111117771111111111888888888881111111111111111111111111111
    111111111ddddd11111111111111111111111dddd11111dddddddddd11111111111111111111111177777777111111111111111111117771111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111dddddddddd11111111111111111111111111111777777777711111111111111777771111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111dddddddddd11111111111111111111111111111111117777777777777111777777777771111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111dddddddddd1111111111111111111111111111111111111177777777777777777777777771111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111ddddddd1111111111111111111111111111111111111111111117777777777777777771111111111111111111111111111111111111111111111111111
            `)
            } else {
                story.printText("Not enough points!",0,0)
            }
        } else {
            store()
        }
    } else if (story.getLastAnswer() == "Add life (6 Points)") {
        if (info.score() >= 6) {
            info.changeScoreBy(-6)
            lives = lives + 1
            story.printText("Life added", 0, 0)
            store()
        } else {
            game.splash("Not enough points!")
            store()
        }
    } else if (story.getLastAnswer() == "Veiw high scores") {
        story.printText("No high scores yet", 0, 0)
        game.splash("report high scores to the update email chain with a screenshot of the high score")
        store()
    } else if (story.getLastAnswer() == "Back to game") {

        if (questionNumber == 3) {
            question4()
        } else if (questionNumber == 7) {
            q8()
        } else if ( questionNumber == 13) {
            q14()
        }
    }
}


// level functions

function q17() {
    if (story.getLastAnswer() == "old enough to be old") {
        questionNumber = 17
        info.changeScoreBy(1)
        story.printText("true or false", 40, 0)
        story.showPlayerChoices("true", "false")
    } else {
        l()
    }
}

function q16 () {
    if (story.getLastAnswer() == "Get soap") {
    questionNumber = 16
    info.changeScoreBy(1)
    story.printText("How old is time?", 60, 0)
    story.showPlayerChoices("As old as yo mama", "As old as your watch", "42 years old", "old enough to be old")
    q17()
} else {
    l()
}
}

function q15(){
    if (story.getLastAnswer() == "Woman's enemy" || devAns == 15){
        questionNumber = 15
        info.changeScoreBy(1)
        story.printText("How do you clean a fish?",60,0)
        story.showPlayerChoices("Get soap","Cut it open","Throw it back in the watter")
        q16()
    } else {
        l()
    }
}

function q14(){
        questionNumber = 14
        info.changeScoreBy(1)
        story.printText("Dog",0,0)
        story.showPlayerChoices("Foot","Animal","Pet","Woman's enemy")
        q15()
}

function q13(){
    if (story.getLastAnswer() == "Yes Mythbusters prooved it!" || devAns == 13){
        questionNumber = 13
        info.changeScoreBy(1)
        story.printText("How many days are in summer vacation?",40,0)
        story.showPlayerChoices("132","296","84","104")
        if (story.getLastAnswer() == "104"){
            story.showPlayerChoices("Go to store","Continue")
            if (story.getLastAnswer() == "Go to store") {
                store()
            } else {
                q14()
            }
        } else {
            l()
        }
    } 
}

function q12() {
    if (story.getLastAnswer() == "The Skuze" || devAns == 12){
        questionNumber = 12
        info.changeScoreBy(1)
        story.printText("Are Eliphants afraid of mice?",40,0)
        story.showPlayerChoices("No","Yes Mythbusters prooved it!","No, thats a myth!","Yes Dumbo prooved it!")
        q13()
    } else {
        l()
    }
}

function q11(){
    if (story.getLastAnswer() == "Deserves respect" || devAns == 11){
        questionNumber = 11
        info.changeScoreBy(1)
        story.printText("A speific manstion in Larkspur is owned by who?",40,0)
        story.showPlayerChoices("Elon Musk","Ronald Smith","Bruce Wayne","The Skuze")
        q12()
    } else {
         l()
    }
}

function q10() {
    if (story.getLastAnswer() == "Nothing" || devAns == 10) {
        questionNumber = 10
        info.changeScoreBy(1)
        story.printText("Roblox",0,0)
        story.showPlayerChoices("Deserves respect","Is a kids game","Is old news")
        q11()
    } else {
        l()
    }
}

function q9() {
    if (story.getLastAnswer() == "2" || devAns == 9){
        questionNumber = 9
        info.changeScoreBy(1)
        story.printText("the answer to life is...",60,60)
        story.showPlayerChoices("42","Everything","Nothing","A deeper meaning thatn we can comprehend")
        q10()
   } else {
       l()
   } 
}

// question 8
function q8() {
    if (story.getLastAnswer() == "Forget the bird feeder" || lastAns == "Forget the bird feeder" || devAns == 8) {
        if (lastAns == "Forget the bird feeder" || devAns == 8) {
                questionNumber = 8
            info.changeScoreBy(1)
            game.splash("how many Liams have been in the American Acadamy class of 2023?(k-8th grade)(the current 8Th grade class as of 9/24/22)")
            story.showPlayerChoices("1", "2", "3", "Liams?")
            q9()
                   } else {
            lastAns = "Forget the bird feeder"
            story.showPlayerChoices("Go to store", "Continue with game")
            pause(100)
            if (story.getLastAnswer() == "Go to store") {
                store()
            } else  {
                q8()
            }
        }
    } else {
        l()
    }
}

// question 7
function q7() {
    if (story.getLastAnswer() == "When you have tator tots in your poket" || devAns == 7) {

            questionNumber = 7
        
        info.changeScoreBy(1)
        story.printText("How do you kill two birds?",60,0)
        story.showPlayerChoices("Get the Shoty", "With one stone", "Forget the bird feeder")
        q8()
    } else {
        l()
    }
}

// seting up question 6
function q6 () {
    if (story.getLastAnswer() == "Inside joke" || devAns == 6) {

            questionNumber = 6
        
        info.changeScoreBy(1)
        story.printText("When do you eat?", 0, 0)
        story.showPlayerChoices("Paint", "Lunch time", "When you have tator tots in your poket")
        q7()
    } else {
        l()
    }
}

// setting up question 5
function q5 () {
    if (story.getLastAnswer() == "red" || devAns == 5) {

            questionNumber = 5
        
        info.changeScoreBy(1)
        story.printText("Mc.Cream", 0, 0)
        story.showPlayerChoices("Milk", "Inside joke", "Last name", "PORATER!!!")
        q6()
    } else {
        l()
    }
}

// set up question 4
function question4 () {


        questionNumber = 4
    
    info.changeScoreBy(1)
    game.splash("what color is Max's shirt?")
    story.showPlayerChoices("green", "red", "blue", "Purpule")
    q5()
}



// practical functions


// string to number and question
function stnq (sting: string, chngvar: number, ques: any) {
    
    sting = story.getLastAnswer()

    if (sting == "1") {
        chngvar = 1
    } else if (sting == "2"){
        chngvar = 2
    } else if (sting == "3") {
        chngvar = 3
    } else if (sting == "4") {
        chngvar = 4
        ques = question4()
    } else if (sting == "5") {
        chngvar = 5
        ques = q5()
    } else if (sting == "6") {
        chngvar = 6
        ques = q6()
    } else if (sting == "7") {
        chngvar = 7
        ques = q7()
    } else if (sting == "8") {
        chngvar = 8
        ques = q8()
    } else if (sting == "9") {
        chngvar = 9
        ques = q9()
    } else if (sting == "10") {
        chngvar = 10
        ques = q10()
    } else if (sting == "11") {
        chngvar = 11
        ques = q11()
    } else if (sting == "12") {
        chngvar = 12
        ques = q12()
    } else if (sting == "13") {
        chngvar = 13
        ques = q13()
    } else if (sting == "14") {
        chngvar = 14
        ques = q14()
    } else if (sting == "15") {
        chngvar = 15
        ques = q15()
    } else if (sting == "16"){    
        chngvar = 16
  //         ques = q16
    } else if (sting == "17") {
        chngvar = 17
      //    ques = q17
    } else if (sting == "18") {
        chngvar = 18
            //ques = q18
    } else if (sting == "19") {
        chngvar = 19
         //ques = q19
    } else if (sting == "20") {
        chngvar = 20
            //ques = q20
    } else if (sting == "21") {
        chngvar = 21
            //ques = q21
    } else if (sting == "22") {
        chngvar = 22
            //ques = q22
    } else if (sting == "23") {
        chngvar = 23
            //ques = q23
    } else if (sting == "24") {
        chngvar = 24
            //ques = q24
    } else if (sting == "25") {
        chngvar = 25
            //ques = q25
     }
}

// loose function
function l () {
    if (lives >= 2) {
        story.printText("Wrong!", 0, 0)
        story.printText("-1 life", 0, 0)
        lives = lives - 1
        reset()
    } else {
        story.printText("Bye", 0, 0)
        game.over(false)
    }
}

// reset level finction sends you back to the level you were on
function reset () {
    if (questionNumber == 4) {
        question4()
    } else if (questionNumber == 5) {
        q5()
    } else if (questionNumber == 7) {
        q7()
    } else if (questionNumber == 8) {
        q8()
    } else if (questionNumber == 9) {
    	q9()
    } else if (questionNumber == 10) {
    	q10()
    } else if (questionNumber == 11) {
    	q11()
    } else if (questionNumber == 12) {
    	q12()
    } else if (questionNumber == 13) {
    	q13()
    } else if (questionNumber == 14) {
    	q14()
    } else if (questionNumber == 15) {
    	q15()
    } else if (questionNumber == 16) {
    	//q16
    }
}




// system variables
let lastAns = "" // a variable to hold an internaly saved last answer
let questionNumber = 0 // a variable to hod the current question number
let lives = 1 // a variable to hold the number of lives the player has
let devOutQ = "" // a variable to hold the peramater of a function recived through the "dev skip"
let devAns: any = null // a variable to hold what the dev's last anser was in the admin console
let codeidentfyr = true


// start

// set up the dev console sighn in system
if (!(blockSettings.readString("isSighndInToDev"))) {
    blockSettings.writeString("isSighndInToDev", "false")
}



// set up the verstion label
let verstion = textsprite.create("1.1") 
verstion.setPosition(135,5)
verstion.setOutline(2, 6)

// set the bacground to the welcome screne
scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111155511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111155511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111155511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111155511111111111111111155511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111555511111111111111111155511111111111111111111111111111111111111555111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111555511111111111111111155511111111111111111111111111111111111111555111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111555111111111111111111155511111111111115555555555511111111111111555111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111555111111111111111111555511111111115555555555555555111111111111555111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111115555111111111111111111555511111111115555555555555555111111111115555111111111111111111111115551111111111111111111111111111111111111111111111
    1111111111111111111115555111111111111111111555111111111155555511111155555111111111115555111111111111111111111155551111111111111111111111111111111111111555111111
    1111111111111111111115551111111111111111115555111111111155551111111111555511111111115551111111111111111111111155551111111111111111111111111111111111111555111111
    1111111111111111111115551111111111111111115555111111111155551111111111555511111111155551111111111111111111111155511111111111111111115551111111111111111555111111
    1111111111111111111155555555555555555555555551111111111155511111111111155511111111155551111111111111111111111155511111111111111111155551111111111111111555111111
    1111111111111111111155555555555555555555555551111111111155511111111111155511111111155511111111111111111111111155511111111111111111555555555511111111111555111111
    1111111111111111111155515555555555555555555551111111111155511111111111155511111111155511111111111111111111111555511111111111111111555555555551111111111555111111
    1111111111111111111555511111111111111111155551111111111155555555555555555511111111555511111111111111111111111555511111111111111111555555555555111111111555111111
    1111111111111111111555511111111111111111155511111111111155555555555555555111111111555511111111111111111111111555111111111111111111555111115555511111111555111111
    1111111111111111111555111111111111111111555511111111111155555555555555555111111111555111111111111111111111115555111111111111111115555111111555551111111555111111
    1111111111111111111555111111111111111111555511111111111155511111111111111111111115555111111111111111111111115555111111111111111115555111111155551111111555111111
    1111111111111111115555111111111111111111555111111111111155511111111111111111111115555111111111111111111111115551111111111111111115551111111115555111111555111111
    1111111111111111115555111111111111111111555111111111111155511111111111111111111115551111111111111111111111115551111111111111111115551111111115555511111555111111
    1111111111111111115551111111111111111115555111111111111155511111111111111111111115551111111111111111111111115551111111111111111115551111111111555511111555111111
    1111111111111111115551111111111111111115555111111111111155551111111111111111111155551111111111111111111111155551111111111111111115551111111111155551111555111111
    1111111111111111155551111111111111111115551111111111111155551111111111111111111155551111111111111111111111155551111111111111111115551111111111155551111555111111
    1111111111111111155551111111111111111155551111111111111115555111111111111111111155511111111111111111111111555511111111111111111115551111111111155551111555111111
    1111111111111111155511111111111111111155551111111111111115555555555555111111111555511111111111111111111111555511111111111111111115555111111111155551111555111111
    1111111111111111111111111111111111111155511111177771111111555555555555111111111555511111111111111111111111555111111111111111111115555111111111155511111555111111
    1111111111111111111111111111111111111111111117777771111111555555555555111111111555111111111111111111111111555111111111111111111111555511111111155511111555111111
    1111111111111111111111111111111111111111111117777771111111111111111111111111111555111111111111111111111115555111111111111111111111555551111111155511111555111111
    1111111111111111111111111111111111111111111117777711111111111111111111111111115555551111111111111111111115555551111111111111111111155555111111155511111555111111
    1111111111111111111111111111111111111111111117777777111111111111111111111111115555555555511111111111111115555555555555555511111111115555555555555511111555111111
    1111111111111111111111111111111111111111111117777777777111111111111111111111115555555555555551111111111115555555555555555551111111111555555555555511111555111111
    1111111111111111111111111111111111111111111111117777777771111111111111111111111111555555555555551111111111111555555555555551111111111155555555555511111555111111
    1111111111111111111111111111111111111111111111111177777777771111111111111111111111111115555555551111111111111111111111115551111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111177777777711111111111111111111111111111555551111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111777777777111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111777777777111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111aaaaaaaaa71111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111188888888811111111aaaaaaaaaaaaaaaa771111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111188888888888811111aaaaaaaaaaaaaaaaaa77711111111111111111111111111111111111111111111111111111111111111111111111111555511111111
    111111111111111111111111111111111118888888888888888aaaaaaaaaa11111aaaaaaa777711111111111111111111111111111111111111111111111111111111111111111111111555555111111
    11111111111111111111111111111111118888811111888888aaaaaa111111111111aaaaaa77777111111111111111111111111111111111111111111111111111111111111111111111555555111111
    1111111111111111111111111111111111888811111111888aaaaaa11111111111111aaaaaa7777777111111111111111111111111111111111111111111111111111111111111111111115555111111
    111111111111111111111111111111111888811111111111aaaaa888811111111111111aaaa7777777777111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111188888111111111aaaaaa88888811111111111111aaaa177777777771111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111118888111111111aaaaaa118888888111111111111aaaaa11177777777771111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111888111111111aaaaaa11111888888111111111111aaaaa1111177777777771111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111118881111111aaaaaa11111111888888811111111111aaaaa111111777777777711111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111888811111aaaaaa2222211111188888881111111111aaaaa22222221777777777771111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111188888111aaaaaa222222221111188888881111111111aaaa22222222222777777777777111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111188881122222222222222221111118888881111112222aaa22222222222227777777777777771111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111888aa2222222222122222211111118888811222222222221111222222222222777777777777777111111111111111111111111111111111111111111111111
    11111111111111111111111111111111118222222222222111112fff21111111888822dddddddddd11111111111111122222277777777777777111111111111111111111111111111111111111111111
    11111111111111111111111111111111111222222288888811111fff22211111288882dddddddddd11111111111111111122211111777777777771111111111111111111111111111111111111111111
    1111111111111111111111111111111111222222228888888811ffff22221122288888dddddddddd11111111111111111222211111111177777777711111111111111111111111111111111111111111
    1111111111111111111111111111112222222aa7888888888888ffff222222222288888111111dddd1111111111111112222211111111111177777777111111111888888111111111111111111111111
    1111111111111111111111111112222222222aa7111111888888fff8122222222218888811111dddd1111111111111122222111111111111111777777771118888888888881111111111111111111111
    111111111111111222211111222222222222aaa7111111118888fff82222222211118888111111ddd1111111111111222221aaaaaaaaaaaaaaaaaa777777888888888888888111111111111111111111
    111111111111111222222222222222221111aaa7711111111118fff82222222211111888811111ddd1111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa7788888888881188888811111111111111111111
    111111111111111222288822222221111111aaa7711111111111fff22228222221111888881111ddd111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa888888871111111888811111111111111111111
    111111111111111112288882221111111111aaa777111111111ffff22228822222111188881111ddd11aaaaaaaaaaaaaaaaaaa88888888888111aaaaaa88887777711111188881111111111111111111
    111111111111111111188888111111111111aaa777711111111ffff22288888222221118888111ddd1aaaaa1111222211118888881111711111111aaaaaa177777771111188881111111111111111111
    111111111111111111118888811111111111aaa777711111111fff222188888882222118888811dddaaaaa111122221111888888111171111111188aaaaaa11777777711118881111111111111111111
    111111111111111111111888881111111111aaa177771111111fff221118888888222211888811ddddaaa11112222211888888111117111111118888aaaaaa1117777771118881111111111111111111
    111111111111111111111188888111111111aaa177777111111fff221111188888822227788887ddddaa11112222211888888117777111111118888811aaaaaa11777777788881111111111111111111
    111111111111111111111118888811111111aaaa17777711111fff21177777188882222218888adddda1111222221888888877711111111111188881111aaaaaa1117777788881111111111111111111
    111111111111111111111111888881111111aaaaa1777771111ffff771111111888122222288888ddd777722222788888811111111111111118888111111aaaaa1117777888811111111111111111111
    1111111111111111111111111888881111111aaaa1177771777fffff2111111188811222222888dddd11122222788888811111111111111118888811111111aaa1177777888811111111111111111111
    11111111111111111111111111888881111111aaaa117777111fffff221111118881112222a888dddd12222221188881111111111111111188888111111111aaa1177778888111111111111111111111
    11111111111111111111111111188888111111aaaaa1777771111fff222111118881111122aaaddddd8222221118881111111111111111118888111111111aaaa1777718888111111111111111111111
    111111111111111111111111111188888111111aaaa1177777111ffff2222111888111111aaaadddd88882211118881111111111111111118881111111111aaaa7777788881111111111111111111111
    1111111111111111111111111111188888ddddddaaaa777777711ffffff222118881111aaaaaadddd8888881111888111111111111111111888111111111aaaa77777888881111111111111111111111
    111111111111111111111111111111ddddddddddaaaaaddddddd1ffffffff222888aaaaaaaaadddd88888888811888111111111111111111888111111111aaaa77778888811111111111111111111111
    111111111111111111777777777ddddddddddddddaaaaadddddddddffffffffaaaaaaaaaaaadddddd888888888888811111111111111111188811111111aaaa777718888111111111111111111111111
    111111111111111111711111dddddddddddd8888ddaaaaaadddddddddfffaaaaaaaaaaaaadddddd222d1188888888811111111111111111888811111111aaaa777188881111111111111111111111111
    11111111111111117711dddddddddddd7888888888aaaaaaaaddddddaaaaaaaaaaaaaddddddddd222221111888888888111111111111111888811111111aa77771888881111111111111111111111111
    111111111111111711ddddddddddd111177788888888aaaaaaaaaaaaaaaaaaaaaffffffddddddd22222111111188888888111111111111188811111111aa777788888811111111111111111111111111
    11111111111117711ddddddddd1111111111111188888aaaaaaaaaaaaaaaaa188fffffff2222222222221111111888888888811111111118881111111aa7777788888111111111111111111111111111
    1111111111177111dddddd1111111111111111111111888aaaaaaaaaaa817888888ffffff2221222222211111118888888888881111111188811111aaa77777788881111111111111111111111111111
    111111111171111ddddd11111111111111111111111111111aaaaaaaaaa8888888822ffffff111112222211111188881888888888811118888111aaaaa77777888111111111111111111111111111111
    11111111171111ddddd11111111111111111111111111111111aaaaaaaaaaaa8822222ffffff7711122221111118888811188888888881888aaaaaaaa777778881111111111111111111111111111111
    1111111171111ddddd11111111111111111111111111111111111aaaaaaaaaaaaaaaaaaafffff17777222211111188888111188888888aaaaaaaaaaa7777788811111111111111111111111111111111
    111111111111ddddd1111111111111111111111111111111111111111aaaaaaaaaaaaaaaaaaaaaaaaaaaa27777777888811111118aaaaaaaaaaaaaa87777881111111111111111111111111111111111
    11111111111ddddd111111111111111111111111111111111111111112777aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa888877777811111111111111111111111111111111111
    1111111111ddddd1111111111111111111111111111111111111111222277777711111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa8888887777771111111111111111111111111111111111111
    111111111ddddd1111ddd1111111111111111111111111111111122222227777771111111111fffffffaaaaaaaaaaaaaaaaaaaaaaaa11188888887777771111111111111111111111111111111111111
    11111111ddddd11111dddd11111111111111111111111111122222222222117777711111111111fffffff221111111111888888888888888811177777711111111111111111111111111111111111111
    11111111dddd111111ddddd111111111111111111111112222222222221111177777111111111111ffffff21111111111111888888888888888877711111111111111111111111111111111111111111
    1111111dddd11111111ddddd111111111111111111122222222222221111111177777111111111111fffff21111111111111111888888888888888888811111111111111111111111111111111111111
    1111111dddd111111111dddd11111111111111111222222222222221111111111777777111111111111fff21111111111111111111118888888888888888888811111111111111111111111111111111
    1111111ddd11111111111dddd111111111111112222222222222211111111111117777771111111111112221111111111111111111111111888888888888888888881111111111111111111111111111
    1111111ddd11111111111ddddd11111111112222222222222221111111111111111777777111111111112221111111111111111111111111788888118888888888888811111111111111111111111111
    1111111ddd111111111111dddddddd1111222222222222222211111111111111111117777711111111112221111111111111111111111117778888811111118888888881111111111111111111111111
    1111111dddd111111111111ddddddddddd222222222222221111111111111111111111777777111111112221111111111111111111111177777888881111111111888881111111111111111111111111
    1111111dddd1111111111111dddddddddddddd22222222111111111111111111111111177777771111112222111111111111111111111177771188888111111111188881111111111111111111111111
    11111111ddd11111dddddddddddddddddddddddd11111111111111111dddd111111111117777777711112222111111111111111111111777711118888881111111888881111111111111111111111111
    11111111ddd1dddddddddddddddddddddddddddd11111111111111ddddddd111111111111177777777111222111111111111111111117777711111888888888888888811111111111111111111111111
    11111111ddddddddddddddddddddddddddddddddd1111111111dddddddddd111111111111111777777771111111111111111111111117777111111188888888888888111111111111111111111111111
    11111111dddddddddd111111111dddddddddddddd1111111ddddddddddd11111111111111111117777777711111111111111111111117771111111111888888888881111111111111111111111111111
    111111111ddddd11111111111111111111111dddd11111dddddddddd11111111111111111111111177777777111111111111111111117771111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111dddddddddd11111111111111111111111111111777777777711111111111111777771111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111dddddddddd11111111111111111111111111111111117777777777777111777777777771111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111dddddddddd1111111111111111111111111111111111111177777777777777777777777771111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111ddddddd1111111111111111111111111111111111111111111117777777777777777771111111111111111111111111111111111111111111111111111
`)

pause(1000) // wait one second

startGame()
function startGame () {
    console.log(lives)
story.showPlayerChoices("Play","Tutorial","Dev stuff") // pull uo the main menu

if (story.getLastAnswer() == "Play"){ // if the play starts to play the game
// resed Background
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
    `)
gameSetUp() // start the game


}else if (story.getLastAnswer() == "Tutorial"){ // if the player plays the tutorial
    game.splash("Welcome to hello! --The not so Imposible Quiz")
    game.splash("this is a game simaler to the imposible quiz, in that you answer questions")
    game.splash("there will be a question in the top right corner")
    story.printText("Questions look like this!",60,0)
    game.splash("it will then give you a few answers")
    game.splash("if you get it right you will move on")
    game.splash("if you get it wrong, you lose!")
    game.splash("once you get to a certn part of the game it will promp you to go to the store")
    game.splash("the store is whare you can purcase upgrades or make qulaity of life changes to your game")
    game.splash("good luck!")
    game.reset() // start the game over

}else {

if (blockSettings.readString("isSighndInToDev") == "false") {

    let pasans: any = game.askForString("Password", 10)
    // Password is 21424314
    if (pasans == "21424314" || pasans == "69B299144" || pasans == "314413" || pasans == "265858") {
                  blockSettings.writeString("isSighndInToDev", "true")              
                        
        let devoutput = null
        scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
                    `)
        story.printText("Correct!", 0, 0)
    }
    }
    if (blockSettings.readString("isSighndInToDev") == "true")  {
        devPanel()
        function devPanel () {
        story.showPlayerChoices("skip to level", "Change internal variables", "Log out", "Back to menue")
        if (story.getLastAnswer() == "Change internal variables") {
            story.showPlayerChoices("man made", "built in")

            if (story.getLastAnswer() == "man made") {
                story.showPlayerChoices("questionNumber", "lives")

             if (story.getLastAnswer() == "questionNumber") {
                let devVar = game.askForNumber("what do you want to set it to?", 10)
                questionNumber = devVar
                devPanel()
            } else if (story.getLastAnswer() == "lives") {
                let devVar = game.askForNumber("what do you want to set it to?", 10)
                lives = devVar
                console.log(lives)
                devPanel()
            }
            } else {
                story.showPlayerChoices("points", "Back")
                if (story.getLastAnswer() == "points") {
                    let devVar = game.askForNumber("what do you want to set it to?", 10)
                    info.setScore(devVar)
                    devPanel()
                }
            }

        } else if (story.getLastAnswer() == "skip to level") {

            let devSPL: any = game.askForNumber("Enter level. Enter 0 to go back", 2)
            devAns = devSPL
            if (devSPL == 0){
                devPanel()
            } else if (devSPL == 4) {
                question4()
            } else if (devSPL == 5) {
                q5()
            } else if (devSPL == 6) {
                q6()
            } else if (devSPL == 7) {
                q7()
            } else if (devSPL == 8) {
                q8()
            } else if (devSPL == 9) {
                q9()
            } else if (devSPL == 10) {
                q10()
            } else if (devSPL == 11) {
                q11()
            } else if (devSPL == 12) {
                q12()
            } else if (devSPL == 13) {
                q13()
            } else if (devSPL == 15) {
                q15()
            } else if (devSPL == 16) {
                q16()
            } else if (devSPL == 17) {
                q17()
            } else {
                story.printText("Invalid level number!", 40, 0)
                devPanel()
            }

        } else if (story.getLastAnswer() == "Log out") {
            blockSettings.writeString("isSighndInToDev", "false")
            game.reset()
        } else {
            startGame()
        }
        }
    } else {

        story.printText("Wrong!", 0, 0)
        game.reset()
    }



}


}

// game start
function gameSetUp() {


// question 1
questionNumber = 1
info.setScore(1)
story.printText("Hello!",0,0)
story.showPlayerChoices("Hello", "Bye")

// question 2
if (story.getLastAnswer() == "Hello") {
    questionNumber = 2
    info.changeScoreBy(1)
    story.printText("what is 2 + 2 ?", 0, 0)
    story.showPlayerChoices("2", "4")
    // question 3
    if (story.getLastAnswer() == "4") {
        questionNumber = 3
        info.changeScoreBy(1)
        story.printText("Is code cool?", 0, 0)
        story.showPlayerChoices("Yes", "No")
        // store calls
        if (story.getLastAnswer() == "Yes") {
            story.showPlayerChoices("Go to store", "continue")
            if (story.getLastAnswer() == "Go to store") {
                store()
            } else {
                question4()
            }
        } else {
            l()
        }
    } else {
        l()
    }
} else {
    l()
}
}
game.over(true)
