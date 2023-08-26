import {
  AppBar,
  Box,
  List,
  ListItem,
  Toolbar,
  Button,
  Typography,
  Grid,
  CardContent,
  Card,
  CardMedia,
  TextField,
  Tabs,
  Tab,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import LOGO from "../src/Images/oracle.png";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../src/Images/banner.avif";
import Company from "../src/Images/Company-amico.svg";
import CompanyLogo from "../src/Images/Team work-pana.svg";
// import AboutImg1 from "../src/Images/Pair programming-pana.svg";
import AboutImg2 from "../src/Images/Online world-amico.svg";
import AboutImg3 from "../src/Images/Programming-pana.svg";
import Services from "../src/Images/services.svg";
import BestQuality from "../src/Images/high-quality.png";
import QuickService from "../src/Images/fast.png";
import ProblemSolving from "../src/Images/knowledge.png";
import Reserch from "../src/Images/reserch.png";
import { Element, Link, scroller } from "react-scroll";
//Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
// import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
//Team
import People_one from "./Images/img_avatar.png";
// import People_two from "./Images/man2.avif";
// import People_three from "./Images/man3.avif";
// import People_four from "./Images/man4.avif";
//Animation Effect
import AOS from "aos";
import "aos/dist/aos.css";

// Testmonials
import Testimonials from "./Images/big_team_01.jpg";
import Testimonials2 from "./Images/big_team_02.jpg";
import Testimonials3 from "./Images/big_team_03.jpg";

//Contact Us
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GoogleMapReact from "google-map-react";

//Portfolio
import PropTypes from "prop-types";
import { ColorRing } from "react-loader-spinner";
import ScrollToTop from "react-scroll-to-top";

function App() {
  //AOS Animation
  useEffect(() => {
    AOS.init();

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  //NavBar
  const [showMenu, setShowMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //Portfolio Content
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <Box
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component={"span"} variant={"body2"}>
              {children}
            </Typography>
          </Box>
        )}
      </Box>
    );
  }
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const portfolioAll = [
    {
      img: "./Images/pf1.jpg",
      title: "Portfolio1",
    },
    {
      img: "./Images/pf2.jpg",
      title: "Portfolio2",
    },
    {
      img: "./Images/pf3.jpg",
      title: "Portfolio3",
    },
    {
      img: "./Images/pf4.jpg",
      title: "Portfolio4",
    },
    {
      img: "./Images/pf5.jpg",
      title: "Portfolio5",
    },
    {
      img: "./Images/pf6.jpg",
      title: "Portfolio6",
    },
  ];

  const portfolio1 = [
    {
      img: "./Images/pf3.jpg",
      title: "Portfolio7",
    },
    {
      img: "./Images/pf4.jpg",
      title: "Portfolio8",
    },
    {
      img: "./Images/pf5.jpg",
      title: "Portfolio9",
    },
    {
      img: "./Images/pf6.jpg",
      title: "Portfolio9",
    },
  ];

  const portfolio2 = [
    {
      img: "./Images/pf1.jpg",
      title: "Portfolio4",
    },
    {
      img: "./Images/pf2.jpg",
      title: "Portfolio5",
    },
    {
      img: "./Images/pf3.jpg",
      title: "Portfolio6",
    },
  ];

  const portfolio3 = [
    {
      img: "./Images/pf6.jpg",
      title: "Portfolio1",
    },
    {
      img: "./Images/pf5.jpg",
      title: "Portfolio2",
    },
    {
      img: "./Images/pf4.jpg",
      title: "Portfolio3",
    },
  ];

  //Contact Us
  const AnyReactComponent = ({ text }) => <Box>{text}</Box>;

  const defaultProps = {
    center: {
      lat: 12.9654,
      lng: 80.2461,
    },
    zoom: 11,
  };
  const [activeSection, setActiveSection] = useState("home");

  const handleNavLinkClick = (section) => {
    setActiveSection(section);
    scroller.scrollTo(section, {
      duration: 500,
      smooth: true,
    });
  };

  // Footer

  const copyrightYear = new Date();

  return (
    <Box>
      {/* NavBar */}
      <AppBar className="bg-color">
        {/* Header Desktop  */}
        <Toolbar sx={{ display: { lg: "block", xs: "none" } }}>
          <Box
            component="img"
            src={LOGO}
            height="80px"
            className="brand_logo"
            onClick={() => handleNavLinkClick("home")}
          ></Box>
          <List
            sx={{
              display: "flex",
              position: "absolute",
              right: 0,
              top: 4,
              padding: 2,
            }}
          >
            <ListItem sx={{ gap: 5 }}>
              <Link
                activeClass="active"
                className="nav_item"
                smooth
                spy
                to="home"
              >
                Home
              </Link>
              <Link
                activeClass="active"
                className="nav_item"
                smooth
                spy
                to="about"
              >
                About
              </Link>
              <Link
                activeClass="active"
                className="nav_item"
                smooth
                spy
                to="service"
              >
                Service
              </Link>
              <Link
                activeClass="active"
                className="nav_item"
                smooth
                spy
                to="pricing"
              >
                Pricing
              </Link>
              <Link
                activeClass="active"
                className="nav_item"
                smooth
                spy
                to="team"
              >
                Team
              </Link>
              <Link
                activeClass="active"
                className="nav_item"
                smooth
                spy
                to="testimonials"
              >
                Testimonials
              </Link>
              <Link
                activeClass="active"
                className="nav_item"
                smooth
                spy
                to="portfolio"
              >
                Portfolio
              </Link>
              <Link
                activeClass="active"
                className="nav_item"
                smooth
                spy
                to="contact"
              >
                Contact
              </Link>
            </ListItem>
          </List>
        </Toolbar>
        {/* Header Mobile */}
        <Box sx={{ display: { lg: "none" }, height: 60 }}>
          <Box sx={{ position: "relative" }}>
            <Box
              component="img"
              src={LOGO}
              className="brand_logo"
              sx={{
                position: "absolute",
                top: -15,
                left: 10,
                height: "90px",
                zIndex: -1,
              }}
              onClick={() => handleNavLinkClick("home")}
            ></Box>
            <Button
              sx={{ float: "right", padding: 2, fontSize: 28 }}
              onClick={() => setShowMenu(!showMenu)}
            >
              <MenuIcon sx={{ color: "#fff" }} />
            </Button>
          </Box>
          {showMenu ? (
            <Box
              sx={{
                maxWidth: 250,
                backgroundColor: "#0096FE",
                height: "100vh",
                boxShadow: "#c1c1c1 1px 0",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Box
                  className="brand_logo"
                  component="img"
                  src={LOGO}
                  onClick={() => handleNavLinkClick("home")}
                ></Box>
                <List>
                  <ListItem
                    sx={{ display: "flex", flexDirection: "column", gap: 7 }}
                  >
                    <Link
                      className={
                        activeSection === "home" ? "active_xs" : "nav_item_xs"
                      }
                      onClick={() => handleNavLinkClick("home")}
                      to="home"
                    >
                      <Box onClick={() => setShowMenu(!showMenu)}>Home</Box>
                    </Link>
                    <Link
                      className={
                        activeSection === "about" ? "active_xs" : "nav_item_xs"
                      }
                      onClick={() => handleNavLinkClick("about")}
                      to="about"
                    >
                      <Box onClick={() => setShowMenu(!showMenu)}>About</Box>
                    </Link>
                    <Link
                      className={
                        activeSection === "service"
                          ? "active_xs"
                          : "nav_item_xs"
                      }
                      onClick={() => handleNavLinkClick("service")}
                      to="service"
                    >
                      <Box onClick={() => setShowMenu(!showMenu)}>Service</Box>
                    </Link>
                    <Link
                      className={
                        activeSection === "pricing"
                          ? "active_xs"
                          : "nav_item_xs"
                      }
                      onClick={() => handleNavLinkClick("pricing")}
                      to="pricing"
                    >
                      <Box onClick={() => setShowMenu(!showMenu)}>Pricing</Box>
                    </Link>
                    <Link
                      className={
                        activeSection === "team" ? "active_xs" : "nav_item_xs"
                      }
                      onClick={() => handleNavLinkClick("team")}
                      to="team"
                    >
                      <Box onClick={() => setShowMenu(!showMenu)}>Team</Box>
                    </Link>
                    <Link
                      className={
                        activeSection === "testimonials"
                          ? "active_xs"
                          : "nav_item_xs"
                      }
                      onClick={() => handleNavLinkClick("testimonials")}
                      to="testimonials"
                    >
                      <Box onClick={() => setShowMenu(!showMenu)}>
                        Testimonials
                      </Box>
                    </Link>
                    <Link
                      className={
                        activeSection === "portfolio"
                          ? "active_xs"
                          : "nav_item_xs"
                      }
                      onClick={() => handleNavLinkClick("portfolio")}
                      to="portfolio"
                    >
                      <Box onClick={() => setShowMenu(!showMenu)}>
                        Portfolio
                      </Box>
                    </Link>
                    <Link
                      className={
                        activeSection === "contact"
                          ? "active_xs"
                          : "nav_item_xs"
                      }
                      onClick={() => handleNavLinkClick("contact")}
                      to="contact"
                    >
                      <Box onClick={() => setShowMenu(!showMenu)}>Contact</Box>
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Box>
          ) : null}
        </Box>
      </AppBar>
      {/* Home */}
      <Element name="home">
        <Box
          className="home_page"
          sx={{
            backgroundImage: `url(${Logo})`,
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            textAlign: "center",
            height: "100vh",
          }}
        >
          <Box data-aos="flip-left" data-aos-duration="3000">
            <Box>We Are Make Insipired Websites</Box>
          </Box>
        </Box>
      </Element>
      {/* About */}
      <Element name="about">
        <Box
          sx={{
            pt: 13,
            pb: 13,
            backgroundColor: "#F7F7F7",
            overflowX: "hidden",
          }}
        >
          <Typography
            variant="h4"
            className="main_sub_head"
            sx={{ textAlign: "center" }}
          >
            About Our Company
          </Typography>
          <Box
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="6000"
            className="company_logo"
            component="img"
            src={Company}
            pt={{ xs: 4, md: 3, xl: 8 }}
          ></Box>
          <Grid
            container
            maxWidth="lg"
            pt={{ xs: 1, md: 3 }}
            sx={{ margin: "auto" }}
            p={{ md: 2, sm: 2, xs: 2 }}
          >
            <Grid
              item
              xl={7}
              lg={8}
              md={6}
              sm={12}
              xs={12}
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <Typography variant="h4" sx={{ pt: 4 }} className="sub_head">
                Lets take your
                <Box component="br"></Box>
                <Box component="span" sx={{ color: " #0096FE" }}>
                  Business
                </Box>
                <Box
                  component="span"
                  px={{ xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                >
                  to Next Level
                </Box>
              </Typography>
              <Box component="p" pt={{ lg: 4, xl: 5 }} className="sub_p">
                is a growing group of talented engineers ready to build your
                idea into something really special. We're focused on you and
                solving your problems, having fun while doing it and respecting
                deadlines. With us you get more than just code - we provide
                business insights, technical guidance and involvement help!
              </Box>
            </Grid>
            <Grid
              item
              xl={5}
              lg={4}
              md={6}
              sm={8}
              xs={12}
              margin={{ sm: "auto" }}
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <Box component="img" src={CompanyLogo}></Box>
            </Grid>
          </Grid>
          <Grid container maxWidth="lg" sx={{ margin: "auto" }} pt={{ xl: 10 }}>
            <Grid
              item
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
              px={{ xl: 1, lg: 1, md: 2, sm: 10, xs: 4 }}
              pt={{ lg: 8, md: 5, sm: 8, xs: 5 }}
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Card>
                <CardMedia
                  component="img"
                  src={AboutImg3}
                  height="200px"
                ></CardMedia>
                <CardContent>
                  <Typography variant="h5">Who We Are</Typography>
                  <Typography
                    variant="body2"
                    pt={{ xs: 2, xl: 2 }}
                    className="sub_p"
                  >
                    We are small group who design beautiful website templates,
                    creative mobile applications, graphics. Hi there, welcome to
                    the Solutions INC.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
              px={{ xl: 1, lg: 1, md: 2, sm: 10, xs: 4 }}
              pt={{ lg: 8, md: 5, sm: 8, xs: 5 }}
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Card>
                <CardMedia
                  component="img"
                  src={AboutImg2}
                  height="200px"
                ></CardMedia>
                <CardContent>
                  <Typography variant="h5">Our Mission</Typography>
                  <Typography
                    variant="body2"
                    pt={{ xs: 2, xl: 2 }}
                    className="sub_p"
                  >
                    Beautiful website templates, creative mobile applications,,
                    welcome to the ©Convert Web Solutions INC. We are small
                    group who design graphics.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
              px={{ xl: 1, lg: 1, md: 2, sm: 10, xs: 4 }}
              pt={{ lg: 8, md: 5, sm: 8, xs: 5 }}
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Card>
                <CardMedia
                  component="img"
                  src={AboutImg3}
                  height="200px"
                ></CardMedia>
                <CardContent>
                  <Typography variant="h5">What We Do</Typography>
                  <Typography
                    variant="body2"
                    pt={{ xs: 2, xl: 2 }}
                    className="sub_p"
                  >
                    Hi there, welcome to the ©Convert Web Solutions INC. We are
                    small group who design beautiful website templates, creative
                    mobile applications, graphics.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Element>
      {/* Service */}
      <Element name="service">
        <Box sx={{ pt: 13, pb: 13 }}>
          <Box sx={{ textAlign: "center" }}>
            <Button
              sx={{
                border: "1px solid",
                borderRadius: "15px",
                padding: "5px 15px",
                cursor: "text",
              }}
            >
              Services
            </Button>
            <Typography
              variant="h4"
              pt={{ xs: 4, lg: 3, xl: 4 }}
              className="main_sub_head"
            >
              Our Best Services
            </Typography>
            <Box
              component="p"
              pt={{ xl: 3, lg: 3 }}
              className="sub_p"
              sx={{ margin: 0 }}
            >
              We assure you of our best service at all times vs assuring you of
              our best services always
            </Box>
          </Box>
          <Grid
            container
            maxWidth="lg"
            margin="auto"
            pt={{ xl: 10, lg: 8, sm: 4, xs: 3 }}
            px={{ md: 2, sm: 10, xs: 4 }}
          >
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <Box className="service_page">
                <Box textAlign="center">
                  <Typography variant="h5">Best Quality</Typography>
                  <Box
                    component="img"
                    src={BestQuality}
                    pt={{ lg: 2, xs: 3 }}
                    py={{ xl: 2, md: 1, sm: 1 }}
                  ></Box>
                </Box>
                <Box component="p" className="sub_p" sx={{ margin: 0 }}>
                  We build custom software that can run on any device and
                  integrate with your existing infrastructure.
                </Box>
              </Box>
              <Box
                mt={{ xl: 5, lg: 5, md: 5, sm: 5, xs: 5 }}
                className="service_page"
              >
                <Box textAlign="center">
                  <Typography variant="h5">Problem Solving</Typography>
                  <Box
                    component="img"
                    src={ProblemSolving}
                    py={{ xl: 2, lg: 2, md: 1, xs: 2 }}
                  ></Box>
                </Box>
                <Box component="p" className="sub_p" sx={{ margin: 0 }}>
                  We integrate expert industry knowledge, process and technology
                  frameworks, strong partnerships, and a global work force to
                  provide strategic solutions that generate sustainable results.
                </Box>
              </Box>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <Box
                component="img"
                src={Services}
                pt={{ xl: 15, lg: 13, md: 15 }}
                mx={{ xl: 5, lg: 2, md: 3, sm: 15 }}
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1500"
              ></Box>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <Box className="service_page">
                <Box textAlign="center">
                  <Typography variant="h5">Quick Service</Typography>
                  <Box
                    component="img"
                    src={QuickService}
                    pt={{ lg: 2 }}
                    py={{ xl: 2, xs: 1 }}
                  ></Box>
                </Box>
                <Box component="p" className="sub_p" sx={{ margin: 0 }}>
                  With over 15 years in business, BigStep Technologies is a
                  reliable partner for businesses looking to build successful
                  and scalable products.
                </Box>
              </Box>
              <Box mt={{ xl: 5, lg: 5, md: 5, xs: 5 }} className="service_page">
                <Box textAlign="center">
                  <Typography variant="h5">Reserch</Typography>
                  <Box
                    component="img"
                    src={Reserch}
                    py={{ xl: 2, lg: 2, md: 2, xs: 2 }}
                  ></Box>
                </Box>
                <Box component="p" className="sub_p" sx={{ margin: 0 }}>
                  We can provide end-to-end services to cover all aspects of
                  cloud application implementation, including cloud app
                  consulting.
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Element>
      {/* Pricing */}
      <Element name="pricing">
        <Box sx={{ pt: 13, pb: 13, backgroundColor: "#F7F7F7" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              pt={{ xs: 4, lg: 3, xl: 4 }}
              className="main_sub_head"
            >
              Best Pricings
            </Typography>
            <Box
              component="p"
              pt={{ xl: 3, lg: 3, md: 2, sm: 2, xs: 2 }}
              className="sub_p"
              sx={{ margin: 0 }}
            >
              Plans that work for everyone, support forum, free hosting
            </Box>
          </Box>
          <Grid
            container
            maxWidth="lg"
            margin="auto"
            pt={{ xl: 10, lg: 8, md: 5, sm: 5, xs: 5 }}
            px={{ md: 3, sm: 10, xs: 4 }}
          >
            <Grid
              item
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Card className="pricing_card">
                <CardContent>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h3">$0</Typography>
                    <Typography
                      variant="h5"
                      pt={{ xl: 2, lg: 2, md: 2, sm: 2, xs: 2 }}
                    >
                      0 Month
                    </Typography>
                    <Box py={{ xl: 2, lg: 2, md: 2, sm: 2, xs: 2 }}>
                      <Button
                        sx={{
                          border: "1px solid",
                          borderRadius: "15px",
                        }}
                        variant="soft"
                      >
                        Starter
                      </Button>
                    </Box>
                    <Box component="p">Modern & Creative Design</Box>
                    <Box component="p">Premium Plugins</Box>
                    <Box component="p">Clean Code</Box>
                    <Box component="p">Responsive Layouts</Box>
                    <Box component="p">Google Fonts</Box>
                    <Box component="p">Highly Customizable</Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
              px={{ xl: 2, lg: 2, md: 2 }}
              pt={{ md: 0, sm: 5, xs: 5 }}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Card className="pricing_card_active">
                <CardContent>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h3">$59</Typography>
                    <Typography
                      variant="h5"
                      pt={{ xl: 2, lg: 2, md: 2, sm: 2, xs: 2 }}
                    >
                      Standard Plan
                    </Typography>
                    <Box py={{ xl: 2, lg: 2, md: 2, sm: 2, xs: 2 }}>
                      <Button
                        sx={{
                          border: "1px solid",
                          borderRadius: "15px",
                        }}
                        variant="soft"
                      >
                        Starter
                      </Button>
                    </Box>
                    <Box component="p">Modern & Creative Design</Box>
                    <Box component="p">Premium Plugins</Box>
                    <Box component="p">Clean Code</Box>
                    <Box component="p">Responsive Layouts</Box>
                    <Box component="p">Google Fonts</Box>
                    <Box component="p">Highly Customizable</Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
              pt={{ md: 0, sm: 5, xs: 5 }}
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Card className="pricing_card">
                <CardContent>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h3">$99</Typography>
                    <Typography
                      variant="h5"
                      pt={{ xl: 2, lg: 2, md: 2, sm: 2, xs: 2 }}
                    >
                      Premium Plan
                    </Typography>
                    <Box py={{ xl: 2, lg: 2, md: 2, sm: 2, xs: 2 }}>
                      <Button
                        sx={{
                          border: "1px solid",
                          borderRadius: "15px",
                        }}
                        variant="soft"
                      >
                        Starter
                      </Button>
                    </Box>
                    <Box component="p">Modern & Creative Design</Box>
                    <Box component="p">Premium Plugins</Box>
                    <Box component="p">Clean Code</Box>
                    <Box component="p">Responsive Layouts</Box>
                    <Box component="p">Google Fonts</Box>
                    <Box component="p">Highly Customizable</Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Element>
      {/* Team */}
      <Element name="team">
        <Box sx={{ pt: 13, pb: 13 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              pt={{ xs: 4, lg: 3, xl: 4 }}
              className="main_sub_head"
            >
              The Team
            </Typography>
            <Box
              component="p"
              pt={{ xl: 3, lg: 3 }}
              className="sub_p"
              sx={{ margin: 0 }}
            >
              We build professional works with together
            </Box>
          </Box>
          <Grid
            container
            maxWidth="lg"
            margin="auto"
            pt={{ xl: 5, lg: 5, md: 5, sm: 5, xs: 5 }}
            textAlign="center"
          >
            <Grid
              item
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={12}
              className="people_img"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Box component="img" src={People_one} width="250px"></Box>
              <Box className="overlay">
                <Box sx={{ paddingTop: 3 }}>Designer</Box>
                <Box component="p" sx={{ padding: "0px 10px" }}>
                  My name is John, welcome to the My Web Solutions INC. We are
                  small group who design beautiful website templates.
                </Box>
                <Box className="social_media" sx={{ paddingTop: 1 }}>
                  <Box>
                    <FacebookIcon className="fb_icon" />
                  </Box>
                  <Box>
                    <TwitterIcon className="twitter_icon" />
                  </Box>
                  <Box>
                    <InstagramIcon className="insta_icon" />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={12}
              className="people_img"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              pt={{ xl: 0, lg: 0, md: 0, sm: 0, xs: 4 }}
            >
              <Box component="img" src={People_one} width="250px"></Box>
              <Box className="overlay">
                <Box sx={{ paddingTop: 3 }}>Designer</Box>
                <Box component="p" sx={{ padding: "0px 10px" }}>
                  My name is John, welcome to the My Web Solutions INC. We are
                  small group who design beautiful website templates.
                </Box>
                <Box className="social_media" sx={{ paddingTop: 1 }}>
                  <Box>
                    <FacebookIcon className="fb_icon" />
                  </Box>
                  <Box>
                    <TwitterIcon className="twitter_icon" />
                  </Box>
                  <Box>
                    <InstagramIcon className="insta_icon" />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={12}
              className="people_img"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              pt={{ xl: 0, lg: 0, md: 5, sm: 4, xs: 4 }}
            >
              <Box
                component="img"
                src={People_one}
                width="250px"
                px={{ xl: 4 }}
              ></Box>
              <Box className="overlay">
                <Box sx={{ paddingTop: 3 }}>Designer</Box>
                <Box component="p" sx={{ padding: "0px 10px" }}>
                  My name is John, welcome to the My Web Solutions INC. We are
                  small group who design beautiful website templates.
                </Box>
                <Box className="social_media" sx={{ paddingTop: 1 }}>
                  <Box>
                    <FacebookIcon className="fb_icon" />
                  </Box>
                  <Box>
                    <TwitterIcon className="twitter_icon" />
                  </Box>
                  <Box>
                    <InstagramIcon className="insta_icon" />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={12}
              className="people_img"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              pt={{ xl: 0, lg: 0, md: 5, sm: 4, xs: 4 }}
            >
              <Box component="img" src={People_one} width="250px"></Box>
              <Box className="overlay">
                <Box sx={{ paddingTop: 3 }}>Designer</Box>
                <Box component="p" sx={{ padding: "0px 10px" }}>
                  My name is John, welcome to the My Web Solutions INC. We are
                  small group who design beautiful website templates.
                </Box>
                <Box className="social_media" sx={{ paddingTop: 1 }}>
                  <Box>
                    <FacebookIcon className="fb_icon" />
                  </Box>
                  <Box>
                    <TwitterIcon className="twitter_icon" />
                  </Box>
                  <Box>
                    <InstagramIcon className="insta_icon" />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Element>
      {/* Testimonials */}
      <Element name="testimonials">
        <Box sx={{ pt: 13, pb: 13, backgroundColor: "#F7F7F7" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              pt={{ xs: 4, lg: 3, xl: 4 }}
              className="main_sub_head"
            >
              Testimonials
            </Typography>
            <Box
              component="p"
              pt={{ xl: 3, lg: 3, md: 2, sm: 2, xs: 2 }}
              className="sub_p"
              sx={{ margin: 0 }}
            >
              What other say about building
            </Box>
          </Box>
          <Grid
            sx={{ display: "flex" }}
            maxWidth="lg"
            margin="auto"
            gap={5}
            paddingTop={9}
            className="testimonial_flex"
          >
            <Box
              className="testimonial_grid"
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Typography variant="caption" className="proof_content">
                The Convert is an amazing item cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Donec id elit non mi porta
                gravida at eget metus. Nullam id dolor id nibh ultricies
                vehicula ut id elit.
              </Typography>
              <Box component="br"></Box>
              <Box sx={{ paddingTop: 3 }}>
                <Typography variant="button" className="proof_name">
                  @Glory
                </Typography>
              </Box>
              <Box
                component="img"
                src={Testimonials}
                className="testimonial_img"
              ></Box>
            </Box>
            <Box
              className="testimonial_grid"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Typography variant="caption" className="proof_content">
                I need to say thanks for the awesome template! Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Donec id elit non mi
                porta gravida at eget metus. Nullam id dolor id nibh ultricies
                vehicula ut id elit.
              </Typography>
              <Box component="br"></Box>
              <Box sx={{ paddingTop: 3 }}>
                <Typography variant="button" className="proof_name">
                  @John
                </Typography>
              </Box>
              <Box
                component="img"
                src={Testimonials2}
                className="testimonial_img"
              ></Box>
            </Box>
            <Box
              className="testimonial_grid"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Typography variant="caption" className="proof_content">
                Convert gives me poweful is an amazing item Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Donec id elit non mi
                porta gravida at eget metus. Nullam id dolor id nibh ultricies
                vehicula ut id elit.
              </Typography>
              <Box component="br"></Box>
              <Box sx={{ paddingTop: 3 }}>
                <Typography
                  variant="button"
                  className="proof_name"
                  position="relative"
                >
                  @Liodi
                </Typography>
              </Box>
              <Box
                component="img"
                src={Testimonials3}
                className="testimonial_img"
              ></Box>
            </Box>
          </Grid>
        </Box>
      </Element>
      {/* Portfolio */}
      <Element name="portfolio">
        <Box sx={{ pt: 13, pb: 13 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              pt={{ xs: 4, lg: 3, xl: 4 }}
              className="main_sub_head"
            >
              OUR PORTFOLIO
            </Typography>
            <Box
              component="p"
              pt={{ xl: 3, lg: 3, md: 2, sm: 2, xs: 2 }}
              className="sub_p"
              sx={{ margin: 0 }}
            >
              TIME TO MEET OUR AWESOME PORTFOLIO ITEMS
            </Box>
          </Box>
          <Box sx={{ paddingTop: 3 }} className="porfolio_flex">
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="All" {...a11yProps(0)} />
                <Tab label="Digital" {...a11yProps(1)} />
                <Tab label="Design" {...a11yProps(2)} />
                <Tab label="Graphics" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Grid container maxWidth="lg" margin="auto">
                {portfolioAll.map((item, e) => (
                  <Grid
                    item
                    xl={4}
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    key={e}
                    textAlign="center"
                  >
                    <Box
                      className="portfolio_imgs"
                      component="img"
                      src={item.img}
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      px={{ lg: 3, md: 5 }}
                      pt={{ xl: 5, lg: 4, md: 4, sm: 4, xs: 4 }}
                    ></Box>
                  </Grid>
                ))}
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Grid container maxWidth="lg" margin="auto">
                {portfolio1.map((item, e) => (
                  <Grid
                    item
                    xl={4}
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    key={e}
                    textAlign="center"
                  >
                    <Box
                      className="portfolio_imgs"
                      component="img"
                      src={item.img}
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      px={{ lg: 3, md: 5 }}
                      pt={{ xl: 5, lg: 4, md: 4, sm: 4, xs: 4 }}
                    ></Box>
                  </Grid>
                ))}
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Grid container maxWidth="lg" margin="auto">
                {portfolio2.map((item, e) => (
                  <Grid
                    item
                    xl={4}
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    key={e}
                    textAlign="center"
                  >
                    <Box
                      className="portfolio_imgs"
                      component="img"
                      src={item.img}
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      px={{ lg: 3, md: 5 }}
                      pt={{ xl: 5, lg: 4, md: 4, sm: 4, xs: 4 }}
                    ></Box>
                  </Grid>
                ))}
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <Grid container maxWidth="lg" margin="auto">
                {portfolio3.map((item, e) => (
                  <Grid
                    item
                    xl={4}
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    key={e}
                    textAlign="center"
                  >
                    <Box
                      className="portfolio_imgs"
                      component="img"
                      src={item.img}
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      px={{ lg: 3, md: 5 }}
                      pt={{ xl: 5, lg: 4, md: 4, sm: 4, xs: 4 }}
                    ></Box>
                  </Grid>
                ))}
              </Grid>
            </CustomTabPanel>
          </Box>
        </Box>
      </Element>
      {/* Contact */}
      <Element name="contact">
        <Box sx={{ pt: 13, pb: 13, backgroundColor: "#F7F7F7" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              pt={{ xs: 4, lg: 3, xl: 4 }}
              className="main_sub_head"
            >
              Contact Us
            </Typography>
            <Box
              component="p"
              pt={{ xl: 3, lg: 3, md: 2, sm: 2, xs: 2 }}
              className="sub_p"
              sx={{ margin: 0 }}
            >
              If you need help before, during or after your purchase, this is
              the place to be. Please use below contact details for all your
              pre-sale questions, contact questions.
            </Box>
          </Box>
          <Grid
            container
            maxWidth="lg"
            margin="auto"
            sx={{ paddingTop: 6 }}
            p={{ xs: 3, lg: 4, xl: 5 }}
          >
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <TextField label="Name" variant="outlined" fullWidth></TextField>
              <TextField
                sx={{ marginTop: 5 }}
                label="E-Mail"
                variant="outlined"
                fullWidth
              ></TextField>
              <TextField
                sx={{ marginTop: 5 }}
                label="Message"
                variant="outlined"
                rows={6}
                multiline
                fullWidth
              ></TextField>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                sx={{ marginTop: 5 }}
                fullWidth
              >
                SEND
              </Button>
            </Grid>
            <Grid
              item
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              px={{ xl: 5, lg: 5, md: 5 }}
              pt={{ xs: 3, sm: 5, md: 0 }}
            >
              <Box component="p" sx={{ color: "#0096FE" }} margin={0}>
                Your Website Worldwide
              </Box>
              <Typography variant="h6" sx={{ paddingTop: 2 }}>
                Our London Agency
              </Typography>
              <Box sx={{ display: "flex" }}>
                <LocationOnIcon
                  sx={{
                    color: "#0096FE",
                    verticalAlign: "middle",
                    paddingTop: "19px",
                  }}
                />
                <Box
                  component="p"
                  className="sub_p"
                  px={{ xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                >
                  Address: 309, New Cavendish St, EC1Y 3WK
                </Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <CallIcon
                  sx={{
                    color: "#0096FE",
                    verticalAlign: "middle",
                    paddingTop: "19px",
                  }}
                />
                <Box
                  component="p"
                  className="sub_p"
                  px={{ xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                >
                  0400 20778972
                </Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <MailOutlineIcon
                  sx={{
                    color: "#0096FE",
                    verticalAlign: "middle",
                    paddingTop: "19px",
                  }}
                />
                <Box
                  component="p"
                  className="sub_p"
                  px={{ xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                >
                  polpo@traxagency.co.au
                </Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <AccessTimeIcon
                  sx={{
                    color: "#0096FE",
                    verticalAlign: "middle",
                    paddingTop: "19px",
                  }}
                />
                <Box
                  component="p"
                  className="sub_p"
                  px={{ xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                >
                  Mon-Fri: 9am-5pm
                </Box>
              </Box>
              <Box className="social_media_contact" sx={{ paddingTop: 3 }}>
                <Box>
                  <FacebookIcon className="fb_icon_contact" />
                </Box>
                <Box>
                  <TwitterIcon className="twitter_icon_contact" />
                </Box>
                <Box>
                  <InstagramIcon className="insta_icon_contact" />
                </Box>
              </Box>
            </Grid>
            <Box sx={{ height: "60vh", width: "100%", paddingTop: 6 }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </Box>
          </Grid>
        </Box>
      </Element>
      {/* Footer */}
      <Box
        component="footer"
        p={{ xl: 6, lg: 6, md: 5, sm: 3, xs: 5 }}
        sx={{ backgroundColor: "#000", color: "#fff" }}
      >
        <Grid container maxWidth="lg" margin="auto">
          <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
            <Box
              component="img"
              src={LOGO}
              height="80px"
              className="brand_logo"
            ></Box>
            <Typography variant="body2" gutterBottom>
              Making the world a better place through constructing elegant
              hierarchies.
            </Typography>
          </Grid>
          <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
            <Box pt={{ xs: 4, sm: 0 }}>
              <Typography
                variant="h6"
                gutterBottom
                px={{ xl: 2, lg: 2, md: 2, sm: 1 }}
                className="h6_head"
              >
                Our Services
              </Typography>
              <List>
                <ListItem
                  sx={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 3,
                  }}
                >
                  <Link className="footer_nav" to="home">
                    Home
                  </Link>
                  <Link className="footer_nav" to="about">
                    About
                  </Link>
                  <Link className="footer_nav" to="service">
                    Service
                  </Link>
                  <Link className="footer_nav" to="pricing">
                    Pricing
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
            <Box pt={{ xs: 4, sm: 0 }}>
              <Typography
                variant="h6"
                gutterBottom
                px={{ xl: 2, lg: 2, md: 2, sm: 1 }}
              >
                Our Services
              </Typography>
              <List>
                <ListItem
                  sx={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 3,
                  }}
                >
                  <Link to="team" className="footer_nav">
                    Team
                  </Link>
                  <Link to="testimonials" className="footer_nav">
                    Testimonials
                  </Link>
                  <Link to="portfolio" className="footer_nav">
                    Portfolio
                  </Link>
                  <Link to="contact" className="footer_nav">
                    Contact
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
            <Box pt={{ xs: 4, sm: 0 }}>
              <Typography variant="h6" gutterBottom>
                Subscribe
              </Typography>
              <Typography variant="body2" gutterBottom pt={{ xl: 3 }}>
                Making the world a better place through constructing elegant
                hierarchies.
              </Typography>
              <Typography variant="caption">
                © {copyrightYear.getFullYear()} Copyright Company. All rights
                reserved.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* Arrow Circle Up Icon */}
      <ScrollToTop
        smooth
        className="scrool_to_up"
        component={
          <Box>
            <ExpandLessIcon />
          </Box>
        }
      />
      {/* Loading */}
      <Box>
        {isLoading ? (
          // Display the loader while isLoading is true
          <Box className="loader">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              colors={["#0096FE", "#0096FE"]}
            />
          </Box>
        ) : (
          <Box></Box>
        )}
      </Box>
    </Box>
  );
}

export default App;
