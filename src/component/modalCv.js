import React, { Component } from 'react';
import { Button, ControlLabel, FormControl, FormGroup, HelpBlock, Modal, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export const ModalCv = React.createClass({
  getInitialState() {
    return { showModal: false, value: '' };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div>
        <li className="twitter"><FontAwesome name="print" /><a href="#" onClick={this.open}>Print my resume</a></li>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Receive my CV by Email</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Thank you for your interest on my profile</h4>
            <p>In order to get access to my resume, i just need to know what is your email and you will receive it on your mailbox.</p>
            <form>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
              >
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter your E-mail"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="success">Receive</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});