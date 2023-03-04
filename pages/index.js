import Image from 'next/image';
import article from 'assets/article.svg';
import smartphone from 'assets/smartphone.svg';
import world from 'assets/world.svg';
import roberto from 'assets/roberto.png';
import background from 'assets/background.svg'
import backgroundTablet from 'assets/background-tablet.svg'
import backgroundPhone from 'assets/backgroundPhone.svg'
import { Inter, Poppins } from '@next/font/google';
import Link from 'next/link';
import Head from 'next/head';

const inter = Inter({
  variable: '--inter-font',
  weight: ['700'],
  subsets: ['latin']
});

const poppins = Poppins({
  variable: '--poppins-font',
  weight: ['700'],
  subsets: ['latin']
});

export default function Linktree() {
  return (
    <>
    <Head>
      <title>Roberto Traspalacio</title>
    </Head>
      <section className={`${inter.variable} ${poppins.variable}`}>
      <Image
          fill="cover"
            src={background}
            className="bg bg-desktop"
        />
        <Image
            fill="cover"
            src={backgroundTablet}
            className="bg bg-tablet"
        />
        <Image
            fill="cover"
            src={backgroundPhone}
            className="bg bg-phone"
        />
        <header className="header">
          <Image style={{borderRadius: '50%', border: '3px solid #000'}} width={140} height={140} quality={100} priority={true} src={roberto} alt="Roberto Traspalacio" />
          <h1>SoyTraspalacio</h1>
          <p>Diseñador de productos web y soluciones digitales</p>
        </header>
        <div className="links">
          <Link href="https://soytraspalacio.com/">
            <div className="link-item">
              <Image className="icon" style={{ position: 'absolute' }} src={world} alt="World wide" />
              <p>SITIO WEB</p>
            </div>
          </Link>
          <Link target="_blank" href="https://calendly.com/soyrbto/hablemos">
            <div className="link-item">
              <Image className="icon" style={{ position: 'absolute' }} src={smartphone} alt="Smarphone" />
              <p>AGENDAR LLAMADA</p>
            </div>
          </Link>
          {/* <Link href="">
            <div className="link-item">
              <Image className="icon" style={{ position: 'absolute' }} src={article} alt="Article" />
              <p>ARTICULO 1</p>
            </div>
          </Link> */}
        </div>
      </section>
      <style jsx>{`
        section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #000;
          background-color: #FCF1E4;
          position: relative;
        }
        .bg {
          min-height: 100vh;
        }
        .header {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 56px;
          z-index: 99;
        }
        .header > h1 {
          margin-top: 20px;
          font-size: 18px;
          font-family: var(--inter-font);
          line-height: 21px;
          font-weight: 700;
        }
        .header > p {
          margin-top: 8px;
          color: #5e5c5c;
          font-size: 14px;
          line-height: 150%;
          text-align: center;
          font-family: var(--inter-font);
          max-width: 26ch;
        }
        .header > img {
        }
        .links {
          width: 100%;
          margin-top: 32px;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          row-gap: 16px;
        }
        .link-item {
          display: flex;
          align-items: center;
          background: #fcf1e4;
          border: 3px solid #000000;
          box-shadow: 3px 4px 0px rgba(0, 0, 0, 0.74);
          border-radius: 6px;
          height: 41px;
          padding-left: 20px;
          padding-right: 20px;
          position: relative;
          cursor: pointer;
          transition: box-shadow .3s ease;
        }
        .link-item > p {
          width: 100%;
          text-align: center;
          font-size: 14px;
          font-family: var(--poppins-font);
          line-height: 150%;
          font-weight: 700;
        }
        @media (min-width: 601px) {
          .header {
            padding-top: 96px;
          }
          .link-item {
            min-width: 566px;
            max-width: 566px;
            padding: 0 18px;
            margin: 0 auto;
          }
        }
        @media (min-width: 1024px) {
          section {
            justify-content: center;
          }
          .header {
            padding-top: 0;
          }
          .link-item {
            min-width: 624px;
            max-width: 624px;
          }
        }
      `}</style>
    </>
  );
}
