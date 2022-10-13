import "antd/dist/antd.css"; //this import is essential in antd
import { HomeIntro } from "../components/sections/Intro/HomeIntro";
import { PeaqockServices } from "../components/sections/services/PeaqockServices";
import { PeaqockStatistics } from "../components/sections/stats/PeaqockStatistics";
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
const Home = () => {
  return (
    <div>
      <div>
        <HomeIntro></HomeIntro>
      </div>
      <div style={{ background: `#E6EAF0` }}>
        <PeaqockStatistics statsData={statsData} />
      </div>
      <div style={{ background: `` }}>
        <PeaqockServices />
      </div>
    </div>
  );
};

export default Home;
