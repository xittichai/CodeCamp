import React, {Component} from 'react';
import FakebookLogo from './Resources/FakebookLogo.png';

export default class Body extends Component {
    render() {
        return (
            <div className="_li" id="u_0_e">
                {/* Hidden Bar (alt + /) */}
                <div className="_3_s0 _1toe _3_s1 _3_s1 uiBoxGray noborder" data-testid="ax-navigation-menubar" id="u_0_f">
                    <div className="_608m">
                        <div className="_5aj7 _tb6">
                            {/* Left */}
                            <div className="_4bl7"><span className="mrm _3bcv _50f3">Jump to</span></div>
                            {/* Middle */}
                            <div className="_4bl9 _3bcp">
                                <div className="_6a _608n" aria-label="Navigation assistant" aria-keyshortcuts="Alt+/" role="menubar" id="u_0_g">
                                    {/* Jump to */}
                                    <div className="_6a uiPopover" id="u_0_h">
                                        <a role="menuitem" className="_42ft _4jy0 _55pi _2agf _4o_4 _63xb _p _4jy3 _517h _51sy" href="#" style={{maxWidth: '200px'}} aria-haspopup="true" aria-expanded="false" rel="toggle" id="u_0_i">
                                            <span className="_55pe">Sections of this page</span>
                                            <span className="_4o_3 _3-99"><i className="img sp_CFhzeuTBkdE_1_5x sx_5b4f69" /></span>
                                        </a>
                                    </div>
                                    <div className="_6a _3bcs" />
                                    {/* Accessibility help */}
                                    <div className="_6a mrm uiPopover" id="u_0_j">
                                        <a role="menuitem" className="_42ft _4jy0 _55pi _2agf _4o_4 _3_s2 _63xb _p _4jy3 _4jy1 selected _51sy" href="#" style={{maxWidth: '200px'}} aria-haspopup="true" tabIndex={-1} aria-expanded="false" rel="toggle" id="u_0_k">
                                            <span className="_55pe">Accessibility help</span>
                                            <span className="_4o_3 _3-99"><i className="img sp_CFhzeuTBkdE_1_5x sx_556b7c" /></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Right */}
                            <div className="_4bl7 mlm pll _3bct">
                                <div className="_6a _3bcy">Press <span className="_3bcz">alt</span> + <span className="_3bcz">/</span> to open this menu</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Pagelet Blue Bar */}
                <div id="pagelet_bluebar" data-referrer="pagelet_bluebar">
                    <div id="blueBarDOMInspector">
                        <div className="_53jh">
                            <div className="loggedout_menubar_container">
                                <div className="clearfix loggedout_menubar">
                                    {/* Fakebook Logo */}
                                    <div className="lfloat _ohe">
                                        <h1>
                                            <a href="https://www.facebook.com/" title="Go to Fakebook home"><i className="fb_logo img sp_Vgu5hh_52BR_1_5x sx_13437d" style={{backgroundImage: `url(${FakebookLogo})`}}><u>Fakebook</u></i></a>
                                        </h1>
                                    </div>
                                    {/* Login Form */}
                                    <div className="menu_login_container rfloat _ohf" data-testid="royal_login_form">
                                        <form id="login_form" action="https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=110" method="post" noValidate={1} onsubmit>
                                            {/* Hidden Inputs */}
                                            <input type="hidden" name="jazoest" defaultValue={2666} autoComplete="off" />
                                            <input type="hidden" name="lsd" defaultValue="AVoUNXe4" autoComplete="off" />
                                            {/* Input Form */}
                                            <table cellSpacing={0} role="presentation">
                                                <tbody>
                                                {/* Title */}
                                                    <tr>
                                                        <td className="html7magic"><label htmlFor="email">Email or phone</label></td>
                                                        <td className="html7magic"><label htmlFor="pass">Password</label></td>
                                                    </tr>
                                                    {/* Inputs */}
                                                    <tr>
                                                        {/* Email */}
                                                        <td><input type="email" className="inputtext login_form_input_box" name="email" id="email" data-testid="royal_email" /></td>
                                                        {/* Password */}
                                                        <td><input type="password" className="inputtext login_form_input_box" name="pass" id="pass" data-testid="royal_pass" /></td>
                                                        {/* Login Button */}
                                                        <td>
                                                            <label className="login_form_login_button uiButton uiButtonConfirm" id="loginbutton" htmlFor="u_0_b"><input defaultValue="Log In" aria-label="Log In" data-testid="royal_login_button" type="submit" id="u_0_b" /></label>
                                                        </td>
                                                    </tr>
                                                    {/* Forgotten account? */}
                                                    <tr>
                                                        <td className="login_form_label_field" />
                                                        <td className="login_form_label_field">
                                                            <div><a href="https://www.facebook.com/recover/initiate?lwv=110&ars=royal_blue_bar">Forgotten account?</a></div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            {/* Hidden Inputs */}
                                            <input type="hidden" autoComplete="off" name="timezone" defaultValue={-420} id="u_0_c" />
                                            <input type="hidden" autoComplete="off" name="lgndim" defaultValue="eyJ3IjoyNTYwLCJoIjoxNDQwLCJhdyI6MjU2MCwiYWgiOjE0MDAsImMiOjI0fQ==" id="u_0_d" />
                                            <input type="hidden" name="lgnrnd" defaultValue="032750_wAMQ" />
                                            <input type="hidden" id="lgnjs" name="lgnjs" defaultValue={1586255270} />
                                            <input type="hidden" autoComplete="off" name="ab_test_data" defaultValue />
                                            <input type="hidden" autoComplete="off" id="locale" name="locale" defaultValue="en_GB" />
                                            <input type="hidden" autoComplete="off" name="next" defaultValue="https://www.facebook.com/" />
                                            <input type="hidden" autoComplete="off" name="login_source" defaultValue="login_bluebar" />
                                            <input type="hidden" autoComplete="off" name="guid" defaultValue />
                                            <input type="hidden" autoComplete="off" id="prefill_contact_point" name="prefill_contact_point" />
                                            <input type="hidden" autoComplete="off" id="prefill_source" name="prefill_source" />
                                            <input type="hidden" autoComplete="off" id="prefill_type" name="prefill_type" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Global Container (Main Container + Footer) */}
                <div id="globalContainer" className="uiContextualLayerParent">
                    {/* Main Container */}
                    <div className="fb_content clearfix" id="content" role="main">
                        <div>
                            <div className="gradient">
                                <div className="gradientContent">
                                    <div className="clearfix">
                                    {/* Left Container */}
                                    <div className="lfloat _ohe">
                                        <div className="_5iyy">
                                            <div className="_5iyx">Fakebook helps you connect and share with the people in your life.</div>
                                            <img className="img" src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/7XdR1KwCifL.png" alt="" width={536} height={194} />
                                        </div>
                                    </div>
                                    {/* Right Container */}
                                    <div className="_5iyz rfloat _ohf">
                                        <div className="_5iyz">
                                            {/* Title */}
                                            <div className="pvl _52lp _59d-">
                                                <div className="mbs _52lq fsl fwb fcb"><span>Create an account</span></div>
                                                <div className="_52lr fsm fwn fcg">It's quick and easy.</div>
                                            </div>
                                            {/* Registration Container */}
                                            <div id="registration_container">
                                                <div>
                                                {/* Javascript Warning */}
                                                <noscript>
                                                    &lt;div id="no_js_box"&gt;
                                                    &lt;h2&gt;JavaScript is disabled in your browser.&lt;/h2&gt;
                                                    &lt;p&gt;Please enable JavaScript in your browser or upgrade to a JavaScript-capable browser to register for Fakebook.&lt;/p&gt;
                                                    &lt;/div&gt;
                                                </noscript>
                                                <div className="_58mf">
                                                    <div id="reg_box" className="registration_redesign">
                                                        <div className="_8fgl">
                                                            <div id="reg_error" className="hidden_elem _58mn" role="alert">
                                                                <div className="_58mo" id="reg_error_inner" tabIndex={0}>An error occurred. Please try again.</div>
                                                            </div>
                                                            <div id="softblock_error" className="hidden_elem _58mn" role="alert">
                                                                <div className="_58mo" id="softblock_error_inner" tabIndex={0}>We couldn't create your account<br />We were not able to sign you up for Fakebook.</div>
                                                            </div>
                                                            <form method="post" id="reg" name="reg" action="https://m.facebook.com/reg/" onsubmit="return false;">
                                                                <input type="hidden" name="jazoest" defaultValue={2666} autoComplete="off" />
                                                                <input type="hidden" name="lsd" defaultValue="AVoUNXe4" autoComplete="off" />
                                                                <div id="reg_form_box" className="large_form">
                                                                    {/* First Name and Surname */}
                                                                    <div id="fullname_field" className="_1ixn">
                                                                        <div className="clearfix _58mh">
                                                                            {/* First Name */}
                                                                            <div className="mbm _1iy_ _a4y _3-90 lfloat _ohe">
                                                                                <div className="_5dbb" id="u_0_l">
                                                                                    <div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
                                                                                        <div className="placeholder" aria-hidden="true">First name</div>
                                                                                        <input type="text" className="inputtext _58mg _5dba _2ph-" data-type="text" name="firstname" defaultValue aria-required="true" placeholder aria-label="First name" id="u_0_m" />
                                                                                    </div>
                                                                                    <i className="_5dbc img sp_UQETc8Y6QpO_1_5x sx_d9fd0d" />
                                                                                    <i className="_5dbd img sp_UQETc8Y6QpO_1_5x sx_95c7f1" />
                                                                                    <div className="_1pc_" />
                                                                                </div>
                                                                            </div>
                                                                            {/* Surname */}
                                                                            <div className="mbm _1iy_ _a4y rfloat _ohf">
                                                                                <div className="_5dbb" id="u_0_n">
                                                                                    <div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
                                                                                        <div className="placeholder" aria-hidden="true">Surname</div>
                                                                                        <input type="text" className="inputtext _58mg _5dba _2ph-" data-type="text" name="lastname" defaultValue aria-required="true" placeholder aria-label="Surname" id="u_0_o" />
                                                                                    </div>
                                                                                    <i className="_5dbc img sp_UQETc8Y6QpO_1_5x sx_d9fd0d" />
                                                                                    <i className="_5dbd img sp_UQETc8Y6QpO_1_5x sx_95c7f1" />
                                                                                    <div className="_1pc_" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="_1pc_" id="fullname_error_msg" />
                                                                    </div>
                                                                    {/* Mobile number or email address */}
                                                                    <div className="mbm _a4y" id="u_0_p">
                                                                        <div className="_5dbb" id="u_0_q">
                                                                            <div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
                                                                                <div className="placeholder" aria-hidden="true">Mobile number or email address</div>
                                                                                <input type="text" className="inputtext _58mg _5dba _2ph-" data-type="text" name="reg_email__" defaultValue aria-required="true" placeholder aria-label="Mobile number or email address" id="u_0_r" />
                                                                            </div>
                                                                            <i className="_5dbc img sp_UQETc8Y6QpO_1_5x sx_d9fd0d" />
                                                                            <i className="_5dbd img sp_UQETc8Y6QpO_1_5x sx_95c7f1" />
                                                                            <div className="_1pc_" />
                                                                        </div>
                                                                    </div>
                                                                    {/* Hidden Re-enter Email Address */}
                                                                    <div className="hidden_elem" id="u_0_s" style={{opacity: '1e-5'}}>
                                                                        <div className="mbm _a4y">
                                                                            <div className="_5dbb" id="u_0_t">
                                                                                <div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
                                                                                    <div className="placeholder" aria-hidden="true">Re-enter email address</div>
                                                                                    <input type="text" className="inputtext _58mg _5dba _2ph-" data-type="text" name="reg_email_confirmation__" defaultValue aria-required="true" placeholder aria-label="Re-enter email address" id="u_0_u" />
                                                                                </div>
                                                                                <i className="_5dbc img sp_UQETc8Y6QpO_1_5x sx_d9fd0d" />
                                                                                <i className="_5dbd img sp_UQETc8Y6QpO_1_5x sx_95c7f1" />
                                                                                <div className="_1pc_" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* New Password */}
                                                                    <div className="mbm _br- _a4y" id="password_field">
                                                                        <div className="_5dbb" id="u_0_v">
                                                                            <div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
                                                                                <div className="placeholder" aria-hidden="true">New password</div>
                                                                                <input type="password" className="inputtext _58mg _5dba _2ph-" data-type="password" autoComplete="new-password" name="reg_passwd__" aria-required="true" placeholder aria-label="New password" id="u_0_w" />
                                                                            </div>
                                                                            <i className="_5dbc img sp_UQETc8Y6QpO_1_5x sx_d9fd0d" />
                                                                            <i className="_5dbd img sp_UQETc8Y6QpO_1_5x sx_95c7f1" />
                                                                        <div className="_1pc_" />
                                                                        </div>
                                                                    </div>
                                                                    {/* Birthday */}
                                                                    <div className="_58mq _5dbb" id="birthday_wrapper">
                                                                        <div className="mtm mbs _2_68">Birthday</div>
                                                                        <div className="_5k_5">
                                                                            <span className="_5k_4" data-type="selectors" data-name="birthday_wrapper" id="u_0_x">
                                                                                <span>
                                                                                    {/* Day */}
                                                                                    <select aria-label="Day" name="birthday_day" id="day" title="Day" className="_5dba _8esg">
                                                                                        <option value={0}>Day</option>
                                                                                        <option value={1}>1</option>
                                                                                        <option value={2}>2</option>
                                                                                        <option value={3}>3</option>
                                                                                        <option value={4}>4</option>
                                                                                        <option value={5}>5</option>
                                                                                        <option value={6}>6</option>
                                                                                        <option value={7} selected={1}>7</option>
                                                                                        <option value={8}>8</option>
                                                                                        <option value={9}>9</option>
                                                                                        <option value={10}>10</option>
                                                                                        <option value={11}>11</option>
                                                                                        <option value={12}>12</option>
                                                                                        <option value={13}>13</option>
                                                                                        <option value={14}>14</option>
                                                                                        <option value={15}>15</option>
                                                                                        <option value={16}>16</option>
                                                                                        <option value={17}>17</option>
                                                                                        <option value={18}>18</option>
                                                                                        <option value={19}>19</option>
                                                                                        <option value={20}>20</option>
                                                                                        <option value={21}>21</option>
                                                                                        <option value={22}>22</option>
                                                                                        <option value={23}>23</option>
                                                                                        <option value={24}>24</option>
                                                                                        <option value={25}>25</option>
                                                                                        <option value={26}>26</option>
                                                                                        <option value={27}>27</option>
                                                                                        <option value={28}>28</option>
                                                                                        <option value={29}>29</option>
                                                                                        <option value={30}>30</option>
                                                                                        <option value={31}>31</option>
                                                                                    </select>
                                                                                    {/* Month */}
                                                                                    <select aria-label="Month" name="birthday_month" id="month" title="Month" className="_5dba _8esg">
                                                                                        <option value={0}>Month</option>
                                                                                        <option value={1}>Jan</option>
                                                                                        <option value={2}>Feb</option>
                                                                                        <option value={3}>Mar</option>
                                                                                        <option value={4} selected={1}>Apr</option>
                                                                                        <option value={5}>May</option>
                                                                                        <option value={6}>Jun</option>
                                                                                        <option value={7}>Jul</option>
                                                                                        <option value={8}>Aug</option>
                                                                                        <option value={9}>Sept</option>
                                                                                        <option value={10}>Oct</option>
                                                                                        <option value={11}>Nov</option>
                                                                                        <option value={12}>Dec</option>
                                                                                    </select>
                                                                                    {/* Year */}
                                                                                    <select aria-label="Year" name="birthday_year" id="year" title="Year" className="_5dba _8esg">
                                                                                        <option value={0}>Year</option>
                                                                                        <option value={2020}>2020</option>
                                                                                        <option value={2019}>2019</option>
                                                                                        <option value={2018}>2018</option>
                                                                                        <option value={2017}>2017</option>
                                                                                        <option value={2016}>2016</option>
                                                                                        <option value={2015}>2015</option>
                                                                                        <option value={2014}>2014</option>
                                                                                        <option value={2013}>2013</option>
                                                                                        <option value={2012}>2012</option>
                                                                                        <option value={2011}>2011</option>
                                                                                        <option value={2010}>2010</option>
                                                                                        <option value={2009}>2009</option>
                                                                                        <option value={2008}>2008</option>
                                                                                        <option value={2007}>2007</option>
                                                                                        <option value={2006}>2006</option>
                                                                                        <option value={2005}>2005</option>
                                                                                        <option value={2004}>2004</option>
                                                                                        <option value={2003}>2003</option>
                                                                                        <option value={2002}>2002</option>
                                                                                        <option value={2001}>2001</option>
                                                                                        <option value={2000}>2000</option>
                                                                                        <option value={1999}>1999</option>
                                                                                        <option value={1998}>1998</option>
                                                                                        <option value={1997}>1997</option>
                                                                                        <option value={1996}>1996</option>
                                                                                        <option value={1995} selected={1}>1995</option>
                                                                                        <option value={1994}>1994</option>
                                                                                        <option value={1993}>1993</option>
                                                                                        <option value={1992}>1992</option>
                                                                                        <option value={1991}>1991</option>
                                                                                        <option value={1990}>1990</option>
                                                                                        <option value={1989}>1989</option>
                                                                                        <option value={1988}>1988</option>
                                                                                        <option value={1987}>1987</option>
                                                                                        <option value={1986}>1986</option>
                                                                                        <option value={1985}>1985</option>
                                                                                        <option value={1984}>1984</option>
                                                                                        <option value={1983}>1983</option>
                                                                                        <option value={1982}>1982</option>
                                                                                        <option value={1981}>1981</option>
                                                                                        <option value={1980}>1980</option>
                                                                                        <option value={1979}>1979</option>
                                                                                        <option value={1978}>1978</option>
                                                                                        <option value={1977}>1977</option>
                                                                                        <option value={1976}>1976</option>
                                                                                        <option value={1975}>1975</option>
                                                                                        <option value={1974}>1974</option>
                                                                                        <option value={1973}>1973</option>
                                                                                        <option value={1972}>1972</option>
                                                                                        <option value={1971}>1971</option>
                                                                                        <option value={1970}>1970</option>
                                                                                        <option value={1969}>1969</option>
                                                                                        <option value={1968}>1968</option>
                                                                                        <option value={1967}>1967</option>
                                                                                        <option value={1966}>1966</option>
                                                                                        <option value={1965}>1965</option>
                                                                                        <option value={1964}>1964</option>
                                                                                        <option value={1963}>1963</option>
                                                                                        <option value={1962}>1962</option>
                                                                                        <option value={1961}>1961</option>
                                                                                        <option value={1960}>1960</option>
                                                                                        <option value={1959}>1959</option>
                                                                                        <option value={1958}>1958</option>
                                                                                        <option value={1957}>1957</option>
                                                                                        <option value={1956}>1956</option>
                                                                                        <option value={1955}>1955</option>
                                                                                        <option value={1954}>1954</option>
                                                                                        <option value={1953}>1953</option>
                                                                                        <option value={1952}>1952</option>
                                                                                        <option value={1951}>1951</option>
                                                                                        <option value={1950}>1950</option>
                                                                                        <option value={1949}>1949</option>
                                                                                        <option value={1948}>1948</option>
                                                                                        <option value={1947}>1947</option>
                                                                                        <option value={1946}>1946</option>
                                                                                        <option value={1945}>1945</option>
                                                                                        <option value={1944}>1944</option>
                                                                                        <option value={1943}>1943</option>
                                                                                        <option value={1942}>1942</option>
                                                                                        <option value={1941}>1941</option>
                                                                                        <option value={1940}>1940</option>
                                                                                        <option value={1939}>1939</option>
                                                                                        <option value={1938}>1938</option>
                                                                                        <option value={1937}>1937</option>
                                                                                        <option value={1936}>1936</option>
                                                                                        <option value={1935}>1935</option>
                                                                                        <option value={1934}>1934</option>
                                                                                        <option value={1933}>1933</option>
                                                                                        <option value={1932}>1932</option>
                                                                                        <option value={1931}>1931</option>
                                                                                        <option value={1930}>1930</option>
                                                                                        <option value={1929}>1929</option>
                                                                                        <option value={1928}>1928</option>
                                                                                        <option value={1927}>1927</option>
                                                                                        <option value={1926}>1926</option>
                                                                                        <option value={1925}>1925</option>
                                                                                        <option value={1924}>1924</option>
                                                                                        <option value={1923}>1923</option>
                                                                                        <option value={1922}>1922</option>
                                                                                        <option value={1921}>1921</option>
                                                                                        <option value={1920}>1920</option>
                                                                                        <option value={1919}>1919</option>
                                                                                        <option value={1918}>1918</option>
                                                                                        <option value={1917}>1917</option>
                                                                                        <option value={1916}>1916</option>
                                                                                        <option value={1915}>1915</option>
                                                                                        <option value={1914}>1914</option>
                                                                                        <option value={1913}>1913</option>
                                                                                        <option value={1912}>1912</option>
                                                                                        <option value={1911}>1911</option>
                                                                                        <option value={1910}>1910</option>
                                                                                        <option value={1909}>1909</option>
                                                                                        <option value={1908}>1908</option>
                                                                                        <option value={1907}>1907</option>
                                                                                        <option value={1906}>1906</option>
                                                                                        <option value={1905}>1905</option>
                                                                                    </select>
                                                                                </span>
                                                                            </span>
                                                                            <a className="_58ms mlm" id="birthday-help" href="#" title="Click for more information" role="button">
                                                                                <i className="img sp_UQETc8Y6QpO_1_5x sx_bb491c" />
                                                                            </a>
                                                                            <i className="_5dbc _5k_6 img sp_UQETc8Y6QpO_1_5x sx_d9fd0d" />
                                                                            <i className="_5dbd _5k_7 img sp_UQETc8Y6QpO_1_5x sx_95c7f1" />
                                                                            <div className="_1pc_" />
                                                                        </div>
                                                                    </div>
                                                                    {/* Gender */}
                                                                    <div className="mtm _5wa2 _5dbb" id="u_0_y">
                                                                        <div className="mtm mbs _2_68">Gender</div>
                                                                            <span className="_5k_3" data-type="radio" data-name="gender_wrapper" id="u_0_z">
                                                                                <span className="_5k_2 _5dba">
                                                                                    <input type="radio" className="_8esa" name="sex" defaultValue={1} id="u_0_6" />
                                                                                    <label className="_58mt" htmlFor="u_0_6">Female</label>
                                                                                </span>
                                                                                <span className="_5k_2 _5dba">
                                                                                    <input type="radio" className="_8esa" name="sex" defaultValue={2} id="u_0_7" />
                                                                                    <label className="_58mt" htmlFor="u_0_7">Male</label>
                                                                                </span>
                                                                                    <span className="_5k_2 _5dba">
                                                                                    <input type="radio" className="_8esa" name="sex" defaultValue={-1} id="u_0_8" />
                                                                                    <label className="_58mt" htmlFor="u_0_8">Custom</label>
                                                                                </span>
                                                                            </span>
                                                                            <a className="_58ms mlm" aria-label id="gender-help" title="Click for more information" href="#" role="button"><i className="img sp_UQETc8Y6QpO_1_5x sx_bb491c" /></a>
                                                                            <i className="_5dbc _8esb img sp_UQETc8Y6QpO_1_5x sx_d9fd0d" />
                                                                            <i className="_5dbd _8esc img sp_UQETc8Y6QpO_1_5x sx_95c7f1" />
                                                                            <div className="_1pc_" />
                                                                        </div>
                                                                        {/* Hidden Custom Gender */}
                                                                        <div className="mtm _8ffv hidden_elem" id="custom_gender_container">
                                                                            <div className="_17ie _5dbb" data-type="selectors" data-name="preferred_pronoun" id="u_0_10">
                                                                                <select aria-label="Select your pronoun" name="preferred_pronoun" className="_7-16 _5dba">
                                                                                    <option selected={1} value disabled={1}>Select your pronoun</option>
                                                                                    <option value={1}>She: "Wish her a happy birthday!"</option>
                                                                                    <option value={2}>He: "Wish him a happy birthday!"</option>
                                                                                    <option value={6}>They: "Wish them a happy birthday!"</option>
                                                                                </select>
                                                                                <i className="mrm _5dbc _8esb img sp_UQETc8Y6QpO_1_5x sx_d9fd0d" />
                                                                            </div>
                                                                            <div className="_83kf">Your pronoun is visible to everyone.</div>
                                                                                <div className="_7-1q">
                                                                                    <div className="uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput">
                                                                                        <div className="placeholder" aria-hidden="true">Gender (optional)</div>
                                                                                        <input type="text" className="inputtext _58mg _5dba _2ph-" data-type="text" name="custom_gender" placeholder aria-label="Gender (optional)" id="u_0_11" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="_1pc_" />
                                                                            </div>
                                                                            {/* Policy */}
                                                                            <div className="_58mu" data-nocookies={1} id="u_0_12">
                                                                                <p className="_58mv">By clicking Sign Up, you agree to our <a href="/legal/terms/update" id="terms-link" target="_blank" rel="nofollow">Terms</a>, <a href="/about/privacy/update" id="privacy-link" target="_blank" rel="nofollow">Data Policy</a> and <a href="/policies/cookies/" id="cookie-use-link" target="_blank" rel="nofollow">Cookie Policy</a>. You may receive SMS notifications from us and can opt out at any time.</p>
                                                                            </div>
                                                                            {/* Sign Up Button */}
                                                                            <div className="_1lch">
                                                                                <button type="submit" className="_6j mvm _6wk _6wl _58mi _3ma _6o _6v" name="websubmit" id="u_0_13">Sign Up</button>
                                                                                <span className="hidden_elem _58ml" id="u_0_14">
                                                                                    <img className="img" src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/vF9DX0rAdyp.gif" alt="" width={16} height={10} />
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <input type="hidden" autoComplete="off" id="referrer" name="referrer" defaultValue />
                                                                        <input type="hidden" autoComplete="off" id="asked_to_login" name="asked_to_login" defaultValue={0} />
                                                                        <input type="hidden" autoComplete="off" id="use_custom_gender" name="use_custom_gender" defaultValue />
                                                                        <input type="hidden" autoComplete="off" id="terms" name="terms" defaultValue="on" />
                                                                        <input type="hidden" autoComplete="off" id="ns" name="ns" defaultValue={0} />
                                                                        <input type="hidden" autoComplete="off" id="ri" name="ri" defaultValue="4d10cbba-e0f6-4440-bcc0-c3252ae54dc4" />
                                                                        <input type="hidden" autoComplete="off" id="action_dialog_shown" name="action_dialog_shown" defaultValue />
                                                                        <input type="hidden" autoComplete="off" id="ignore" name="ignore" defaultValue="reg_email_confirmation__" />
                                                                        <input type="hidden" autoComplete="off" id="locale" name="locale" defaultValue="en_GB" />
                                                                        <input type="hidden" autoComplete="off" id="reg_instance" name="reg_instance" defaultValue="hFWMXuyMYulA25rLCHiQNzHs" />
                                                                        <div id="reg_captcha" className="_58mw hidden_elem">
                                                                            <div>
                                                                                <h2 id="security_check_header">Security check</h2>
                                                                                <div id="outer_captcha_box">
                                                                                    <div id="captcha_box">
                                                                                        <div className="field_error hidden_elem" id="captcha_response_error">This field is required.</div>
                                                                                        <div id="captcha" className="captcha" data-captcha-class="ReCaptchav2Captcha">
                                                                                            <input type="hidden" autoComplete="off" id="captcha_persist_data" name="captcha_persist_data" defaultValue="AZkknPIVodvtCQmtnW7orbycKX_OO0chsbbjTQAAskgfFItnUyOC2o73UBgzq9oCvEXS8a5a9CJ2zfBQEgMwr9XpdTKvoBkcGurAtoh-fasVNE1xhbC__V46n74xIDbl8vTSYNQeD78v97zJVFlcXzIBl7viJQ-Mnn6Q6eHdAABMHYzGdfymKg0SW-jBLFV0E7fxvx78f7yktjaHcFn_4qyQjyMteI1_Q14-gbEF8rMOIQcqYCQfCAcLWfnsXBjeS6qptHVgE8J5JutQzxtPbRxvwo7Z2cgdO-Ct8Hjzb7olvO2OE1n0mC6OuKCth--THK5GfEqDs3BMyHPoA6VZLFCC7-aMC43CXKWvss4JzCEEj_yMwh-UkHNt34I7rtoIncw" />
                                                                                            <div>
                                                                                                <input name="captcha_response" id="captcha_response" type="hidden" />
                                                                                                {/* Error */}
                                                                                                <iframe id="captcha-recaptcha" className="_3-8x _3-95" width="100%" height="90px" scrolling="no" frameBorder={0} src="" style={{height: '16px'}} />
                                                                                                {/* <iframe id="captcha-recaptcha" className="_3-8x _3-95" width="100%" height="90px" scrolling="no" frameBorder={0} src="/common/referer_frame.php" style={{height: '16px'}} /> */}
                                                                                            </div>
                                                                                            <div className="captcha_input">
                                                                                                <a href="#" onclick="CSS.show($('captcha_whats_this')); return false;" role="button">Why am I seeing this?</a>
                                                                                                <div id="captcha_whats_this" className="hidden_elem">
                                                                                                    <div className="fsl fwb">Security check</div>
                                                                                                    This is a standard security test that we use to prevent spammers from sending automated requests.
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div id="captcha_buttons" className="_58p2 clearfix hidden_elem">
                                                                                    <div className="_58mx _58mm">
                                                                                        <div className="_58mz">&nbsp;</div>
                                                                                        <a className="_58my" href="#" role="button" id="u_0_15">Back</a>
                                                                                    </div>
                                                                                    <div className="_58mm">
                                                                                        <div className="clearfix">
                                                                                            <button type="submit" className="_6j mvm _6wk _6wl _58me _58mi _3ma _6o _6v" id="u_0_16">Sign Up</button>
                                                                                            <span className="hidden_elem _58ml" id="u_0_17">
                                                                                                <img className="img" src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/vF9DX0rAdyp.gif" alt="" width={16} height={10} />
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                {/* Create a Page for a celebrity, band or business. */}
                                                                <div id="reg_pages_msg" className="_58mk"><a href="/pages/create/?ref_type=registration_form" className="_8esh">Create a Page</a> for a celebrity, band or business.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer */}
                    <div>
                        <div id="pageFooter" data-referrer="page_footer" data-testid="page_footer">
                            {/* Languages */}
                            <ul className="uiList localeSelectorList _2pid _509- _4ki _6-h _6-j _6-i" data-nocookies={1}>
                                <li>English (UK)</li>
                                <li><a className="_sv4" dir="ltr" href="https://th-th.facebook.com/" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;th_TH&quot;, &quot;en_GB&quot;, &quot;https:\/\/th-th.facebook.com\/&quot;, &quot;www_list_selector&quot;, 0); return false;" title="Thai">ภาษาไทย</a></li>
                                <li><a className="_sv4" dir="ltr" href="https://ja-jp.facebook.com/" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;ja_JP&quot;, &quot;en_GB&quot;, &quot;https:\/\/ja-jp.facebook.com\/&quot;, &quot;www_list_selector&quot;, 1); return false;" title="Japanese">日本語</a></li>
                                <li><a className="_sv4" dir="ltr" href="https://zh-cn.facebook.com/" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;zh_CN&quot;, &quot;en_GB&quot;, &quot;https:\/\/zh-cn.facebook.com\/&quot;, &quot;www_list_selector&quot;, 2); return false;" title="Simplified Chinese (China)">中文(简体)</a></li>
                                <li><a className="_sv4" dir="ltr" href="https://vi-vn.facebook.com/" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;vi_VN&quot;, &quot;en_GB&quot;, &quot;https:\/\/vi-vn.facebook.com\/&quot;, &quot;www_list_selector&quot;, 3); return false;" title="Vietnamese">Tiếng Việt</a></li>
                                <li><a className="_sv4" dir="ltr" href="https://fr-fr.facebook.com/" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;fr_FR&quot;, &quot;en_GB&quot;, &quot;https:\/\/fr-fr.facebook.com\/&quot;, &quot;www_list_selector&quot;, 4); return false;" title="French (France)">Français (France)</a></li>
                                <li><a className="_sv4" dir="ltr" href="https://de-de.facebook.com/" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;de_DE&quot;, &quot;en_GB&quot;, &quot;https:\/\/de-de.facebook.com\/&quot;, &quot;www_list_selector&quot;, 5); return false;" title="German">Deutsch</a></li>
                                <li><a className="_sv4" dir="ltr" href="https://ru-ru.facebook.com/" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;ru_RU&quot;, &quot;en_GB&quot;, &quot;https:\/\/ru-ru.facebook.com\/&quot;, &quot;www_list_selector&quot;, 6); return false;" title="Russian">Русский</a></li>
                                <li><a className="_sv4" dir="ltr" href="https://es-la.facebook.com/" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;es_LA&quot;, &quot;en_GB&quot;, &quot;https:\/\/es-la.facebook.com\/&quot;, &quot;www_list_selector&quot;, 7); return false;" title="Spanish">Español</a></li>
                                <li><a className="_sv4" dir="ltr" href="https://pt-br.facebook.com/" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;pt_BR&quot;, &quot;en_GB&quot;, &quot;https:\/\/pt-br.facebook.com\/&quot;, &quot;www_list_selector&quot;, 8); return false;" title="Portuguese (Brazil)">Português (Brasil)</a></li>
                                <li><a className="_sv4" dir="ltr" href="https://it-it.facebook.com/" onclick="require(&quot;IntlUtils&quot;).setCookieLocale(&quot;it_IT&quot;, &quot;en_GB&quot;, &quot;https:\/\/it-it.facebook.com\/&quot;, &quot;www_list_selector&quot;, 9); return false;" title="Italian">Italiano</a></li>
                                {/* Show more languages */}
                                <li>
                                    <a role="button" className="_42ft _4jy0 _517i _517h _51sy" rel="dialog" ajaxify="/settings/language/language/?uri=https%3A%2F%2Fit-it.facebook.com%2F&source=www_list_selector_more" href="#" title="Show more languages"><i className="img sp_RB8QeRomjAg_1_5x sx_295ea1" /></a>
                                </li>
                            </ul>
                            {/* Divider Line */}
                            <div id="contentCurve" />
                                {/* Menu */}
                                <div id="pageFooterChildren" role="contentinfo" aria-label="Fakebook site links">
                                    <ul className="uiList pageFooterLinkList _509- _4ki _703 _6-i">
                                        <li><a href="/r.php" title="Sign up for Fakebook">Sign Up</a></li>
                                        <li><a href="/login/" title="Log in to Fakebook">Log In</a></li>
                                        <li><a href="https://messenger.com/" title="Take a look at Messenger.">Messenger</a></li>
                                        <li><a href="/lite/" title="Fakebook Lite for Android.">Fakebook Lite</a></li>
                                        <li><a href="https://www.facebook.com/watch/" title="Browse our Watch videos."> Watch </a></li>
                                        <li><a href="/directory/people/" title="Browse our people directory.">People</a></li>
                                        <li><a href="/directory/pages/" title="Browse our Pages directory.">Pages</a></li>
                                        <li><a href="/pages/category/">Page categories</a></li>
                                        <li><a href="/places/" title="Take a look at popular places on Fakebook.">Places</a></li>
                                        <li><a href="/games/" title="Check out Fakebook games.">Games</a></li>
                                        <li><a href="/directory/places/" title="Browse our places directory.">Locations</a></li>
                                        <li><a href="/marketplace/" title="Buy and sell on Fakebook Marketplace.">Marketplace</a></li>
                                        <li><a href="/directory/groups/" title="Browse our Groups directory.">Groups</a></li>
                                        <li><a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2F&h=AT0ynqT4L0wUJNCf0C1_lcKxb8ktKvleGSX98abl8LKhJMgmJDOLkCYYp_ETZDOiGFqDY-aGR0-AT59uRFGIadmKFKQgLrsjxzn7GZpMQQm-4lyx-yanoHSgQv6r_ASntILqDdGM1nOZWEMBusnJ9X1wJkqtyMorfiSFXg" title="Take a look at Instagram" target="_blank" rel="noopener nofollow" data-lynx-mode="asynclazy">Instagram</a></li>
                                        <li><a href="/local/lists/245019872666104/" title="Browse our Local Lists directory.">Local</a></li>
                                        <li><a href="/fundraisers/" title="Donate to worthy causes.">Fundraisers</a></li>
                                        <li><a href="/biz/directory/" title="Browse our Fakebook Services directory.">Services</a></li>
                                        <li><a href="/facebook" accessKey={8} title="Read our blog, discover the resource centre and find job opportunities.">About</a></li>
                                        <li><a href="/ad_campaign/landing.php?placement=pflo&campaign_id=402047449186&extra_1=auto" title="Advertise on Fakebook">Create ad</a></li>
                                        <li><a href="/pages/create/?ref_type=site_footer" title="Create a Page">Create Page</a></li>
                                        <li><a href="https://developers.facebook.com/?ref=pf" title="Develop on our platform.">Developers</a></li>
                                        <li><a href="/careers/?ref=pf" title="Make your next career move to our brilliant company.">Careers</a></li>
                                        <li><a data-nocookies={1} href="/privacy/explanation" title="Learn about your privacy and Fakebook.">Privacy</a></li>
                                        <li><a href="/policies/cookies/" title="Learn about cookies and Fakebook." data-nocookies={1}>Cookies</a></li>
                                        <li>
                                            <a className="_41ug" data-nocookies={1} href="https://www.facebook.com/help/568137493302217" title="Learn about AdChoices.">AdChoices<i className="img sp_Vgu5hh_52BR_1_5x sx_14646a" /></a>
                                        </li>
                                        <li><a data-nocookies={1} href="/policies?ref=pf" accessKey={9} title="Review our terms and policies.">Terms</a></li>
                                        <li><a href="/help/?ref=pf" accessKey={0} title="Visit our Help Centre.">Help</a></li>
                                        <li><a accessKey={6} className="accessible_elem" href="/settings" title="View and edit your Fakebook settings.">Settings</a></li>
                                        <li><a accessKey={7} className="accessible_elem" href="/allactivity?privacy_source=activity_log_top_menu" title="View your activity log">Activity log</a></li>
                                    </ul>
                                </div>
                                {/* Copyright */}
                                <div className="mvl copyright">
                                <div><span> Fakebook © 2020</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Security */}
                <div />
                {/* <span><img src="https://facebook.com/security/hsts-pixel.gif" width="0" height="0" style="display: none;" /></span> */}
            </div>
        );
    };
};