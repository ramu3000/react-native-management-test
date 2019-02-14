import React, { Component } from "react";
import { connect } from "react-redux";
import { Picker, Text, View } from "react-native";

import { employeeUpdate } from "../actions";
import { CardSection, Input } from "./common";

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "name", value })
            }
            label="Name"
            placeholder="Will Smith"
            value={this.props.name}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="050 000000"
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "phone", value })
            }
            value={this.props.phone}
          />
        </CardSection>
        <CardSection style={{ flexDirection: "column", height: 150 }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdate({ prop: "shift", value })
            }
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}
const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return {
    name,
    phone,
    shift
  };
};
export default connect(
  mapStateToProps,
  { employeeUpdate }
)(EmployeeForm);
