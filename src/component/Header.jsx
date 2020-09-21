import React, {Component} from 'react';
import Moment from 'moment';
import '../css/header.css';

class Header extends Component {
    render() {
        let ina = require('moment/locale/en-in');
        Moment.updateLocale('en-in', ina);
        return (
            <div>
                <h3>Daily Activity Aplication</h3>
                <p >{Moment().format('dddd')},
                    {Moment().format('LLL')}</p>
            </div>
        )
    }

}

export default Header;