import { library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-brands-svg-icons";
//import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const registeredIcons = [faBars, faTimes];
library.add(...registeredIcons);
