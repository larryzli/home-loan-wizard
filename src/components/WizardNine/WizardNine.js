import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    updateAddressOne,
    updateAddressTwo,
    updateAddressThree
} from "../../ducks/reducer";
import { connect } from "react-redux";

class WizardNine extends Component {
    render() {
        return (
            <div className="parent-div">
                <div className="vert-align">
                    <p>What is your address?</p> <br />
                    <input
                        type="text"
                        placeholder="Line One"
                        onChange={e =>
                            this.props.updateAddressOne(e.target.value)
                        }
                    />
                    <input
                        type="text"
                        placeholder="Line Two"
                        onChange={e =>
                            this.props.updateAddressTwo(e.target.value)
                        }
                    />
                    <input
                        type="text"
                        placeholder="Line Three"
                        onChange={e =>
                            this.props.updateAddressThree(e.target.value)
                        }
                    />
                    <Link to="/wTen">
                        <button className="margin-btn"> Next </button>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        addressOne: state.addressOne,
        addressTwo: state.addressTwo,
        addressThree: state.addressThree
    };
};

export default connect(mapStateToProps, {
    updateAddressOne,
    updateAddressTwo,
    updateAddressThree
})(WizardNine);
