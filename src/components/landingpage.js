import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
         {/* <Cell col={12}>     */  } 
            <div className="banner-text">
                  <h1>Full Stack Web Developer</h1>
                <hr/>
              <p>HTML/CSS | Bootstrap | JavaScript | React | Java | SQL</p>
            <div className="social-links">
              {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/muzaffar90/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              {/* Github */}
                    <a href="https://github.com/muz234" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
                <a href="https://twitter.com/muzaffar413" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
                {/* twitter */}
            </div>
            </div>
          {/*</Cell>*/}
        </Grid>
      </div>
      
    )
  }
}

export default Landing;
