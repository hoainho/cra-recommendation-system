import {React, Component } from 'react';
import Logo from '../image/logo.png';
   
export default class navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isActive : false
        };
    }
    render(){
        return (
            <div className="navbar">
                <div className="navbar-clone">
    
                </div>
                <div className="heading">
                <div className="container">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 navbar-display--contact">
                        <div className="navbar-display--contact_name">
                            <i className="fas fa-signature header-slogan"></i>
                            <span className="header-slogan"> 707 TEAM</span>
                        </div>
                        <div className="navbar-display--contact_search">
                            <a href="/"><i className="fas fa-search "></i></a>
                        </div>
                    </div>
                    <div className="row navbar-display--toolstrip">
                        
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 navbar-display--toolstrip_logo">
                            <img className="navbar-display--toolstrip_logo__img" src={Logo} alt="icon"/>
                        </div>
                        
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 navbar-display--toolstrip_content">
                            
                            <ul className="nav navbar-display--toolstrip_content__list">
                                <li className="list-group-item navbar-display--toolstrip_content__item">
                                    <a className="navbar-display--toolstrip_content__link"  href="/">Home</a>
                                </li>
                                <li className="list-group-item navbar-display--toolstrip_content__item">
                                    <a className="navbar-display--toolstrip_content__link"  href="/">Home</a>
                                </li>
                                <li className="list-group-item navbar-display--toolstrip_content__item">
                                    <a className="navbar-display--toolstrip_content__link"  href="/">Home</a>
                                </li>
                                <li className="list-group-item navbar-display--toolstrip_content__item">
                                    <a className="navbar-display--toolstrip_content__link"  href="/">Home</a>
                                </li>
                            </ul>
                            
                        </div>
                        
                    </div>
                </div>
            
                </div>
            </div>
        );
    }
}
