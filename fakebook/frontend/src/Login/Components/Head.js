import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class Head extends Component {
    render() {
        return (
            <Helmet>
                {/* <html> attributes */}
                <html lang='en' id='facebook' class='canHaveFixedElements' />
                {/* <head> body */}
                <noscript>{`<meta http-equiv="refresh" content="0; URL=/?_fb_noscript=1" />`}</noscript>
                <title id='pageTitle'>Fakebook – log in or sign up</title>
                <link rel='alternate' media='only screen and (max-width: 640px)' href='https://m.facebook.com/' />
                <link rel='alternate' media='handheld' href='https://m.facebook.com/' />
                <link rel='shortcut icon' href='https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico' />
                <link type='text/css' rel='stylesheet' href='https://static.xx.fbcdn.net/rsrc.php/v3/yV/l/0,cross/Vih7hlZ06Is.css?_nc_x=Ij3Wp8lg5Kz' data-bootloader-hash='AuXnS' crossorigin='anonymous' />
                <link type='text/css' rel='stylesheet' href='https://static.xx.fbcdn.net/rsrc.php/v3/yw/l/0,cross/ID1XpzG-Cup.css?_nc_x=Ij3Wp8lg5Kz' data-bootloader-hash='OW++J' crossorigin='anonymous' />
                <link type='text/css' rel='stylesheet' href='https://static.xx.fbcdn.net/rsrc.php/v3/yv/l/0,cross/6g-a6Kx-0Fh.css?_nc_x=Ij3Wp8lg5Kz' data-bootloader-hash='p1POO' crossorigin='anonymous' />
                <link type='text/css' rel='stylesheet' href='https://static.xx.fbcdn.net/rsrc.php/v3/yD/l/0,cross/ZLoySGnI-NM.css?_nc_x=Ij3Wp8lg5Kz' data-bootloader-hash='kmhKG' crossorigin='anonymous' />
                <link type='text/css' rel='stylesheet' href='https://static.xx.fbcdn.net/rsrc.php/v3/ya/l/0,cross/7bL9diyJqTi.css?_nc_x=Ij3Wp8lg5Kz' data-bootloader-hash='LaEbk' crossorigin='anonymous' />
                <link type='text/css' rel='stylesheet' href='https://static.xx.fbcdn.net/rsrc.php/v3/yD/l/0,cross/e6WsTqrdTbj.css?_nc_x=Ij3Wp8lg5Kz' data-bootloader-hash='Ba4y0' crossorigin='anonymous' />
                <link type='text/css' rel='stylesheet' href='https://static.xx.fbcdn.net/rsrc.php/v3/yZ/l/0,cross/uAGCaZ9c_VC.css?_nc_x=Ij3Wp8lg5Kz' data-bootloader-hash='YKO25' crossorigin='anonymous' />
                <link type='text/css' rel='stylesheet' href='https://static.xx.fbcdn.net/rsrc.php/v3/y2/l/0,cross/lZ86cv9aR90.css?_nc_x=Ij3Wp8lg5Kz' data-bootloader-hash='f+J2L' crossorigin='anonymous' />
                {/* <body> attributes */}
                <body class='fbIndex UIPage_LoggedOut _-kb _605a b_c3pyn-ahh chrome webkit win x1-5 Locale_en_GB cores-gte4 _19_u hasAXNavMenubar' dir='ltr' />
            </Helmet>
        );
    };
};