import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-formio';
import { createActor } from '../../store/actions/actorActions';
class NewActor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newActor: {},
      formOptions: {
        noAlerts: true
      },
      form: { "type": "form", "tags": [], "owner": "5a310913a39d750001bdfb5f", "components": [{ "clearOnHide": false, "label": "Columns", "input": false, "tableView": false, "key": "columns", "columns": [{ "components": [{ "autofocus": false, "input": true, "tableView": true, "inputType": "text", "inputMask": "", "label": "First name", "key": "firstName", "placeholder": "First name", "prefix": "", "suffix": "", "multiple": false, "defaultValue": "", "protected": false, "unique": false, "persistent": true, "hidden": false, "clearOnHide": true, "spellcheck": true, "validate": { "required": true, "minLength": 3, "maxLength": "", "pattern": "", "custom": "", "customPrivate": false }, "conditional": { "show": "", "when": null, "eq": "" }, "type": "textfield", "labelPosition": "top", "inputFormat": "plain", "tags": [], "properties": {}, "description": "", "tooltip": "Actor first name", "lockKey": true }, { "autofocus": false, "input": true, "tableView": true, "inputType": "text", "inputMask": "", "label": "Last name", "key": "lastName", "placeholder": "Last name", "prefix": "", "suffix": "", "multiple": false, "defaultValue": "", "protected": false, "unique": false, "persistent": true, "hidden": false, "clearOnHide": true, "spellcheck": true, "validate": { "required": true, "minLength": 3, "maxLength": "", "pattern": "", "custom": "", "customPrivate": false }, "conditional": { "show": "", "when": null, "eq": "" }, "type": "textfield", "labelPosition": "top", "inputFormat": "plain", "tags": [], "properties": {}, "description": "", "tooltip": "Actor last name", "lockKey": true }], "width": 4, "offset": 2, "push": 0, "pull": 0 }, { "components": [{ "autofocus": false, "input": true, "tableView": true, "label": "Bio", "key": "bio", "placeholder": "Bio", "prefix": "", "suffix": "", "rows": 3, "multiple": false, "defaultValue": "", "protected": false, "persistent": true, "hidden": false, "wysiwyg": false, "clearOnHide": true, "spellcheck": true, "validate": { "required": false, "minLength": 20, "maxLength": "", "pattern": "", "custom": "" }, "type": "textarea", "labelPosition": "top", "inputFormat": "plain", "tags": [], "conditional": { "show": "", "when": null, "eq": "" }, "properties": {}, "description": "", "tooltip": "Actor bio", "isNew": false }, { "clearOnHide": false, "label": "Columns", "input": false, "tableView": false, "key": "columnsColumns", "columns": [{ "components": [{ "autofocus": false, "input": true, "label": "Submit", "tableView": false, "key": "submit", "size": "md", "leftIcon": "", "rightIcon": "", "block": false, "action": "submit", "disableOnInvalid": false, "theme": "primary", "type": "button", "tags": [], "conditional": { "show": "", "when": null, "eq": "" }, "properties": {}, "customClass": "", "lockKey": false }], "width": 6, "offset": 0, "push": 0, "pull": 0 }, { "components": [{ "autofocus": false, "input": true, "label": "Reset", "tableView": false, "key": "columns2Reset", "size": "md", "leftIcon": "", "rightIcon": "", "block": false, "action": "reset", "disableOnInvalid": false, "theme": "default", "type": "button", "tags": [], "conditional": { "show": "", "when": null, "eq": "" }, "properties": {}, "customClass": "" }], "width": 6, "offset": 0, "push": 0, "pull": 0 }], "type": "columns", "hideLabel": true, "tags": [], "conditional": { "show": "", "when": null, "eq": "" }, "properties": {} }], "width": 4, "offset": 0, "push": 0, "pull": 0 }], "type": "columns", "hideLabel": true, "tags": [], "conditional": { "show": "", "when": null, "eq": "" }, "properties": {} }], "revisions": "", "_vid": 0, "_id": "5c51732f6be4dc4a85d7964f", "title": "new actor", "display": "form", "access": [{ "roles": ["5a310983d33f0b00015ae32a", "5a310983d33f0b00015ae32b", "5a310983d33f0b00015ae32c"], "type": "read_all" }], "submissionAccess": [], "settings": {}, "name": "newActor", "path": "newactor", "project": "5a310983d33f0b00015ae329", "created": "2019-01-30T09:49:35.323Z", "modified": "2019-01-30T10:52:57.068Z", "machineName": "fybghxmahsyrxyn:newActor" }
    };
  }
  onSubmit = (e) => {
    console.log(e.data);
    const newActor = e.data;
    delete newActor.submit;
    this.props.createActor(newActor);
  }
  render() {
    const formStyle = {
      margin: '10px'
    }
    return (
      <Form style={formStyle} form={this.state.form} submission={this.state.newActor} onSubmit={this.onSubmit} options={this.state.formOptions} />
    )
  }
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createActor: (actor) => {
      dispatch(createActor(actor));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewActor);