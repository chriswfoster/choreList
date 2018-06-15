import React, { Component } from "react"
import { Button, Select, Input } from "antd"
const Option = Select.Option

class SelectForm extends Component {
  constructor() {
    super()
    this.state = {
      custom: false,
      selectValue: 0,
      selectLabel: ""
    }
  }
  render() {
    console.log(this.state)
    return (
      <div style={{ border: "solid", width: "80%" }}>
        <p>Add Chore:</p>
        <form>
          <Select
            labelInValue
            defaultValue={{ key: "Click to Select" }}
            onChange={e =>
              e.label === "Custom"
                ? this.setState({
                    custom: true,
                    selectLabel: "",
                    selectValue: 0
                  })
                : this.setState({
                    selectLabel: e.label,
                    selectValue: parseInt(e.key.slice(1, 3), 10)
                  })
            }
          >
            <Option value="a40"> Dishes (40)</Option>
            <Option value="a30"> Mop Entire House (30)</Option>
            <Option value="b30"> Laundry (30)</Option>
            <Option value="a20">Bathroom Floors and Counter (20)</Option>
            <Option value="b20"> Pick Up Livingroom (20)</Option>
            <Option value="c20"> Clean Bedroom (20)</Option>
            <Option value="a10">Clothes in Drawers 'STAY' Folded (10)</Option>
            <Option value="b10"> Sweep Entire House (10)</Option>
            <Option value="c10">Table 'STAYS' Clean (10)</Option>
            <Option value="d10"> Marley Food/Water (10)</Option>
            <Option value="e10"> Change Bed Sheets (10)</Option>
            <Option value="f10"> Clean Atlas Room (10)</Option>
            <Option value="g10"> Scrub Toilet (10)</Option>
            <Option value="h10"> Vacuum Rugs (10)</Option>
            <Option value="i10"> Trash (10)</Option>
            <Option value="custom">Custom</Option>
          </Select>
          {this.state.custom ? (
            <div>
              <Input
                placeholder="Chore Name"
                onChange={e => this.setState({ selectLabel: e.target.value })}
              />
              <Input
                type="number"
                onChange={e =>
                  this.setState({ selectValue: parseInt(e.target.value, 10) })
                }
                placeholder="Point Value"
              />
            </div>
          ) : null}
          <Button type="primary">ADD</Button>
        </form>
      </div>
    )
  }
}
export default SelectForm
