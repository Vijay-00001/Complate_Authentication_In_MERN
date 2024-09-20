import React from 'react'
import styled from 'styled-components'

const Erroe_Page = () => {

    const Page_Err = styled.div`
        .err{
            margin: 90px auto;
            width:60%;
            height:400px;
            padding: 5rem;
            text-align: center;
            background-color: white;
            border-radius: 11px;
        
        }
        h1{
            margin: auto;
            color: red;
            font-size: 70px;
            padding: 3rem 0;
            font-weight: 1100;
        }

        h4{
            color: red;
            font-size: 20px;
            font-weight: 1100;
        }
    `

  return (
    <Page_Err>
    <div className='err'>
      <h1>Page is not find....!</h1>
      <h4>This page is comming soon please search letter.</h4>
    </div>
    </Page_Err>
  )
}

export default Erroe_Page
