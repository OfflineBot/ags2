import { App } from "astal/gtk3"
import style from "./style.scss"

import Bar from "./modules/bar/bar"
import Logout from "./modules/logout/logout"
import Stats from "./modules/stats/stats"


App.start({
    css: style,
    main() {
        Stats(0)
        Stats(1)
        Stats(2)
        Logout(2)
        Bar(0)
        Bar(1)
        Bar(2)
    },
})

