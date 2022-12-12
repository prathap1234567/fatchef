import React from 'react'
import './frame1.css'
import feedbackbg from './feedbackbg.png'
import feedbackrec1 from './feedbackrec1.png'
import feedbackrec2 from './feedbackrec2.png'
import { Link } from '@mui/material'
const Frame1 = (props) => {
  return (
    <div className="frame1-container">
        <title>exported project</title>
    
      <div className="frame1-frame1">
        <img
        alt="joecaltierer9nIWw6J0lgunsplash11970"
        src={feedbackbg}
          className="frame1-joecaltierer9n-i-ww6j0lgunsplash1"
        />
        <span className="frame1-text">
          <span>Feedback...!</span>
        </span>
        <span className="frame1-text02">
          <span>
            Send Your Feedback We Love hearing It
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className="frame1-text04">
          <span>
            <span>Full Name</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Email</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Ph No</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Comments</span>
          </span>
        </span>
        <img
          src={feedbackrec1}
          alt="Rectangle7206"
          className="frame1-rectangle7"
        />
        <img
          src={feedbackrec2}
          alt="Rectangle102010"
          className="frame1-rectangle10"
        />
        <img
          src={feedbackrec2}
          alt="Rectangle8207"
          className="frame1-rectangle8"
        />
        <img
          src={feedbackrec2}
          alt="Rectangle9209"
          className="frame1-rectangle9"
        />
        <img
          src={feedbackrec2}
          alt="Rectangle112012"
          className="frame1-rectangle11"
        />
        <span className="frame1-text19">
          <span>
          <Link href="/">SUBMIT</Link></span>
        </span>
      </div>
    </div>
  )
}

export default Frame1
