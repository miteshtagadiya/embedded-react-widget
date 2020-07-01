/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './widget.scss';

library.add(
  fas,
  // more icons go here
);

class Widget extends Component {
  state = {
    opened: false,
    showDock: true,
    testScript: { labels: '', phone_number: '' },
  };

  componentDidMount() {
    fetch('https://codifyinditest.com/script_test/api-test/')
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          testScript: result['script test'],
        });
      });
  }

  handleToggleOpen = () => {
    this.setState((prev) => {
      let { showDock } = prev;
      if (!prev.opened) {
        fetch('https://codifyinditest.com/script_test/api-test/')
          .then((response) => response.json())
          .then((result) => {
            this.setState({
              testScript: result['script test'],
            });
          });
        showDock = false;
      } else {
        showDock = true;
      }
      return {
        showDock,
        opened: !prev.opened,
      };
    });
  };

  handleWidgetExit = () => {
    this.setState({
      showDock: true,
    });
  };

  renderBody = () => {
    const { showDock } = this.state;

    return (
      <div className="docked-widget-button">
        <div
          className="dock"
          onClick={this.handleToggleOpen}
          onKeyPress={this.handleToggleOpen}
        >
          {showDock ? (
            <FontAwesomeIcon icon={['fas', 'phone-alt']} />
          ) : (
            <FontAwesomeIcon icon={['fas', 'times']} />
          )}
        </div>
      </div>
    );
  };

  render() {
    const { opened } = this.state;
    const body = this.renderBody();

    return (
      <div>
        {opened && (
          <div className="docked-widget slide-tl">
            <div
              style={{
                padding: 30,
                background: '#33323c',
                color: '#fff',
                textAlign: 'center',
                borderRadius: 10,
              }}
            >
              <div>
                <label style={{ fontSize: 18, fontWeight: 'bold' }}>
                  {this.state.testScript.labels}
                </label>
              </div>
              <div style={{ marginTop: 10 }}>
                <label
                  style={{ fontSize: 18, fontWeight: 'bold', color: '#2fdab7' }}
                >
                  <FontAwesomeIcon icon={['fas', 'times']} /> {this.state.testScript.phone_number}
                </label>
              </div>
            </div>
          </div>
        )}
        {body}
      </div>
    );
  }
}

export default Widget;
