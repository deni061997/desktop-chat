import SideBar from './contact-list';
import ChatBox from './chat-box';
import DetailsShow from './details-show';
import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadLink } from '../redux/actions';

function App() {
  const dispatch = useDispatch();

  //Загрузка id выбранного контакта
  useEffect(() => {
    dispatch(loadLink());
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route path="/:id?">
          <SideBar />
          <ChatBox />
          <DetailsShow />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
