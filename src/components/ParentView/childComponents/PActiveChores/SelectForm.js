import React, { Component } from "react"
import { Button, Select, Input } from "antd"
const Option = Select.Option

class SelectForm extends Component {
  render() {
    return (
      <div style={{ border: "solid", width: "80%" }}>
        <p>Add Chore:</p>
        <form>
          <Select defaultValue={"Click to Select"}>
            <Option value="Dishes"> Dishes </Option>
            <Option value="Laundry"> Laundry </Option>
            <Option value="Bathroom Floors and Counter">
              Bathroom Floors and Counter
            </Option>
            <Option value="Scrub Toilet"> Scrub Toilet </Option>
            <Option value="Clean Bedroom"> Clean Bedroom </Option>
            <Option value="Clothes in Drawers 'STAY' Folded">
              Clothes in Drawers 'STAY' Folded
            </Option>
            <Option value="Pick Up Livingroom"> Pick Up Livingroom </Option>
            <Option value="Sweep Entire House"> Sweep Entire House </Option>
            <Option value="Mop Entire House"> Mop Entire House </Option>
            <Option value="Table 'STAYS' Clean"> Table 'STAYS' Clean </Option>
            <Option value="Vacuum Rugs"> Vacuum Rugs </Option>
            <Option value="Clean Atlas Room"> Clean Atlas Room </Option>
            <Option value="Marley Food/Water"> Marley Food/Water </Option>
            <Option value="Change Bed Sheets"> Change Bed Sheets </Option>
            <Option value="Trash"> Trash </Option>
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
