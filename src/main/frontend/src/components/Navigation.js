import React from 'react';
import {Navbar, Button, ButtonToolbar} from 'react-bootstrap';

class Navigation extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <ButtonToolbar>
                            <Button bsStyle="primary" href="/">File analyser</Button>
                            <Button href="/">Files Statistic</Button>
                        </ButtonToolbar>
                    </Navbar.Brand>

                </Navbar.Header>
            </Navbar>
        );
    }
}

export default Navigation;