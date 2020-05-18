import React from 'react'
import ryan from './ryan.jpg'

class Indecision extends React.Component {
    constructor(){
        super()
        this.state={
            title: 'Sleam web app',
            subtitle: 'Put your life in the hands of a computer',
            options: [],
            count: 0
        }
    }

    addList=(event)=>{
        event.preventDefault()

        const h=event.target.elements[0].value
        if(h===''){
            alert('enter an item')
            return
        }

        const d=this.state.options.find((y)=> y===h)

        if(!d){
            this.setState({options: [...this.state.options, h]})
            event.target.elements[0].value=''
        } else {
            alert('item already included')
        }
    }

    removeAll=()=>{
        this.setState({options: this.setState.options.length=[]})
    }

    removeList=(i)=>{
        const remove=this.state.options.filter((value,index)=> index !== i)
        this.setState({options: remove})
    }

    componentDidUpdate (prevDefault, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const u=JSON.stringify(this.state.options)
            localStorage.setItem('o', u)
        }
        if(prevState.count !== this.state.count){
            localStorage.setItem('r', this.state.count)
        }
    }

    componentDidMount () {
        const u=localStorage.getItem('o')
        if(u===null){
            this.setState({options: []})
            return
        }
        const o=JSON.parse(u)

        this.setState({options: o})

        const e=localStorage.getItem('r')
        const t=parseInt(e)

        if(!isNaN(t)){
            this.setState({count: t})
        }

    }

    plusOne=()=>{
        this.setState({count: this.state.count+1})
    }

    minusOne=()=>{
        this.setState({count: this.state.count-1})
    }

    reset=()=>{
        this.setState({count: this.setState.count=0})
    }

    render(){
        return(
            <div>
                <div id='container'>
                    <div id='header'>
                        <h1>{this.state.title}</h1>
                        <p>{this.state.subtitle}</p>
                    </div>
                    <div id='second'>
                        <p>{this.state.options.length>0 ? 'Here are your options' : 'No option'}</p>
                        <button disabled={this.state.options.length===0} onClick={this.removeAll}>Remove all</button>
                    </div>
                    <div id='third'>
                    <ul>
                        {this.state.options.map((list,i)=> <li key={i}>{list} <button onClick={()=> this.removeList(i)}>Remove</button></li>)}
                    </ul>
                    </div>
                    <div id='forth'>
                        <form onSubmit={this.addList}>
                            <input type='text' name='h'/>
                            <button>Add option</button>
                        </form>
                    </div>
                    <div id='count'>
                        <h1>Count: {this.state.count}</h1>
                        <button onClick={this.plusOne}>+1</button>
                        <button onClick={this.minusOne}>-1</button>
                        <button onClick={this.reset}>Reset</button>
                    </div>
                </div> <br/> <br/> <br/> <br/> <br/>


                <div id='web'>
                    <div id='features' className='tile'>
                        <h2>Features</h2>
                        <ul>
                            <li>Link 1</li>
                            <li>Link 2</li>
                            <li>Link 3</li>
                        </ul>
                    </div>
                    <div id='important' className='tile'>
                        <p>Important interview</p>
                        <p>3:00 - 4:00</p>
                        <p>December <span>15</span></p>
                    </div>
                    <div id='todo' className='tile'>
                        <h2>TODO</h2>
                        <ol>
                            <li>Build websites</li>
                            <li>Build games</li>
                            <li>Build apps</li>
                        </ol>
                    </div>
                    <div id='img' className='tile'>
                        <img alt='img' src={ryan}/>
                        <h2>4800</h2>
                    </div>
                    <div id='table' className='tile'>
                        <table>
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Product</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>User 1</td>
                                    <td>Nice App</td>
                                    <td>45.5</td>
                                </tr>
                                <tr>
                                    <td>User 1</td>
                                    <td>Nice App</td>
                                    <td>45.5</td>
                                </tr>
                                <tr>
                                    <td>User 1</td>
                                    <td>Nice App</td>
                                    <td>45.5</td>
                                </tr>
                                <tr>
                                    <td>User 1</td>
                                    <td>Nice App</td>
                                    <td>45.5</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id='order' className='tile'>
                        <h2>Order Pizza</h2>
                        <form>
                            <select>
                                <option>Pizza 1</option>
                                <option>Pizza 2</option>
                                <option>Pizza 3</option>
                            </select>
                            <input type='number' name='number'/>
                            <input type='text' placeholder='comments'/> <br/>
                            <button>Order</button>
                        </form>
                    </div>
                    <div id='santiago' className='tile'>
                        <h2>Santiago</h2>
                        <h2>36</h2>
                    </div>
                </div>
            </div>
        )
    }
};

export default Indecision;

    // componentDidMount () {
    //     const t=localStorage.getItem('r')
    //     const u= localStorage.getItem('o')
        
    //     const te=parseInt(t)
    //     if(u===null){
    //         this.setState({options: []})
    //         return
    //     }
    //     const ue=JSON.parse(u)
    //     this.setState({options: ue})

    //     if(!isNaN(te)){
    //         this.setState({count: te})
    //         return
    //     }
    // }