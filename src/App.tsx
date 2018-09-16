import * as React from 'react';
import './App.css';
import {Row} from './Row';

export interface IItem{
  description: string;
  id: number;
}

interface IList{
  items: IItem[];
}

class App extends React.Component<any, IList> {

  constructor(props: Readonly<any>){
    super(props);

    this.state = {
      items: [{
        description: 'Item 1',
        id: 0
      }, {
        description: 'Item 2',
        id: 1
      }]
    }

    this._onRemoveRow = this._onRemoveRow.bind(this);
  }

  public render() {
    return (
      <div className="container">
        <header>
          <h1 className="header-title">Todo</h1>
        </header>

        <ol>
          {this._renderItems()}
        </ol>

        <button>Add</button>
      </div>
    );
  }

  private _onRemoveRow(key: number){
    const items = this.state.items.slice();
    const index = items.findIndex(item => item.id === key);
    items.splice(index, 1);
    this.setState({
      items: items
    });
  }

  private _renderItems(){
    return this.state.items.map(item =>
      <Row item={item} onRemoveRow={this._onRemoveRow} key={item.id}></Row>
    )
  }
}

export default App;
