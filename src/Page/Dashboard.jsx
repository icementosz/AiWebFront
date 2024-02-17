import React, { useState } from 'react';
import { useSidebar } from '../Component/sidebarcontext';
import './dashboard.css'

function Dashboard() {
    const { isSidebarOpen } = useSidebar();
    const mainClass = `Main${isSidebarOpen ? ' sidebarOpen' : ''}`;

    return (
        <>
            <div className={mainClass}>
                <div className="main-content">
                    <div className="head-title">
                        <div className="left">
                            <h1>Dashboard</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="">Dashboard</a>
                                </li>
                                <li><i class="fa-solid fa-angle-right"></i></li>
                                <li>
                                    <a className="active" href="#">Home</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <ul className="box-info">
                    <li>
                    <i class="fa-solid fa-hospital-user"></i>
                        <span className="text">
                            <h3>1020</h3>
                            <p>Total Patients</p>
                        </span>
                    </li>
                    <li>
                    <i class="fa-solid fa-user-nurse"></i>
                        <span className="text">
                            <h3>2834</h3>
                            <p>Total Personnel</p>
                        </span>
                    </li>
                    <li>
                    <i class="fa-solid fa-stethoscope"></i>
                        <span className="text">
                            <h3>2543</h3>
                            <p>Total Case</p>
                        </span>
                    </li>
                </ul>

                

            </div>
        </>
    )
}

export default Dashboard