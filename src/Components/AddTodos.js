import React from 'react';
import Todo from './Todo';
class AddTodos extends React.Component {
  constructor() {
    super();
    this.state = { todoList: [] };
    this.id=0;
    this.count1 = 0;
    this.count2 = 0;
  }
  deleteItems=(id)=>{
      this.setState({todoList: this.state.todoList.filter((i)=> i.index!==id)})
      this.count1--;
  }
  addTodo = () => {
    this.count1++;
    let txt = document.querySelector('#addTodoInput')
    // const comp = <Todo text={txt.value} onDelete={this.deleteItems}/>;
    let comp = {text: txt.value, index: ++this.id, checked:false}
    this.setState({ todoList: [...this.state.todoList, comp]});
    txt.value = '';
  };
  onCheck = ()=>{
      this.setState({todoList: this.state.todoList.filter((i)=>i!==null)})
      this.count2++;
  }
  render() {
    return (
      <div>
        <input id="addTodoInput" type="text" />
        <button onClick={this.addTodo}>Add</button>
        <ul>{this.state.todoList.map(Item =>{
            return <Todo key={Item.index} text={Item.text} onChecked={this.onCheck} 
            onDelete={()=>{
                this.deleteItems(Item.index)
            }}/>
        })}</ul>
        <p>{this.count1}</p>
        <p>{this.count2}</p>
        <p>{this.count1-this.count2 < 0 ? 0 : this.count1-this.count2}</p>
      </div>
    );
  }
}

 
export default AddTodos;