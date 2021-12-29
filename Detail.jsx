import { Route, Switch, useLocation } from "react-router-dom";
import './detail.css';
import OngoingDetail from "./OngoingDetail";
import ArchiveDetail from "./ArchiveDetail";
import { CSSTransition, TransitionGroup} from 'react-transition-group';

function Detail() {
    const location = useLocation();
    return (
        <>
        <TransitionGroup className="transition-group">
            <CSSTransition key={location.pathname} timeout={{enter: 1000, exit: 300}} classNames="detailPageSlider">
                <Switch location={location}>
                    <Route path='/works/ongoing/:id' component={OngoingDetail} />
                    <Route path='/works/archive/:id' component={ArchiveDetail} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
        </>
    )
}
export default Detail;

