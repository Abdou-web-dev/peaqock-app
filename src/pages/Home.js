import "antd/dist/antd.css"; //this import is essential in antd
import { PeaqockAbout } from "../components/sections/about/PeaqockAbout";
import { HomeIntro } from "../components/sections/Intro/HomeIntro";
import { PeaqockMemberShip } from "../components/sections/membership/PeaqockMemberShip";
import { PeaqockNewsLetter } from "../components/sections/newsletter/PeaqockNewsLetter";
import { PeaqockServices } from "../components/sections/services/PeaqockServices";
import { PeaqockStatistics } from "../components/sections/stats/PeaqockStatistics";

//icons
import happy from "../assets/images/emoji_happy.svg";
import lock from "../assets/images/lock.svg";
import shield from "../assets/images/shield_done.svg";
import time from "../assets/images/time_circle.svg";

const statsData = [
  {
    digit: `800`,
    text: `Partners`,
  },
  {
    digit: `55`,
    text: `Countries`,
  },
  {
    digit: `4500`,
    text: `Opportunities`,
  },
  {
    digit: `1529`,
    text: `Comapnies`,
  },
];
const PeaqockServicesData = {
  h3: `our services`,
  title: {
    left: "Trade",
    right: "Simple ,",
  },
  p: `Discover a world of trade opportunities in one place with detailed information about imports,
  market dynamics, tariffs, regulatory requirements, potential buyers and more.`,
  btnLabel: `Discover Now`,
};
const PeaqockAboutData = {
  h3: `About us`,
  subTitle: `PEAQOCK is a member driven network`,
  p: `The purpose of TRADAR Club is to be a network of international businesses and executives dedicated
   to transforming Africa through the vehicles of trade and investment. TRADAR Club Members are global 
   industry leaders, African corporates, intergovernmental organisations, policy makers and other influential 
   stakeholders committed to the shared objective of unlocking growth and development for the African continent`,
  btnLabel: `Learn More`,
};
const PeaqockMemberData = {
  p: `This page will highlight the different membership packages and the benefits and costs of each package. The initial plans to be configured are as presented below. The table should be configurable to update the sections with different feature, benefits and costs from time to time.`,
  basicPlan: {
    icon: happy,
    label: `Basic`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lectus pulvinar massa quam mollis at luctus nunc`,
    btn: {
      label: `View Details`,
      price: `FREE`,
    },
  },
  standardPlan: {
    icon: time,
    label: `Standard`,
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore sapiente molestiae molestias, architecto fugit numquam repudiandae animi.`,
    btn: {
      label: `View Details`,
      price: `$ 1.500`,
    },
  },
  goldPlan: {
    icon: shield,
    label: `Gold`,
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero voluptatem eligendi voluptatum perspiciatis sunt ducimus!`,
    btn: {
      label: `View Details`,
      price: `$ 2.500`,
    },
  },
  platinumPlan: {
    icon: lock,
    label: `Platinum`,
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium perspiciatis qui nesciunt corporis cumque impedit?`,
    btn: {
      label: `View Details`,
      price: `$ 5.000`,
    },
  },
};
const Home = () => {
  return (
    //do the same for other comp
    // .peaqocks-tatistics {
    // width: 100%;
    // }
    <div>
      <div>
        <HomeIntro></HomeIntro>
      </div>

      <div style={{ background: `#E6EAF0` }}>
        <PeaqockStatistics statsData={statsData} />
      </div>

      <div>
        <PeaqockServices {...PeaqockServicesData} />
      </div>

      <div>
        <PeaqockAbout {...PeaqockAboutData} />
      </div>

      <div>
        <PeaqockMemberShip {...PeaqockMemberData} />
      </div>

      <div>
        <PeaqockNewsLetter {...PeaqockMemberData} />
      </div>
    </div>
  );
};

export default Home;
