import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const Portfolio = () => {
  return (
    <>
      <SimpleReactLightbox>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Portfolio</span>
                <h3>Creative Portfolio</h3>
              </div>
            </div>
          </div>

          <div className="portfolio_filter">
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                <Tab>Ui/Ux</Tab>
                <Tab>Website</Tab>
                <Tab>Graphic</Tab>
                <Tab>Creative</Tab>
              </TabList>

              <div className="list_wrapper">
                <SRLWrapper>
                  <TabPanel>
                    <ul className="portfolio_list">
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/5.jpg">
                              <img
                                src="assets/img/portfolio/5.jpg"
                                alt="Portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/2.jpg">
                              <img
                                src="assets/img/portfolio/2.jpg"
                                alt="portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/4.jpg">
                              <img
                                src="assets/img/portfolio/4.jpg"
                                alt="portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/3.jpg">
                              <img
                                src="assets/img/portfolio/3.jpg"
                                alt="portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/3.jpg">
                              <img
                                src="assets/img/portfolio/3.jpg"
                                alt="Ui/Ux"
                              />
                            </a>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/5.jpg">
                              <img
                                src="assets/img/portfolio/5.jpg"
                                alt="Ui/Ux"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/2.jpg">
                              <img
                                src="assets/img/portfolio/2.jpg"
                                alt="Website"
                              />
                            </a>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/4.jpg">
                              <img
                                src="assets/img/portfolio/4.jpg"
                                alt="Website"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/3.jpg">
                              <img
                                src="assets/img/portfolio/3.jpg"
                                alt="Graphic"
                              />
                            </a>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/5.jpg">
                              <img
                                src="assets/img/portfolio/5.jpg"
                                alt="Graphic"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/2.jpg">
                              <img
                                src="assets/img/portfolio/2.jpg"
                                alt="Creative"
                              />
                            </a>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/3.jpg">
                              <img
                                src="assets/img/portfolio/3.jpg"
                                alt="Creative"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </TabPanel>
                </SRLWrapper>
              </div>
            </Tabs>
          </div>
        </div>
      </SimpleReactLightbox>
    </>
  );
};

export default Portfolio;
