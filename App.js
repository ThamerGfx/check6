import React, {
  Component
} from 'react';
import './App.css';
import Personne from './personne';
import {Button} from 'reactstrap';
import alexandria from './img/alexandria.jpg';
import aswan from './img/aswan.jpg';
import hurghada from './img/hurghada.jpg';

const pers1 = {
  pic: alexandria,
  name: "Alexandria",
  desc: "tchabah l tounes f ta9s",
  id: 1
};
const pers2 = {
  pic: aswan,
  name: "Aswan",
  desc: "ken mouch m nile l 3bed maya3rfouch haja esmha natation kn f tlefez",
  id: 2
};
const pers3 = {
  pic: hurghada,
  name: "Hurghada",
  desc: "red sea & safari... mafamech haja plus complète que ça",
  id: 3
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      GroupPers: [pers1, pers2, pers3],
      currentPer: pers1.id
    };
  }
  show = (id) => {
    this.setState({
      currentPer: id
    })
  };

  render() {
      return ( 
          <div className = "App"> {
            this.state.GroupPers.map((x) => {
                return ( <Button className="btn" onClick = {
                    () => this.show(x.id)
                  }
                  key={x.id} > {
                    x.name
                  } </Button>)})}
                  
                   {
                    this.state.GroupPers.filter(x => x.id === this.state.currentPer).map((el, i) => {
                        return (<Personne pic = {
                          el.pic
                        }
                        key= {el.id}
                        name = {
                          el.name
                        }
                        desc = {
                          el.desc
                        }/>
                      )
                      }
                      )
                    

                  } 
                  </div>
                );
              }
            }
            export default App;