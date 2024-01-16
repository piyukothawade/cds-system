import React, { useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { IoMdHome } from "react-icons/io";
import { MdSpaceDashboard, MdLocalShipping } from "react-icons/md";
import { FaKey, FaUsers, FaMoneyBillAlt, FaChartBar, FaTags } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import '../App.css'
import "../assets/css/theme.css"

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [profileImage, setProfileImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuvUdL40c4o2efGkY6yZ3D6uhHxabp-1QG0Wyy0dpglw&s");

  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className="sidebar-brand">
          {/* <BsCart3 className='icon' /> */}
          ClassicCarSwap
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className="sidebar-nav">
        <img className="profile" src={profileImage} alt="profile" />
        <div className="elements">
          <li className="sidebar-header">
            Welcome,
          </li>
          <li className="name">John Doe</li>
        </div>
      </ul>
      <p className="general">General</p>
      <hr />

      <ul className='sidebar-list'>
        {/* ... (existing code) */}

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/">
                <MdSpaceDashboard className='icon' /> Dashboard
                
                </Link>
            </li>

           
            <li className="sidebar-item sidebar-list-item">
            <a href="#" className="sidebar-link collapsed" data-bs-target="#master" 
                data-bs-toggle="collapse" aria-expanded="false">
                    
                <FaKey className='icon' />
                Master
            </a>
 
                    <ul id="master" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li className="sidebar-item sidebar-list-item">
                            <Link to="customer" className="sidebar-link"> Customer</Link>
                        </li>
                        <li className="sidebar-item sidebar-list-item">
                            <Link to="expenseType" className="sidebar-link"> Expense Type</Link>
                        </li>
                        <li className="sidebar-item sidebar-list-item">
                            <Link to="vehicle" className="sidebar-link"> Vehicle</Link>
                        </li>
                        <li className="sidebar-item sidebar-list-item">
                            <Link to="comissionType" className="sidebar-link"> Commission Type</Link>
                        </li>
                    </ul>
                    </li>

            
            
            <li className='sidebar-list-item'>
                <Link to="userRoles">
                    <FaUsers className='icon'/> User & Roles
                </Link>
            </li>

            <li className='sidebar-list-item'>
                <Link to="purchase">
                    <FaCreditCard className='icon'/> Purchase Entry
                </Link>
            </li>

            <li className='sidebar-list-item'>
                <Link to="sale">
                    <FaTags className='icon'/> Sale Entry
                </Link>
            </li>

            <li className='sidebar-list-item'>
                <Link to="delivery">
                    <MdLocalShipping className='icon'/> Delivery
                </Link>
            </li>

            <li className="sidebar-item sidebar-list-item">
                        <a href="#" className="sidebar-link collapsed" data-bs-target="#expense" 
                        data-bs-toggle="collapse" aria-expanded="false" ><FaMoneyBillTrendUp className='icon'/> 
                        Expense Entry
                    </a>
                    <ul id="expense" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">

                        <li className="sidebar-item sidebar-list-item">
                            <Link to="carExpense" className="sidebar-link"> Car Expense</Link>
                        </li>
                        <li className="sidebar-item sidebar-list-item">
                            <Link to="officeExpense" className="sidebar-link"> Office Expense</Link>
                        </li>   
                    </ul>
                    </li>

            {/* <li className='sidebar-list-item'>
                <a href=''>
                    <FaMoneyBillTrendUp className='icon'/> Expense Entry
                </a>
            </li> */}

                <li className="sidebar-item sidebar-list-item">
                        <a href="#" className="sidebar-link collapsed" data-bs-target="#credit" 
                        data-bs-toggle="collapse" aria-expanded="false" ><FaMoneyBillAlt className='icon'/>
                        Credit Note
                    </a>
                    <ul id="credit" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">

                        <li className="sidebar-item sidebar-list-item">
                            <Link to="paymentReceipt" className="sidebar-link">Payment Recept</Link>
                        </li>
                        <li className="sidebar-item sidebar-list-item">
                            <Link to="comissionEntry" className="sidebar-link"> Comission Entry</Link>
                        </li>  
                    </ul>
                    </li>
            

                <li className="sidebar-item sidebar-list-item">
                        <a href="#" className="sidebar-link collapsed" data-bs-target="#report" 
                        data-bs-toggle="collapse" aria-expanded="false" >
                            <FaChartBar className='icon'/>
                        Report
                    </a>
                    
                    <ul id="report" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">

                        <li className="sidebar-item sidebar-list-item">
                            <Link to="/profitLossStatement" className="sidebar-link"> Profit & Loss Statement</Link>
                        </li>
                        <li className="sidebar-item sidebar-list-item">
                            <Link to="balanceSheet" className="sidebar-link"> Balance Sheet</Link>
                        </li> 
                        <li className="sidebar-item sidebar-list-item">
                            <Link to="customerLedger" className="sidebar-link"> Customer Ledger</Link>
                        </li>
                        <li className="sidebar-item sidebar-list-item">
                            <a href="#" className="sidebar-link collapsed" data-bs-target="#sales" 
                            data-bs-toggle="collapse" aria-expanded="false"> Sales</a>
                            <ul id="sales" className="sidebar-dropdown list-unstyled collapse">
                            <li className="sidebar-item sidebar-list-item">

                            <Link to="/byCustomer" className="sidebar-link">By Customer</Link>
                            </li>
                            <li className="sidebar-item sidebar-list-item">
                            <Link to="/byCar" className="sidebar-link">By Car  ype</Link>
                        </li>  
                            </ul>
                        </li> 
                        <li className="sidebar-item sidebar-list-item">
                            <Link to="/expense" className="sidebar-link">Expense</Link>
                            </li>
                            <li className="sidebar-item sidebar-list-item">
                            <Link to="/payment" className="sidebar-link">Payment</Link>
                        </li>
                    </ul>
                    </li>

            {/* <li className='sidebar-list-item'>
                <a href=''>
                    <FaChartBar className='icon'/> Report
                </a>
            </li> */}
            
        </ul>
      </ul>
    </aside>
  );
}

export default Sidebar;
