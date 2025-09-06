import Header from './components/Header/page';

import Footer from './components/Footer/page';

import Main from './components/Main/page';

export default function Home() {
  return (
    <>
      <div className="bg-red-400 h-[1000px]">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
