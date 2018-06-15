import React, { Component } from "react"

import axios from "axios"
import { connect } from "react-redux"
import { updateChores } from "../../../../ducks/reducer"
import { Button, Select, Input, Form } from "antd"
const Option = Select.Option
const FormItem = Form.Item

class SelectForm extends Component {
  constructor() {
    super()
    this.state = {
      custom: false,
      selectValue: 0,
      selectLabel: ""
    }
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.form.resetFields()

    const { selectLabel, selectValue } = this.state
    axios
      .post("/api/addChore", {
        name: selectLabel,
        points: selectValue
      })
      .then(response => this.props.updateChores(response.data))
    this.setState({ selectLabel: "", selectValue: 0, custom: false })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    console.log(this.props)
    return (
      <div style={{ border: "solid", width: "80%" }}>
        <p>Add Chore:</p>
        <Form onSubmit={e => this.submitHandler(e)}>
          <FormItem>
            {getFieldDecorator("select", {
              rules: [{ required: true, message: "Please a chore type!" }]
            })(
              <Select
                label="selector"
                labelInValue
                placeholder="Click to Select Chore"
                onChange={e =>
                  e.label === "Custom"
                    ? this.setState({
                        custom: true,
                        selectLabel: "",
                        selectValue: 0
                      })
                    : this.setState({
                        custom: false,
                        selectLabel: e.label,
                        selectValue: parseInt(e.key.slice(1, 3), 10)
                      })
                }
              >
                <Option value="a40">Dishes (40)</Option>
                <Option value="a30">Mop Entire House (30)</Option>
                <Option value="b30">Laundry (30)</Option>
                <Option value="a20">Bathroom Floors and Counter (20)</Option>
                <Option value="b20">Pick Up Livingroom (20)</Option>
                <Option value="c20">Clean Bedroom (20)</Option>
                <Option value="a10">
                  Clothes in Drawers 'STAY' Folded (10)
                </Option>
                <Option value="b10">Sweep Entire House (10)</Option>
                <Option value="c10">Table 'STAYS' Clean (10)</Option>
                <Option value="d10">Marley Food/Water (10)</Option>
                <Option value="e10">Change Bed Sheets (10)</Option>
                <Option value="f10">Clean Atlas Room (10)</Option>
                <Option value="g10">Scrub Toilet (10)</Option>
                <Option value="h10">Vacuum Rugs (10)</Option>
                <Option value="i10">Trash (10)</Option>
                <Option value="custom">Custom</Option>
              </Select>
            )}
          </FormItem>
          {this.state.custom ? (
            <div>
              <Input
                value={this.state.selectLabel}
                placeholder="Chore Name"
                onChange={e => this.setState({ selectLabel: e.target.value })}
              />
              <Input
                value={this.state.selectValue}
                type="number"
                onChange={e =>
                  this.setState({ selectValue: parseInt(e.target.value, 10) })
                }
                placeholder="Point Value"
              />
            </div>
          ) : null}
          <Button type="primary" htmlType="submit">
            ADD
          </Button>
        </Form>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  { updateChores }
)(Form.create()(SelectForm))
