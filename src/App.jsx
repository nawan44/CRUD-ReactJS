import React from 'react';
import './css/App.css'

import FormInput from './component/input/input';
import { Button,  Table } from 'reactstrap';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            ListData:
                [

                ],
            isShow: false,
            categoryModel: this.itemModel,
            mode: ''
        }
    }
    handlerCreate = () => {

        const idMax = this.state.ListData.length;

        this.setState({
            isShow: true,
            mode: 'create',
            categoryModel: {
                ...this.state.categoryModel,
                ['id']: idMax + 1
            }
        })
    }

    hendleEdit = (id) => {
        const selected = this.state.ListData.find(a => a.id === id);

        this.setState({
            isShow: true,
            mode: 'edit',
            categoryModel: selected
        })
    }

    handlerCancel = () => {

        this.setState({
            isShow: false
        })
    }

    hendleDelete = (data) => {
        const { ListData } = this.state;
        const IndexData = ListData.findIndex(dt => dt.id === data.id);
        if (window.confirm(`Apakah anda yakin untuk menghapus data ${data.activity}`)) {
            ListData.splice(IndexData, 1);
        }

        this.setState({
            ListData: ListData
        })

    }

    functionChange = activity => ({ target: { value } }) => {
        this.setState({
            categoryModel: {
                ...this.state.categoryModel,
                [activity]: value
            }
        })
    }


    functionSave = () => {
        const list = this.state.ListData;

        if (this.state.mode === 'create') {
            list.push(this.state.categoryModel);
        }
        else {
            const IndexData = list.findIndex(dt => dt.id === this.state.categoryModel.id);
            this.state.ListData[IndexData] = {
                id: this.state.categoryModel.id,
                name: this.state.categoryModel.name,
                activity: this.state.categoryModel.activity,
                date:this.state.categoryModel.date
            }
        }
        this.setState({
            ListData: list,
            isShow: false
        })

    }
    componentDidMount(){
        axios.get('http://tempgaragelife.herokuapp.com/posts')
        .then(res=> {
            this.setState({
              products: res.data
            })
          })  
        }

    render() {
        return (
            <div>
                <p>Data Category</p>

                {this.state.isShow ?
                    <FormInput handlerCancel={this.handlerCancel} functionChange={this.functionChange}
                        functionSave={this.functionSave}
                        categoryModel={this.state.categoryModel} />
                    : null} <br />

                <Button style={{margin:"0 0 30px 0"}} color="success" className="btn btn-primary" data-toggle="modal" data-target="#modal-default" 
                        onClick={this.handlerCreate}>Create New </Button>
                <hr style={{margin:"0 0 30px 0"}}/>
                <Table id="category">
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Activity</th>
                        <th>Date</th>  
                        <th>Action</th>

                    </tr>
                    {
                        this.state.ListData.map(data => {
                            return (
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.activity}</td>
                                    <td>{data.date}</td>
                                    <td><Button style={{margin:"0 10px 0 0"}} color="warning" onClick={() => this.hendleEdit(data.id)}>Edit</Button> 
                                    <Button color="danger" onClick={() => this.hendleDelete(data)}>Delete</Button></td>
                                    </tr>
                            )
                        })
                    }
                </Table>
            </div>
        )
    }
}

export default App;