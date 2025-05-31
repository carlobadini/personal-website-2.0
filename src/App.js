import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import carloImg from './images/carlo-badini.jpg';

const DOS_TEXT = `
Carlo Badini [img]
Founder and entrepreneur
Born in Switzerland, based in San Francisco

Experience
2023 - now: Co-Founder & CEO FirstQuadrant (YC S21) [link]
2023 - now: Founder & Chairman Tasty Group [link]
2013 - now: Founder & Owner Cleverclip [link]
2020 - 2023: Co-Founder & CEO Pabio [more]
2019 - 2023: Chairman Comvation [link]
2016 - 2019: Chairman Daktiv [link]

Education
2014 - 2018: University of Berne B.Sc. in Business Administration and Psychology

Awards
2018: Ernst & Young Entrepreneur of the Year - Nominated [more]
2018: Forbes Magazine - 30 Under 30 [more]
2017: Swiss Economic Award - Finalist [more]
2015: Bernese Youth Award - 1st prize [more]
2015: Global Student Entrepreneur Awards - 1st place European champion [more]
2013: Swiss Startups Awards – Public's Choice Award [more]
2011: Stauffacherpreis – 1st place [more]

Press Coverage
2021: Techcrunch [link]
2020: Forbes [link]

Investments
2022: Iraye [link]
2022: Comvation [link]
2021: Blink [link]
2021: Kingfluencers [link]
2021: Legal-i [link]
2020: RetiAI [link]
2016: Daktiv - Exited [link]
`;

function HomePage() {
  const [displayedText, setDisplayedText] = useState('');
  const navigate = useNavigate();

  // Only make the first [img] (after Carlo Badini), the [link] after FirstQuadrant, Tasty Group, Cleverclip, Comvation, Daktiv, Techcrunch, Forbes, Iraye, the investment links, and the [more] after Pabio clickable
  let imgCount = 0;
  let firstQuadrantLinkCount = 0;
  let tastyGroupLinkCount = 0;
  let cleverclipLinkCount = 0;
  let comvationLinkCount = 0;
  let daktivLinkCount = 0;
  let techcrunchLinkCount = 0;
  let forbesLinkCount = 0;
  let irayeLinkCount = 0;
  let comvationInvestLinkCount = 0;
  let blinkLinkCount = 0;
  let kingfluencersLinkCount = 0;
  let legaliLinkCount = 0;
  let retiaiLinkCount = 0;
  let daktivExitedLinkCount = 0;
  let pabioMoreCount = 0;
  let eyMoreCount = 0;
  let forbes30MoreCount = 0;
  let swissEconomicMoreCount = 0;
  let berneseYouthMoreCount = 0;
  let gseaMoreCount = 0;
  let swissStartupsMoreCount = 0;
  let stauffacherpreisMoreCount = 0;
  const clickableText = displayedText
    // First, handle [img] after Carlo Badini
    .replace(/\[img\]/g, (match) => {
      imgCount++;
      if (imgCount === 1) {
        return `<span class='dos-link' data-link='carlo-img'>[img]</span>`;
      }
      return match;
    })
    // Then, handle [more] after Pabio
    .replace(/\[more\]/g, (match, offset, string) => {
      const before = displayedText.slice(0, offset);
      if (!pabioMoreCount && before.includes('2020 - 2023: Co-Founder & CEO Pabio')) {
        pabioMoreCount++;
        return `<span class='dos-link' data-link='pabio'>[more]</span>`;
      }
      if (!eyMoreCount && before.includes('2018: Ernst & Young Entrepreneur of the Year - Nominated')) {
        eyMoreCount++;
        return `<span class='dos-link' data-link='ey-entrepreneur'>[more]</span>`;
      }
      if (!forbes30MoreCount && before.includes('2018: Forbes Magazine - 30 Under 30')) {
        forbes30MoreCount++;
        return `<span class='dos-link' data-link='forbes-30under30'>[more]</span>`;
      }
      if (!swissEconomicMoreCount && before.includes('2017: Swiss Economic Award - Finalist')) {
        swissEconomicMoreCount++;
        return `<span class='dos-link' data-link='swiss-economic-award'>[more]</span>`;
      }
      if (!berneseYouthMoreCount && before.includes('2015: Bernese Youth Award - 1st prize')) {
        berneseYouthMoreCount++;
        return `<span class='dos-link' data-link='bernese-youth-award'>[more]</span>`;
      }
      if (!gseaMoreCount && before.includes('2015: Global Student Entrepreneur Awards - 1st place European champion')) {
        gseaMoreCount++;
        return `<span class='dos-link' data-link='gsea'>[more]</span>`;
      }
      if (!swissStartupsMoreCount && before.includes("2013: Swiss Startups Awards – Public's Choice Award")) {
        swissStartupsMoreCount++;
        return `<span class='dos-link' data-link='swiss-startups-award'>[more]</span>`;
      }
      if (!stauffacherpreisMoreCount && before.includes('2011: Stauffacherpreis – 1st place')) {
        stauffacherpreisMoreCount++;
        return `<span class='dos-link' data-link='stauffacherpreis'>[more]</span>`;
      }
      return match;
    })
    // Then, handle [link] after all specified entries
    .replace(/\[link\]/g, (match, offset, string) => {
      const before = displayedText.slice(0, offset);
      if (!firstQuadrantLinkCount && before.includes('FirstQuadrant (YC S21)')) {
        firstQuadrantLinkCount++;
        return `<a class='dos-external-link' href='https://firstquadrant.ai' target='_blank' rel='noopener noreferrer'>[link]</a>`;
      }
      if (!tastyGroupLinkCount && before.includes('Tasty Group')) {
        tastyGroupLinkCount++;
        return `<a class='dos-external-link' href='https://tastygroup.ch' target='_blank' rel='noopener noreferrer'>[link]</a>`;
      }
      if (!cleverclipLinkCount && before.includes('Cleverclip')) {
        cleverclipLinkCount++;
        return `<a class='dos-external-link' href='https://cleverclip.ch' target='_blank' rel='noopener noreferrer'>[link]</a>`;
      }
      if (!comvationLinkCount && before.includes('Chairman Comvation')) {
        comvationLinkCount++;
        return `<a class='dos-external-link' href='https://comvation.com' target='_blank' rel='noopener noreferrer'>[link]</a>`;
      }
      if (!daktivLinkCount && before.includes('Chairman Daktiv')) {
        daktivLinkCount++;
        return `<a class='dos-external-link' href='https://daktiv.ch' target='_blank' rel='noopener noreferrer'>[link]</a>`;
      }
      if (!techcrunchLinkCount && before.includes('Techcrunch')) {
        techcrunchLinkCount++;
        return `<a class='dos-external-link' href='https://techcrunch.com/2021/12/15/pabio-seed-plus-german-expansion/' target='_blank' rel='noopener noreferrer'>[link]</a>`;
      }
      if (!forbesLinkCount && before.includes('Forbes')) {
        forbesLinkCount++;
        return `<a class='dos-external-link' href='https://www.forbes.at/artikel/out-of-office' target='_blank' rel='noopener noreferrer'>[link]</a>`;
      }
      if (!irayeLinkCount && before.includes('Iraye')) {
        irayeLinkCount++;
        return `<a class='dos-external-link' href='https://irayeskincare.com/en-us' target='_blank' rel='noopener noreferrer'>[link]</a>`;
      }
      if (!comvationInvestLinkCount && before.includes('2022: Comvation [link]')) {
        comvationInvestLinkCount++;
        return `<a class='dos-external-link' href='https://comvation.com' target='_blank' rel='noopener noreferrer'>[link]</a>`;
      }
      if (!blinkLinkCount && before.includes('2021: Blink [link]')) {
        blinkLinkCount++;
        return `<a class='dos-external-link' href='https://blinkdrive.ch/' target='_blank' rel='noopener noreferrer'>[link]</a>`;
      }
      if (!kingfluencersLinkCount && before.includes('2021: Kingfluencers [link]')) {
        kingfluencersLinkCount++;
        return `<a class='dos-external-link' href='https://kingfluencers.com/' target='_blank' rel='noopener noreferrer'>[link]</a>`;
      }
      if (!legaliLinkCount && before.includes('2021: Legal-i [link]')) {
        legaliLinkCount++;
        return `<a class='dos-external-link' href='https://legal-i.ch/de/' target='_blank' rel='noopener noreferrer'>[link]</a>`;
      }
      if (!retiaiLinkCount && before.includes('2020: RetiAI [link]')) {
        retiaiLinkCount++;
        return `<a class='dos-external-link' href='https://www.retinai.com/' target='_blank' rel='noopener noreferrer'>[link]</a>`;
      }
      if (!daktivExitedLinkCount && before.includes('2016: Daktiv - Exited [link]')) {
        daktivExitedLinkCount++;
        return `<a class='dos-external-link' href='https://daktiv.ch' target='_blank' rel='noopener noreferrer'>[link]</a>`;
      }
      return match;
    });

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('homepageTypewriterPlayed');
    if (hasPlayed) {
      setDisplayedText(DOS_TEXT);
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(DOS_TEXT.slice(0, i));
      i++;
      if (i > DOS_TEXT.length) {
        clearInterval(interval);
        sessionStorage.setItem('homepageTypewriterPlayed', 'true');
      }
    }, 0);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (
        e.target.classList.contains('dos-link') &&
        e.target.getAttribute('data-link') === 'carlo-img'
      ) { 
        navigate('/carlo-img');
      }
      if (
        e.target.classList.contains('dos-link') &&
        e.target.getAttribute('data-link') === 'pabio'
      ) {
        navigate('/pabio');
      }
      if (
        e.target.classList.contains('dos-link') &&
        e.target.getAttribute('data-link') === 'ey-entrepreneur'
      ) {
        navigate('/ey-entrepreneur');
      }
      if (
        e.target.classList.contains('dos-link') &&
        e.target.getAttribute('data-link') === 'forbes-30under30'
      ) {
        navigate('/forbes-30under30');
      }
      if (
        e.target.classList.contains('dos-link') &&
        e.target.getAttribute('data-link') === 'swiss-economic-award'
      ) {
        navigate('/swiss-economic-award');
      }
      if (
        e.target.classList.contains('dos-link') &&
        e.target.getAttribute('data-link') === 'bernese-youth-award'
      ) {
        navigate('/bernese-youth-award');
      }
      if (
        e.target.classList.contains('dos-link') &&
        e.target.getAttribute('data-link') === 'gsea'
      ) {
        navigate('/gsea');
      }
      if (
        e.target.classList.contains('dos-link') &&
        e.target.getAttribute('data-link') === 'swiss-startups-award'
      ) {
        navigate('/swiss-startups-award');
      }
      if (
        e.target.classList.contains('dos-link') &&
        e.target.getAttribute('data-link') === 'stauffacherpreis'
      ) {
        navigate('/stauffacherpreis');
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [navigate]);

  return (
    <div className="dos-container">
      <pre className="dos-text" dangerouslySetInnerHTML={{ __html: clickableText }} />
      <div className="dos-contact">
        <a href="mailto:hello@carlobadini.com" className="dos-external-link">Email</a>
        <a href="https://www.linkedin.com/in/carlobadini" className="dos-external-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}

function SubPage() {
  const navigate = useNavigate();
  return (
    <div className="dos-container">
      <div className="dos-back" onClick={() => navigate(-1)}>&lt; back</div>
      <div className="dos-sub-content-spaced">
        Cleverclip received the Swiss Startups Awards, Public's Choice Award for the best business idea of 2013.
      </div>
      <div className="dos-contact">
        <a href="mailto:hello@carlobadini.com" className="dos-external-link">Email</a>
        <a href="https://www.linkedin.com/in/carlobadini" className="dos-external-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}

function CarloImgPage() {
  const navigate = useNavigate();
  const hasPlayed = sessionStorage.getItem('carloImgAnimationPlayed');
  const [showImg, setShowImg] = useState(!!hasPlayed);

  useEffect(() => {
    if (hasPlayed) return;
    sessionStorage.setItem('carloImgAnimationPlayed', 'true');
    const timeout = setTimeout(() => {
      setShowImg(true);
    }, 300); // 300ms fade-in
    return () => clearTimeout(timeout);
  }, [hasPlayed]);

  return (
    <div className="dos-container">
      <div className="dos-back" onClick={() => navigate(-1)}>&lt; back</div>
      <div className="dos-sub-content-spaced" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          src={carloImg}
          alt="Carlo Badini"
          className="dos-img"
          style={{
            maxWidth: '500px',
            width: '100%',
            marginBottom: '24px',
            opacity: showImg ? 1 : 0,
            transition: 'opacity 0.5s',
          }}
        />
      </div>
      <div className="dos-contact">
        <a href="mailto:hello@carlobadini.com" className="dos-external-link">Email</a>
        <a href="https://www.linkedin.com/in/carlobadini" className="dos-external-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}

function PabioPage() {
  const navigate = useNavigate();
  const pabioText = `Pabio was a startup that offered personalized interior design and high-quality furniture rentals on a monthly subscription. Customers could furnish their homes with designer-curated pieces and choose to return or buy them later.`;
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('pabioTypewriterPlayed');
    if (hasPlayed) {
      setDisplayedText(pabioText);
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(pabioText.slice(0, i));
      i++;
      if (i > pabioText.length) {
        clearInterval(interval);
        sessionStorage.setItem('pabioTypewriterPlayed', 'true');
      }
    }, 0);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dos-container">
      <div className="dos-back" onClick={() => navigate(-1)}>&lt; back</div>
      <div className="dos-sub-content-spaced">
        <pre className="dos-text">{displayedText}</pre>
      </div>
      <div className="dos-contact">
        <a href="mailto:hello@carlobadini.com" className="dos-external-link">Email</a>
        <a href="https://www.linkedin.com/in/carlobadini" className="dos-external-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}

function EYEntrepreneurPage() {
  const navigate = useNavigate();
  const eyText = `Shortlisted for the EY Entrepreneur Of The Year Award in 2018, a global program that recognizes individuals and companies demonstrating vision, leadership, and success. The nomination acknowledged work with Cleverclip GmbH.`;
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('eyTypewriterPlayed');
    if (hasPlayed) {
      setDisplayedText(eyText);
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(eyText.slice(0, i));
      i++;
      if (i > eyText.length) {
        clearInterval(interval);
        sessionStorage.setItem('eyTypewriterPlayed', 'true');
      }
    }, 0);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dos-container">
      <div className="dos-back" onClick={() => navigate(-1)}>&lt; back</div>
      <div className="dos-sub-content-spaced">
        <pre className="dos-text">{displayedText}</pre>
      </div>
      <div className="dos-contact">
        <a href="mailto:hello@carlobadini.com" className="dos-external-link">Email</a>
        <a href="https://www.linkedin.com/in/carlobadini" className="dos-external-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}

function Forbes30Under30Page() {
  const navigate = useNavigate();
  const forbesText = `Included in Forbes' 30 Under 30 list, which features young people making contributions across business, technology, and the arts.`;
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('forbes30TypewriterPlayed');
    if (hasPlayed) {
      setDisplayedText(forbesText);
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(forbesText.slice(0, i));
      i++;
      if (i > forbesText.length) {
        clearInterval(interval);
        sessionStorage.setItem('forbes30TypewriterPlayed', 'true');
      }
    }, 0);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dos-container">
      <div className="dos-back" onClick={() => navigate(-1)}>&lt; back</div>
      <div className="dos-sub-content-spaced">
        <pre className="dos-text">{displayedText}</pre>
      </div>
      <div className="dos-contact">
        <a href="mailto:hello@carlobadini.com" className="dos-external-link">Email</a>
        <a href="https://www.linkedin.com/in/carlobadini" className="dos-external-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}

function SwissEconomicAwardPage() {
  const navigate = useNavigate();
  const swissText = `Finalist for the Swiss Economic Award, the country's most prestigious startup recognition, honoring outstanding achievements in business.`;
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('swissEconomicTypewriterPlayed');
    if (hasPlayed) {
      setDisplayedText(swissText);
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(swissText.slice(0, i));
      i++;
      if (i > swissText.length) {
        clearInterval(interval);
        sessionStorage.setItem('swissEconomicTypewriterPlayed', 'true');
      }
    }, 0);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dos-container">
      <div className="dos-back" onClick={() => navigate(-1)}>&lt; back</div>
      <div className="dos-sub-content-spaced">
        <pre className="dos-text">{displayedText}</pre>
      </div>
      <div className="dos-contact">
        <a href="mailto:hello@carlobadini.com" className="dos-external-link">Email</a>
        <a href="https://www.linkedin.com/in/carlobadini" className="dos-external-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}

function BerneseYouthAwardPage() {
  const navigate = useNavigate();
  const berneseText = `Awarded 1st prize in the Bernese Youth Award, which celebrates exceptional young talent in the region of Bern.`;
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('berneseYouthTypewriterPlayed');
    if (hasPlayed) {
      setDisplayedText(berneseText);
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(berneseText.slice(0, i));
      i++;
      if (i > berneseText.length) {
        clearInterval(interval);
        sessionStorage.setItem('berneseYouthTypewriterPlayed', 'true');
      }
    }, 0);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dos-container">
      <div className="dos-back" onClick={() => navigate(-1)}>&lt; back</div>
      <div className="dos-sub-content-spaced">
        <pre className="dos-text">{displayedText}</pre>
      </div>
      <div className="dos-contact">
        <a href="mailto:hello@carlobadini.com" className="dos-external-link">Email</a>
        <a href="https://www.linkedin.com/in/carlobadini" className="dos-external-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}

function GlobalStudentEntrepreneurPage() {
  const navigate = useNavigate();
  const gseaText = `Took part in the Global Student Entrepreneur Awards and placed first in the European regional round, a program for students running businesses while in school.`;
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('gseaTypewriterPlayed');
    if (hasPlayed) {
      setDisplayedText(gseaText);
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(gseaText.slice(0, i));
      i++;
      if (i > gseaText.length) {
        clearInterval(interval);
        sessionStorage.setItem('gseaTypewriterPlayed', 'true');
      }
    }, 0);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dos-container">
      <div className="dos-back" onClick={() => navigate(-1)}>&lt; back</div>
      <div className="dos-sub-content-spaced">
        <pre className="dos-text">{displayedText}</pre>
      </div>
      <div className="dos-contact">
        <a href="mailto:hello@carlobadini.com" className="dos-external-link">Email</a>
        <a href="https://www.linkedin.com/in/carlobadini" className="dos-external-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}

function SwissStartupsAwardPage() {
  const navigate = useNavigate();
  const startupsText = `Cleverclip was awarded the Public's Choice Award at the Swiss Startups Awards for the best business idea of the year.`;
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('swissStartupsTypewriterPlayed');
    if (hasPlayed) {
      setDisplayedText(startupsText);
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(startupsText.slice(0, i));
      i++;
      if (i > startupsText.length) {
        clearInterval(interval);
        sessionStorage.setItem('swissStartupsTypewriterPlayed', 'true');
      }
    }, 0);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dos-container">
      <div className="dos-back" onClick={() => navigate(-1)}>&lt; back</div>
      <div className="dos-sub-content-spaced">
        <pre className="dos-text">{displayedText}</pre>
      </div>
      <div className="dos-contact">
        <a href="mailto:hello@carlobadini.com" className="dos-external-link">Email</a>
        <a href="https://www.linkedin.com/in/carlobadini" className="dos-external-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}

function StauffacherpreisPage() {
  const navigate = useNavigate();
  const stauffacherText = `Received 1st place in the Stauffacherpreis, an annual award given to the best final paper among graduating students at Gymnasium Kirchenfeld.`;
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('stauffacherTypewriterPlayed');
    if (hasPlayed) {
      setDisplayedText(stauffacherText);
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(stauffacherText.slice(0, i));
      i++;
      if (i > stauffacherText.length) {
        clearInterval(interval);
        sessionStorage.setItem('stauffacherTypewriterPlayed', 'true');
      }
    }, 0);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dos-container">
      <div className="dos-back" onClick={() => navigate(-1)}>&lt; back</div>
      <div className="dos-sub-content-spaced">
        <pre className="dos-text">{displayedText}</pre>
      </div>
      <div className="dos-contact">
        <a href="mailto:hello@carlobadini.com" className="dos-external-link">Email</a>
        <a href="https://www.linkedin.com/in/carlobadini" className="dos-external-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/subpage" element={<SubPage />} />
      <Route path="/carlo-img" element={<CarloImgPage />} />
      <Route path="/pabio" element={<PabioPage />} />
      <Route path="/ey-entrepreneur" element={<EYEntrepreneurPage />} />
      <Route path="/forbes-30under30" element={<Forbes30Under30Page />} />
      <Route path="/swiss-economic-award" element={<SwissEconomicAwardPage />} />
      <Route path="/bernese-youth-award" element={<BerneseYouthAwardPage />} />
      <Route path="/gsea" element={<GlobalStudentEntrepreneurPage />} />
      <Route path="/swiss-startups-award" element={<SwissStartupsAwardPage />} />
      <Route path="/stauffacherpreis" element={<StauffacherpreisPage />} />
    </Routes>
  );
}

export default App;
