import * as React from 'react';
import { IItem } from './App';

interface IRowProps{
    item: IItem;
    onRemoveRow: (key: number) => void;
}

export class Row extends React.Component<IRowProps>{
    constructor(props: Readonly<IRowProps>){
        super(props);

        this._onRemoveRow = this._onRemoveRow.bind(this);
    }

    render(){
        return (
            <li>{this.props.item.description}<span onClick={this._onRemoveRow}>X</span></li>
        );
    }

    private _onRemoveRow(event: any){
        this.props.onRemoveRow(this.props.item.id);
        event.preventDefault();
    }
}

// class Row extends React.Component<IRow>{
    

//     constructor(props: Readonly<IRow>){
//         super(props);

//         props.description
//     }

//     public render(){
//         this.props.description
//         return (
//             <li> <span>X</span></li>
//         )
//     }
// }