import React, { Component } from "react"
import { Button, Select, Input } from "antd"
const Option = Select.Option

class SelectForm extends Component {
  render() {
    return (
      <div style={{ border: "solid", width: "80%" }}>
        <p>Add Chore:</p>
        <form>
          <Select
            labelInValue
            defaultValue="Click to Select"
            onChange={e => console.log(e)}
          >
            <Option value="40"> Dishes (40)</Option>
            <Option value="30"> Mop Entire House (30)</Option>
            <Option value="30"> Laundry (30)</Option>
            <Option value="20">Bathroom Floors and Counter (20)</Option>
            <Option value="20"> Pick Up Livingroom (20)</Option>
            <Option value="20"> Clean Bedroom (20)</Option>
            <Option value="10">Clothes in Drawers 'STAY' Folded (10)</Option>
            <Option value="10"> Sweep Entire House (10)</Option>
            <Option value="10">Table 'STAYS' Clean (10)</Option>
            <Option value="10"> Marley Food/Water (10)</Option>
            <Option value="10"> Change Bed Sheets (10)</Option>
            <Option value="10"> Clean Atlas Room (10)</Option>
            <Option value="10"> Scrub Toilet (10)</Option>
            <Option value="10"> Vacuum Rugs (10)</Option>
            <Option value="10"> Trash (10)</Option>
          </Select>
          <Input
            onChange={e => this.setState({ inputText: e.target.value })}
            placeholder="Point value"
          />
          <Button type="primary">ADD</Button>
        </form>
      </div>
    )
  }
}
export default SelectForm
