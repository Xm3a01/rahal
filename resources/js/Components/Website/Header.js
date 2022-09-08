import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Header = () => {
    return (
        <>
            <header id="header" className="u-header u-header--abs-top-xl u-header--white-nav-links-xl u-header--bg-transparent-xl u-header--show-hide-xl" data-header-fix-moment="500" data-header-fix-effect="slide">
                <div className="u-header__section u-header__shadow-on-show-hide  py-xl-0">
                    <div id="logoAndNav" className="container">
                        <nav className="js-mega-menu navbar navbar-expand-xl u-header__navbar u-header__navbar--no-space">
                            <a className="navbar-brand u-header__navbar-brand-default u-header__navbar-brand-center u-header__navbar-brand-text-white" href="index.html" aria-label="MyTravel">
                                <img src="assets/img/logo.png" />
                            </a>

                            <a className="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-collapsed" href="index.html" aria-label="MyTravel">
                                <img src="assets/img/logo.png" />

                            </a>

                            <a className="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-on-scroll" href="index.html" aria-label="MyTravel">
                                <img src="assets/img/logo.png" />

                            </a>

                            <button type="button" className="navbar-toggler btn u-hamburger u-hamburger--primary order-2 ml-3" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
                                <span id="hamburgerTrigger" className="u-hamburger__box">
                                    <span className="u-hamburger__inner"></span>
                                </span>
                            </button>

                            <div id="navBar" className="navbar-collapse u-header__navbar-collapse collapse order-2 order-xl-0  p-xl-0 position-relative">
                                <ul className="navbar-nav u-header__navbar-nav">
                                    <li className="nav-item  u-header__nav-item" >
                                        <Link className="nav-link u-header__nav-link u-header__nav-link-toggle u-header__nav-link-border" href="index.html">الرئيسية</Link>
                                    </li>

                                    <li className="nav-item  u-header__nav-item" >
                                        <Link className="nav-link u-header__nav-link u-header__nav-link-toggle u-header__nav-link-border" href="tours.html">رحلات الرحال الصغير</Link>

                                    </li>

                                    <li className="nav-item  u-header__nav-item" >
                                        <Link className="nav-link u-header__nav-link u-header__nav-link-toggle u-header__nav-link-border" href="cards.html">بطاقة أقامة رحلة</Link>

                                    </li>  <li className="nav-item  u-header__nav-item" >
                                        <Link className="nav-link u-header__nav-link u-header__nav-link-toggle u-header__nav-link-border" href="tours2.html">أماكن الرحلات</Link>

                                    </li>
                                    <li className="nav-item  u-header__nav-item" >
                                        <Link className="nav-link u-header__nav-link u-header__nav-link-toggle u-header__nav-link-border" href="blog.html">الملفات الأثرائية</Link>

                                    </li>
                                    <li className="nav-item  u-header__nav-item" >
                                        <Link className="nav-link u-header__nav-link u-header__nav-link-toggle u-header__nav-link-border" href="testimonial.html">مشاركة التجارب</Link>

                                    </li>
                                    <li className="nav-item  u-header__nav-item" >
                                        <Link className="nav-link u-header__nav-link u-header__nav-link-toggle u-header__nav-link-border" href="contact.html">تواصل معنا</Link>

                                    </li>
                                </ul>
                            </div>
                            <div className="pl-2 pl-md-4 ml-auto shopping-cart">
                                <Link id="shoppingCartDropdownInvoker" className="btn-text-secondary py-4 position-relative" href="javascript:;" role="button" aria-controls="shoppingCartDropdown" aria-haspopup="true" aria-expanded="false" data-unfold-event="hover" data-unfold-target="#shoppingCartDropdown" data-unfold-type="css-animation" data-unfold-duration="300" data-unfold-delay="300" data-unfold-hide-on-scroll="true" data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">
                                    <span className="flaticon-shopping-basket font-size-25 text-primary-max-lg"></span>
                                </Link>
                                <div id="shoppingCartDropdown" className="dropdown-menu dropdown-unfold dropdown-menu-right p-0 mt-0 w-max-sm-100 u-unfold--css-animation font-size-16 style-coustum"
                                    aria-labelledby="shoppingCartDropdownInvoker">
                                    <div className="card">
                                        <div className="card-header border-color-8 py-3 bg-pink px-5">
                                            <span className="font-weight-semi-bold">سلة الشراء</span>
                                        </div>

                                        <div className="card-body p-0">
                                            <div className="px-2 px-md-3 py-2 py-md-1 border-bottom border-color-8">
                                                <div className="media p-2 p-md-3">
                                                    <div className="u-avatar u-lg-avatar-md mr-2 mr-md-3">
                                                        <img className="img-fluid rounded-pill" src="/assets/img/80x80/img1.jpg" alt="Image Description"></img>
                                                    </div>

                                                    <div className="media-body position-relative pl-md-1">
                                                    <div className="d-flex justify-content-between align-items-start mb-2 mb-md-3">
                                                        <span className="d-block text-dark font-weight-bold">رحلة سياحية للمادليف بافضل الاسعار</span>
                                                        <button type="button" className="close close-rounded position-md-absolute right-0 ml-2" aria-label="Close">
                                                            <i className="fas fa-trash"></i>
                                                        </button>
                                                    </div>
                                                    <span className="d-block text-gray-1">السعر  £590.00 </span>
                                                </div>

                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pl-4 ml-1 u-header__last-item-btn u-header__last-item-btn-xl">
                            <a className="btn btn-wide rounded-xs btn-primary transition-3d-hover" href="login.html"><i className="flaticon-user ml-2"></i> انضم الينا</a>
                        </div>
                        </nav>
                    </div>

                </div>
            </header >
        </>
    )
}

export default Header;