
import Banner from './Banner';
import BannerSection from './BannerSection';
import CompanyStats from './CompanyStats';
import Section1 from './Section1';
import SillsHeader from './SillsHeader';
import Subjects from './Subjects';
import Section2 from './Section2';
import Section3 from './Section3';

export default function Landingpage() {
  // const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-[#F9F9F3] px-[124px] max-[640px]:p-[10px]">
      {/* Hero Section */}
      <Banner />
      <BannerSection />
      {/* Company Stats */}
      <CompanyStats />
      {/* Skills Section */}
      <Section1 />
      {/* Skills images */}
      <SillsHeader />
      {/* Section Title */}
      <Subjects />

      <Section2 />

      <Section3 />
    </div>
  );
}
