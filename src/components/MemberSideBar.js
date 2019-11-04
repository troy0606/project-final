import React, { Component } from 'react'
import '../common/member_sideBar.css'

const MemberSideBar = () => {
    return (
        <div className="container-fluid d-flex" style={{height:'100vh'}}>
        <aside className="side-bar">
            <div className="member-info">
                <figure className="member-photo">
                    <img src="https://pixel.nymag.com/imgs/daily/vulture/2015/04/02/02-winnie-the-pooh.w330.h330.jpg"
                        className="object" alt="..."/>
                </figure>
                <h5 className="member-title text-center">LIU HAN WEN</h5>
            </div>
            <div className="member-function d-flex flex-column align-items-center">
                <div className="member-profile">
                    <p>PROFILE</p>
                    <h3>基本資料修改</h3>
                    <h3>重設密碼</h3>
                </div>
                <div className="member-like">
                    <p>LIKED AND　WATCHED</p>
                    <h3>收藏推薦清單</h3>
                    <h3>瀏覽紀錄</h3>
                </div>
                <div className="member-order">
                    <p>ACTIVITY FINISHING</p>
                    <h3>優惠活動</h3>
                    <h3>訂單紀錄</h3>
                </div>
                <div className="text-center mt-5">
                    <h3>Home</h3>
                    <h3>SIgn Out</h3>
                </div>
            </div>
        </aside>
    </div>
    )
}

export default MemberSideBar