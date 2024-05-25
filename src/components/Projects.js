import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    title: 'Developer Project 1',
    description: 'Deskripsi singkat Developer proyek 1.',
    image: 'https://via.placeholder.com/800x400',
    link: '#',
    category: 'Developer'
  },
  {
    title: 'Developer Project 2',
    description: 'Deskripsi singkat Developer proyek 2.',
    image: 'https://via.placeholder.com/800x400',
    link: '#',
    category: 'Developer'
  },
  {
    title: 'Developer Project 3',
    description: 'Deskripsi singkat Developer proyek 3.',
    image: 'https://via.placeholder.com/800x400',
    link: '#',
    category: 'Developer'
  },
  {
    title: 'Data Analyst Project 1',
    description: 'Deskripsi singkat Data Analyst proyek 1.',
    image: 'https://via.placeholder.com/800x400',
    link: '#',
    category: 'Data Analyst'
  },
  {
    title: 'Data Analyst Project 2',
    description: 'Deskripsi singkat Data Analyst proyek 2.',
    image: 'https://via.placeholder.com/800x400',
    link: '#',
    category: 'Data Analyst'
  },
  {
    title: 'Data Analyst Project 3',
    description: 'Deskripsi singkat Data Analyst proyek 3.',
    image: 'https://via.placeholder.com/800x400',
    link: '#',
    category: 'Data Analyst'
  }
];

const ProjectSection = ({ title, projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640, // breakpoint for mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg mb-12 shadow-lg">
      <h2 className="text-3xl font-bold text-center text-purple-500 mb-8">{title}</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="px-4">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-500 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a href={project.link} className="text-purple-500 hover:text-purple-300">
                  Lihat Selengkapnya
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Projects = () => {
  const developerProjects = projects.filter(project => project.category === 'Developer');
  const dataAnalystProjects = projects.filter(project => project.category === 'Data Analyst');

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center text-purple-500 mb-12">Projek Saya</h1>
        <ProjectSection title="Developer Projects" projects={developerProjects} />
        <ProjectSection title="Data Analyst Projects" projects={dataAnalystProjects} />
      </div>
    </div>
  );
};

export default Projects;
