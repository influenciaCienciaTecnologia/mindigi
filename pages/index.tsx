import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';
import Profile from '../components/profile';
import ProjectPreview from '../components/project_preview';

const title: string = 'Leiloae Sistemas'
const desc: string = 'Uma landing page que apresenta orçamentos de serviços para o agronegócio.'
const link: string = '/leiloae_sistemas'
const image_name: string = 'leiloae-sistemas'

const Home: NextPage = () => {
  const projectMetadataArray = []

  projectMetadataArray.push(
    {
      title: "Leiloae Sistemas",
      desc: "Uma landing page que apresenta orçamentos de serviços para o agronegócio.",
      link: "/leiloae_sistemas",
      image_name: "leiloae-sistemas",
    },
    {
      title: "Ferrarelo Ecommerce",
      desc: "Ecommerce da marca de sapatos Ferrarelo.",
      link: "/ferrarelo_ecommerce",
      image_name: "ferrarelo1",
    },
    {
      title: "Cresol Marketplace",
      desc: "Um marketplace voltado para os serviços de crédito da Cresol.",
      link: "/cresol_marketplace",
      image_name: "cresol",
    },
    );

  const projectPreviewElements = []

  for (let i=0; i < projectMetadataArray.length; i++) {
    const metaData = projectMetadataArray[i];
    const element = <ProjectPreview {...metaData} key={i} />
    projectPreviewElements.push(element)
  }

  return (
      <div className='text-slate-700 flex flex-col gap-4 w-full h-full'>
        <Profile />
        <div className='flex flex-row flex-wrap'>
          {projectPreviewElements}
        </div>
      </div>
  )
  
}

export default Home
