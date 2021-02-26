import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formColor: '',
            btColor: '',
            items: [],
            currentItem: {
                textDo: '',
                key: ''
            }


        };

    }

    handleInput = (event) => {
        this.setState({
            currentItem: {
                textDo: event.target.value,
                key: Date.now()
            }
        })
    }

    adding = (event) => {
        event.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);
        if (newItem.textDo !== "") {
            const newitems = [...this.state.items, newItem];
            this.setState({
                items: newitems,
                currentItem: {
                    textDo: '',
                    key: ''
                }
            })
        }
    }
    deleting = (key) => {
        const items = [...this.state.items];
        const updatedItems = items.filter(item => item.key !== key);
        this.setState({
            items: updatedItems
        })

    }

    changeTheme = () => {
        this.setState({
            formColor: '#132259',
            btColor: '#F4837D',
        });

    }

    render() {
        return (
            <div className="App" style={{backgroundColor: this.state.formColor}}>
                <div className="form">
                    <form id="to-do-form" onSubmit={this.adding}>
                        <input type="text" placeholder="Enter Task" value={this.state.currentItem.textDo}
                               onChange={this.handleInput}/>
                        <button type="submit" style={{backgroundColor: this.state.btColor}}>Add</button>
                    </form>
                </div>
                <br/>
                <ul className="list-design">
                    {this.state.items.map(item => {

                        return (
                            <li className="item-design" key={item.key}>
                                {item.textDo}
                                <button className="close-item" type="button" onClick={() => this.deleting(item.key)}>x
                                </button>

                            </li>

                        )
                    })
                    }
                </ul>
                <button className="change-theme" onClick={this.changeTheme}>Theme</button>

            </div>
        );
    }

}

export default App;
