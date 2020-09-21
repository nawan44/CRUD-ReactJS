import React from 'react';
import { Button, Form, Label, Input } from 'reactstrap';




class FormInput extends React.Component {

    render() {
        const { handlerCancel, functionChange ,  functionSave, categoryModel} = this.props;
        return (
            <div>
                <p>Create Data</p>
                <Form>
                  
           <Label>Name</Label>
                  <Input type="text" class="form-control" placeholder="Name" value={categoryModel.name} onChange={functionChange('name')}/> <br />
                <Label>Activity</Label>
                <Input type="text" class="form-control" placeholder="Activity"  value={categoryModel.activity} onChange={functionChange('activity')}/> <br />
                <Label>Date</Label> <br/>
                <Input type="date" class="form-control" value={categoryModel.date} onChange={functionChange('date')}/> <br />
                <br/>
                <Button type="submit" color="primary" class="btn btn-info pull-right"  onClick={functionSave}>Save Change</Button> <br/><br/>
                <Button type="submit" color="danger" class="btn btn-default" onClick={handlerCancel}>Cancel</Button>
                </Form>
              
</div>
        )
    }
}

export default FormInput