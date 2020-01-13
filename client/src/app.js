import React, {Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router";
import Home from "../res/images/home_page.png";
import DetailPage_1 from "../res/images/detail_page_1.png";
import DetailPage_2 from "../res/images/detail_page_2.png";
import UpComing_1 from "../res/images/upcoming_page_1.png";
import UpComing_2 from "../res/images/upcoming_page_2.png";

const App = (props) => (
  <Fragment>
    <Switch>
    
      <Route exact path="/" render={ (props) => {
          return (
              <div>
                  <div className="sample-page">React Practicle Exam</div>
                  <div>
                      <p>
                      Use The Movie DB API(v3) for Create the Project
                      find more information about api <a href="https://developers.themoviedb.org/3/getting-started/introduction" target="_blank"> https://developers.themoviedb.org/3/getting-started/introduction</a>
                      <br />Use the following keys
                          <ul>
                            <li className="api-key">API Key (v3 auth) : f5baf8c74c7d5f00a242c165979d0913</li>
                          </ul>
                      </p>
                      <div className="instructions">
                         <p>Instructions</p>
                         <ol>
                           <li>You have been given the basic setup of react project to complete your test</li>
                           <li>use redux to store relavant data</li>
                           <li>The project structure should follow modularize code splitting accordingly ( hint : redux actions, reducers, middlewares, components... etc)</li>
                           <li>You have the freedom of adding new npm libraries if neccessory</li>
                           <li> page styling and css/sass won't require the exact result in given screenshots, but each page should use css/sass to style the pages</li>
                         </ol>
                      </div>
                      <div className="tasks">
                        <p>Tasks</p>
                      </div>
                      <div>
                        <ol>
                          <li>Home Page Should show Trending Movies (show all the movies in page 1)</li>
                          <ol>
                            <li>Movie Title should appear in each movie</li>
                            <li>Trending Movies should show in a grid view (see the attached image)</li>
                          </ol>
                          <img src={Home} alt="" className="thumb-img"/>
                          <li>
                            When Click on a Movie item it should navigate to another page (detailed view of a movie)
                            <ol>
                              <li>The movie poster and movie backdrop should be included in the page</li>
                              <li>Include the following detials in the detailed Movie page
                                <ul>
                                  <li>Title</li>
                                  <li>Release Date</li>
                                  <li>Overview</li>
                                  <li>Genres</li>
                                  <li>Avarage Vote</li>
                                </ul>
                              </li>
                            </ol>
                            <img src={DetailPage_1} alt="" className="thumb-img"/>
                            <img src={DetailPage_2} alt="" className="thumb-img"/>
                          </li>
                          <li>
                          Upcomming Movies page should show up comming movies (show all movies in page 1)
                            <ol>
                              <li>The movies should load in a Carousel view </li>
                              <li>use the following plugin to create the the effect <a href="(https://github.com/leandrowd/react-responsive-carousel)" target="_blank">(https://github.com/leandrowd/react-responsive-carousel)</a>
                                <ul>
                                  <li>carousel should auto play with 3 seconds for each slide (use plugin options)</li>
                                  <li>slides should play in an infinite loop (use plugin options)</li>
                                </ul>
                              </li>
                            </ol>
                            <img src={UpComing_1} alt="" className="thumb-img"/>
                            <img src={UpComing_2} alt="" className="thumb-img"/>
                          </li>
                        </ol>
                       
                      </div>
                  </div> 
                 
              </div> 
            
          )
        }
      }/>
    </Switch>
  </Fragment>
);

export default withRouter(App);
