import React, { Component } from "react";
import { connect } from "react-redux";
import EmployeeForm from "./EmployeeForm";
import Communications from "react-native-communications";
import { employeeUpdate, employeeSave, employeeDelete } from "../actions";
import { Card, CardSection, Button, Confirm } from "./common";

class EmployeeEdit extends Component {
  state = {
    modalVisible: false
  };
  componentWillMount() {
    const { employee } = this.props;
    Object.entries(employee).forEach(([key, value]) => {
      this.props.employeeUpdate({ prop: key, value });
    });
  }

  onButtonPress = () => {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.id
    });
  };

  onTextPress = () => {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  };

  onDeleteUser = () => {
    this.setState({ modalVisible: false });
    this.props.employeeDelete(this.props.employee.id);
  };
  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress}>Save Changes</Button>
          <Button onPress={() => this.setState({ modalVisible: true })}>
            Delete
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress}>Text Schedule</Button>
        </CardSection>
        <Confirm
          visible={this.state.modalVisible}
          onAccept={this.onDeleteUser}
          onDecline={() => this.setState({ modalVisible: false })}
        >
          Are you sure you want to delete this user? {"\n"}
          {this.props.name}
        </Confirm>
      </Card>
    );
  }
}
const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;
  return {
    name,
    phone,
    shift
  };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeSave, employeeDelete }
)(EmployeeEdit);
