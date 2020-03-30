import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Resume.css';
import ProfilePicture from './ProfilePicture.jpg'

class Resume extends Component {
    render = () =>
    <div>
    <Link to='/'>Back</Link><br/>
    <div className="profile-header">
    <div><img src={ProfilePicture} style={{width: '10vw', borderRadius: '5%', boxShadow: 'gray 2px 2px 2px', marginTop: '22px'}} /></div>
    <div style={{marginLeft: '10px'}}>
    <h1>SITTICHAI NANTHANASIT</h1>
    <p>Pak Kret, Nonthaburi, Thailand<br />sittichai@nanthanasit.com<br />Mobile: +66816153178</p>
    </div>
    </div>
    <div className="profile-content">
    {/* Experience */}
    <h2>EXPERIENCE</h2>
    {/* HEAD OF MERCHANDISE - SOFTLINE CONSIGNMENT */}
    <hr />
    <h3>HEAD OF MERCHANDISE - SOFTLINE CONSIGNMENT</h3>
    <p>Company Name: CRC Sports Co., Ltd.<br /> Dates Employed: Nov 2019 – Jan 2020<br /> Employment Duration: 3 months<br /> Location: Bangkok, Thailand<br /> Business: Sports Multi Brand Retail Stores (Super Sports)<br /> Responsibility:
    <br /> Conduct team to:<br />
    </p>
    <ul>
    <li>Develop sales, margin, and other income projection to acheive the targets</li>
    <li>Planned and implemented merchandising strategies such as product lunching, pricing, promotion, etc.</li>
    <li>Contact suppliers to acquire new brands or new products to maximize sales and profit</li>
    <li>Analysed sales performance of products in term of sales, profit, and sell through</li>
    <li>Set sale promotions to maximize sales, profit, and to achieve sell through target</li>
    <li>Ensure appropriate product communication thru visual merchandise and POP
    </li>
    </ul>
    <p>Worked with suppliers to:</p>
    <ul>
    <li>Ensured products launched properly in term of collection and timing</li>
    <li>Managed ready good orders to achieve appropriate delivery timing and quantity</li>
    <li>Managed product distribution: allocation, replenishment, and transfer</li>
    </ul>
    {/* HEAD OF BRAND OPERATIONS AND VISUAL MERCHANDISING */}
    <hr />
    <h3>HEAD OF BRAND OPERATIONS AND VISUAL MERCHANDISING</h3>
    <p>Company Name: MK Co., Ltd. (Myanmar)<br /> Dates Employed: March 2019 – October 2019<br /> Employment Duration: 8 months<br /> Location: Yangon, Myanmar<br /> Business: Multi Fashion Brand Retail Stores (Under Armour, Puma, Reebok, Kipling, Wacoal,
    etc.)
    <br /> Responsibility:
    <br /> Conduct brand team to: <br />
    </p>
    <ul>
    <li>Develop sales, stock, and OTB projection to achieve the targets</li>
    <li>Planned and implemented merchandising strategies such as product lunching, pricing, promotion, etc.</li>
    <li>Set collection combination in term of quantity and number of lines by sales location and launching schedule</li>
    <li>Ensured products launched properly in term of collection and timing</li>
    <li>Analyzed sales performance of products in term of sales, profit, and sell through </li>
    <li>Set sale promotions to maximize sales, profit, and to achieve sell through target</li>
    <li>Ensure appropriate product communication thru visual merchandise and POP</li>
    <li>Managed ready good orders to achieve appropriate delivery timing and quantity</li>
    <li>Managed product distribution: allocation, replenishment, and transfer</li>
    </ul>
    {/* MERCHANDISING MANAGER */}
    <hr />
    <h3>MERCHANDISING MANAGER</h3>
    <p>Company Name: UA Sports (Thailand) Co., Ltd.<br /> Dates Employed: May 2018 – January 2019<br /> Employment Duration: 9 months<br /> Location: Wattana, Bangkok, Thailand<br /> Business: Apparels, Footwears, and Accessories (Under Amour Brand)<br /> Responsibility:
    </p>
    <ul>
    <li>Planned and implemented merchandising strategy to achieve the targets</li>
    <li>Set collection combination in term of quantity and number of lines by sales location and launching schedule</li>
    <li>Ensured products launched properly in term of collection and timing</li>
    <li>Analyzed sales performance of products in term of sales, profit, and sell through </li>
    <li>Set sale promotions to maximize sales, profit, and to achieve sell through target</li>
    <li>Worked with marketing department and retail department to ensure appropriate product communication thru visual merchandise and POP</li>
    <li>Managed ready good orders to achieve appropriate delivery timing and quantity</li>
    <li>Managed product distribution: allocation, replenishment, and transfer</li>
    </ul>
    {/* CHIEF MERCHANDISING MANAGER */}
    <hr />
    <h3>CHIEF MERCHANDISING MANAGER</h3>
    <p>Company Name: Bata (Thailand) Co., Ltd.<br /> Dates Employed: March 2017 – April 2018<br /> Employment Duration: 1 year<br /> Location: Bang Na, Bangkok, Thailand<br /> Business: Produce and sell footwears (Bata Brand)<br /> Responsibility:
    </p>
    <ul>
    <li>Set merchandising targets: sales growth, margin, and ROI</li>
    <li>Planned and implemented merchandising strategy to achieve the targets</li>
    <li>Set collection combination in term of product category, price points, number of lines, and distribution by selling period</li>
    <li>Set sale promotions to maximize sales, profit, and to control age of merchandises</li>
    <li>Worked with marketing department and retail department to ensure appropriate product communication thru visual merchandise and POP</li>
    <li>Managed ready good orders to achieve appropriate delivery timing and quantity</li>
    <li>Managed product distribution: allocation, replenishment, and transfer</li>
    <li>Set weekly own factory production plan considering product launching, production capacity, and material delivery</li>
    <li>Overseen shipping and custom clearance of imported ready goods and store furniture</li>
    </ul>
    {/* MERCHANDISE PLANNING MANAGER */}
    <hr />
    <h3>MERCHANDISE PLANNING MANAGER</h3>
    <p>Company Name: Bata (Thailand) Co., Ltd.<br /> Dates Employed: March 2016 – March 2017<br /> Employment Duration: 1 year 1 month<br /> Location: Bang Na, Bangkok, Thailand<br /> Business: Produce and sell footwears (Bata Brand)<br /> Responsibility:
    </p>
    <ul>
    <li>Set merchandising targets: sales growth, margin, and ROI</li>
    <li>Planned and implemented merchandising strategy to achieve the targets</li>
    <li>Worked with buyers to determine proper order quantity</li>
    <li>Managed product distribution: allocation, replenishment, and transfer</li>
    <li>Set weekly own factory production plan considering product launching, production capacity, and material delivery</li>
    <li>Overseen shipping and custom clearance of imported ready goods and store furniture</li>
    </ul>
    {/* STORE OPERATIONS MANAGER */}
    <hr />
    <h3>STORE OPERATIONS MANAGER</h3>
    <p>Company Name: Bata (Thailand) Co., Ltd.<br /> Dates Employed: March 2014 – March 2016<br /> Employment Duration: 2 years 1 month<br /> Location: Bang Na, Bangkok, Thailand<br /> Business: Produce and sell footwears (Bata Brand)<br /> Responsibility:
    <br />
    </p>
    <ul>
    <li>Set by-store sales targets and KPI's</li>
    <li>Planned and implemented operations strategy to achieve the targets</li>
    <li>Ensured appropriate procedures were followed by district managers, store managers, and sales staffs</li>
    <li>Responsible for profit of the stores</li>
    <li>Managed sales team to deliver best customer service</li>
    <li>Worked with merchandising team to ensure proper stock level and combination in each store</li>
    <li>Defined new store location and store layout</li>
    <li>Find new opportunities: new stores and fairs</li>
    </ul>
    {/* IT MANAGER */}
    <hr />
    <h3>IT MANAGER</h3>
    <p>Company Name: Bata (Thailand) Co., Ltd.<br /> Dates Employed: October 2009 – March 2014<br /> Employment Duration: 4 years 6 months<br /> Location: Bang Na, Bangkok, Thailand<br /> Business: Produce and sell footwears (Bata Brand)<br /> Responsibility:
    </p>
    <ul>
    <li>Lead developer team to develop and maintenance applications for the company using Oracle, MS SQL, VB, COBOL, Java, and PHP</li>
    <li>Analyzed with other departments to advise efficient working procedures</li>
    <li>Ensured availability and security of the server systems: VMware, MS Server, UNIX, and Linux</li>
    <li>Ensured availability and security of the network system: router, firewall, WIFI roaming, Cisco switch, domain server, and etc.</li>
    <li>Negotiated best price, quality, and service from IT hardware, software, and service providers</li>
    <li>Managed IT hardware and software license asset</li>
    </ul>
    {/* OTB MANAGER */}
    <hr />
    <h3>OTB MANAGER</h3>
    <p>Company Name: Bata (Thailand) Co., Ltd.<br /> Dates Employed: April 2008 – October 2009<br /> Employment Duration: 1 year 7 months<br /> Location: Bang Na, Bangkok, Thailand<br /> Business: Produce and sell footwears (Bata Brand)<br /> Responsibility:
    </p>
    <ul>
    <li>Set company stock and OTB target to maximize profit and ROI</li>
    <li>Worked with merchandising manager to set category-wise targets in term of sales, margins, and stock</li>
    <li>Set OTB budget by product category and sales period</li>
    <li>Worked with buyers to set purchasing and distribution strategy to achieve the target, monitor key indexes, analyze, adapt the strategy, and control good purchasing to make sure that the company with achieve the targets such as sales, margin,
    stock, and age of merchandises</li>
    <li>Controlled OTB according to the budget</li>
    <li>Provided merchandising and sales information, analysis, and recommendations for merchandising department, sales department, and managements</li>
    </ul>
    {/* BUYER */}
    <hr />
    <h3>BUYER</h3>
    <p>Company Name: Bata (Thailand) Co., Ltd.<br /> Dates Employed: July 2007 – April 2008<br /> Employment Duration: 10 months<br /> Location: Bang Na, Bangkok, Thailand<br /> Business: Produce and sell footwears (Bata Brand)<br /> Responsibility:
    </p>
    <ul>
    <li>In charge of athletics shoes</li>
    <li>Managed marketing, purchasing, and distribution</li>
    <li>Contacted with suppliers for the best price, quality, and delivery</li>
    <li>Analyzed market and customer trend to select or design the right products</li>
    <li>Determined appreciate order quantity</li>
    <li>Ensured on time delivery with right quality</li>
    <li>Set price, launching, and promotions</li>
    <li>Responsible for distribution and replenishment</li>
    </ul>
    {/* MARKETING MANAGER */}
    <hr />
    <h3>MARKETING MANAGER</h3>
    <p>Company Name: Nam Nueng Marketing Co., Ltd.<br /> Dates Employed: January 2004 – July 2007<br /> Employment Duration: 3 years 7 months<br /> Location: Sathon, Bangkok, Thailand<br /> Business: Produce and sell apparels (Wholesale and Retail)<br /> Responsibility:
    </p>
    <ul>
    <li>Developed and implemented appropriate marketing strategies</li>
    <li>Set goals for sales, margin, and growth</li>
    <li>In charge of product development</li>
    <li>Determined and made decisions regarding production and purchasing quantity considering demand and timing</li>
    <li>Managed distribution channels: retail shops and wholesalers</li>
    <li>Responsible for advertising and sales promotion</li>
    </ul>
    {/* MARKETING OFFICER */}
    <hr />
    <h3>MARKETING OFFICER</h3>
    <p>Company Name: Bara Leasing Co., Ltd.<br /> Dates Employed: April 1996 – January 2004<br /> Employment Duration: 7 years 10 months<br /> Location: Rama 4, Bangkok, Thailand<br /> Business: Car Leasing<br /> Responsibility:
    </p>
    <ul>
    <li>Checked and proceeded loan applications </li>
    <li>Assessed loan requests and credit through interviews with applicants and checking application forms, references, credit information, pay slips, and other information</li>
    <li>Recommended approval of loans</li>
    <li>Responsible for the department's marketing plan</li>
    </ul>
    {/* ASSISTANT FINANCIAL MANAGER */}
    <hr />
    <h3>ASSISTANT FINANCIAL MANAGER</h3>
    <p>Company Name: Hi-Tech Medical Hospital Co., Ltd.<br /> Dates Employed: January 1995 – December 1995<br /> Employment Duration: 12 months<br /> Location: Muang Nonthaburi, Nonthaburi, Thailand<br /> Business: Hospital<br /> Responsibility:
    </p>
    <ul>
    <li>Received and recorded invoices and arranged payments</li>
    <li>Calculated and distributed wages and salaries</li>
    <li>Responsible for firm’s computer databases</li>
    <li>Developed applications to use in the department by using dBase</li>
    <li>In charge of computer graphic for printing medias and documents</li>
    </ul>
    {/* EDUCATION */}
    <h2>EDUCATION</h2>
    {/* UNIVERSITY OF THE THAI CHAMBER OF COMMERCE */}
    <hr />
    <h3>UNIVERSITY OF THE THAI CHAMBER OF COMMERCE</h3>
    <p>Degree Name: Master of Business Administration - MBA<br /> Field Of Study: International Business<br /> Grade: 3.65<br /> Dates Attended: 2004 – 2006
    </p>
    {/* CHANDRAKASEM RAJABHAT UNIVERSITY */}
    <hr />
    <h3>CHANDRAKASEM RAJABHAT UNIVERSITY</h3>
    <p>Degree Name: Associate Degree in Science<br /> Field Of Study: Electronics<br /> Grade: 3.75<br /> Dates Attended: 2002 – 2004
    </p>
    {/* KASETSART UNIVERSITY */}
    <hr />
    <h3>KASETSART UNIVERSITY</h3>
    <p>Degree Name: Bachelor of Arts - BA<br /> Field Of Study: Home Economics Education<br /> Grade: 2.5<br /> Dates Attended: 1991 – 1995
    </p>
    {/* LANGUAGES */}
    <h2>LANGUAGES</h2>
    <ul>
    <li>Thai</li>
    <li>English</li>
    </ul>
    {/* SKILLS */}
    <h2>SKILLS</h2>
    <ul>
    <li>SQL</li>
    <li>VB.NET</li>
    </ul>
    </div>
    </div>;
};

export default Resume;