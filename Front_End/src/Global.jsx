import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    text-decoration:none;
    outline:none;
    user-select: none;
    scroll-behavior:smooth;
    font-family:"poppins",sans-serif;
    }

    :root{
        --bg-color:#F5F5F5;
        --secound-bg-color:#C08081;
        --text-color:#665D1E;
        --main-color:#0C090A;
    }
        
    html{
        font-size:62.5%;
        overflow-x:hidden;
    }
        
    body{
        background-color:var(--bg-color);
        color:var(--text-color);
    }

    .header{
        position:fixed;
        top:0;
        left:0;
        width:100%;
        padding:0.7rem 9%;
        background:var(--bg-color);
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-bottom: 1px solid black;
        z-index:100;
    }

    .logo{
        font-size:2.5rem;
        color:(--text-color);
        font-weight:600;
        cursour:default;
    }

    #menu-icon{
        font-size:3.6rem;
        color:var(--main-color);
        display:none;
    }

    .login-section{
        min-height:100vh;
        padding:11rem 9% 1rem;
        justify-content:center;
        align-items:center;
    }

    .out-box{
        display:flex;
        margin:auto;
        width:60vw;
        height:70vh;
        position:absilute;
        border-radius:2rem;
        background:#fff;
        overflow:hidden;
        box-shadow:0 0 1rem var(--secound-bg-color);
    }

    .in-box-left {
        width:50%;
        background:;
        margin:auto;
    }

    .in-box-left img{
        width:110%;
    }

    .in-box-right{
        width:45%;
        display:flex;
        align-items:center;
        justify-content:center;
    }

    h2{
        color:var(--main-color);
        font-size:3rem;
        text-align: center;
        text-shadow:0 0 0.1rem var(--main-color);
    }

    .input-group{
        position: relative;
        margin: 4rem 0;
        font-size:1.5rem;
        border-bottom: 0.2rem solid black;
    }
    
    .input-group label{
        top:50%;
        left: 0.7rem;
        position:absolute;
        transform: translateY(-50%);
        font-weight:500;
        letter-spacing:0.1rem;
        pointer-events: none;
        transition:0.5s;
    }

    .input-group input{
        width:100%;
        height:3rem;
        padding: 0 1rem;
        background: transparent;
        letter-spacing:0.1rem;
        border: none;
        outline: none;
        :valid~label,
        :focus~label{
            top: -0.5rem;
            left: 0.1rem;
    }
    }

    .remember{
        margin: -1rem 0 2.5rem 0.5rem;
    }

    .remember label{
        font-size: 1.3rem;
    }

    .remember label input{
        accent-color: var(--main-color);
        margin-right:0.7rem;
    }

    button{
        width:100%;
        height:4.5vh;
        font-size: 1.3rem;
        font-weight: 700;
        cursor: pointer;
        text-transform:uppercase;
        border-radius: 3rem;
        letter-spacing:0.1rem;
        background:var(--main-color);
        box-shadow:0 0 0 var(--main-color);
        color:var(--secound-bg-color);
        transition:0.3s;
        border:none;
        outline: none;
    }

    button:hover{
        box-shadow: 0 0 0.5rem black;
    }

    .ragister{
        font-size: 1.3rem;
        text-align: right;
        margin: 2.5rem 0;
    }

    .ragister p{
        color:var(--text-color);
    }

    .ragister a{
        color:var(--main-color);
        text-decoration: none;
        font-weight: 700;
        padding-left: 0.5rem;
        transition: all 1s linear;
        :hover{
            text-shadow:0 0 0.1rem var(--main-color);
        }
    }

    .ragisretion-section{
        min-height:100vh;
        padding:11rem 9% 1rem;
        justify-content:center;
        align-items:center;
    }

    .r-out-box{
        display:flex;
        margin:auto;
        width:60vw;
        height:70vh;
        position:absilute;
        border-radius:2rem;
        background:#fff;
        overflow:hidden;
        box-shadow:0 0 1rem var(--secound-bg-color);
    }

    .r-in-box-left {
        width:50%;
        margin:auto;
        overflow:hidden;
    }

    .r-in-box-left img{
        width:110%;
        transform: scale(1.3);
    }

    .r-in-box-right{
        width:45%;
        display:flex;
        align-items:center;
        justify-content:center;
    }

    .r-h2{
        color:var(--main-color);
        font-size:3rem;
        text-align: center;
        margin-bottom:2.5rem;
        text-shadow:0 0 0.1rem var(--main-color);
    }

    .r-input-group{
        position: relative;
        margin: 1rem 0;
        font-size:1.5rem;
        border-bottom: 0.2rem solid black;
    }

    .r-input-group i{
        top:0.9rem;
        left:0.3rem;
        position:absolute;
    }
    
    .r-input-group label{
        display:none;
        top:50%;
        left: 0.7rem;
        position:absolute;
        transform: translateY(-50%);
        font-weight:500;
        letter-spacing:0.1rem;
        pointer-events: none;
        transition:0.5s;
    }

    .r-input-group input{
        width:100%;
        height:3rem;
        padding: 0 0 0 2.3rem;
        background: transparent;
        letter-spacing:0.1rem;
        border: none;
        outline: none;
        :valid~label,
        :focus~label{
            top: -0.5rem;
            left: 0.1rem;
    }
    }

    .r-remember{
        margin: 3rem 0 2.5rem 0.5rem;
    }

    .r-remember label{
        font-size: 1.3rem;
    }

    .r-remember label input{
        accent-color: var(--main-color);
        margin-right:0.7rem;
    }






    @media(max-width:1200px){
        html{
            font-size:55%;
        }
    }
    
    @media(max-width:991px){
        .header{
            padding:2rem 3%;
        }
    }
    @media(max-width:991px){
        .header{
            padding:2rem 3%;
        }

        section{
            padding:10rem 3% 2rem;
        }
    }

    @media(max-width:575px){
        .navbar{
            position:absolute;
            top:100%;
            left:0;
            width:100%;
            padding:1rem 3%;
            display:none;
            background:var(--bg-color);
            border-top:0.1rem soid rgba(0,0,0,0.2);
            box-shadow:0 0.5 1rem rgba(0,0,0,0.2);
        }

        .navbar .active{
            display:block;
        }

        .navbar .links{
            display:block;
            font-size:2rem;
            margin:3rem 0;
            justify-contents:center;
        }

        #menu-icon{
            display:block;
            justify-content:end;
        }
    }

`;