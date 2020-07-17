import Accueil from "./components/Accueil/Accueil";
import Detail from "./components/Detail/Detail";

export default [
    { path: '/', component: Accueil },
    { path: '/pokemon/:id', component: Detail },
]