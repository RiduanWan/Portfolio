import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faCss3Alt, faJsSquare, faPhp, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFileExcel, faCogs, faBriefcase, faGraduationCap, faGamepad, faCode } from '@fortawesome/free-solid-svg-icons';
import profilePic from '../assets/profile.jpg'; // Pastikan Anda memiliki gambar profil di folder assets

const About = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-6 mt-16">
      <div className="w-full max-w-4xl p-6 bg-gray-800 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src={profilePic}
            alt="Profile"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-purple-500 mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-purple-500">M. Riduan</h1>
            <p className="mt-2 text-lg md:text-xl">Developer & Data Analyst</p>
            <p className="mt-4">
            Saya adalah seorang dengan keahlian dalam pengembangan teknologi dan analisis data. Dengan kemampuan pemrograman dan pemahaman yang kuat tentang data, saya dapat merancang solusi inovatif dan menganalisis informasi kompleks untuk menghasilkan wawasan yang bermanfaat.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-purple-500 flex items-center">
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> Pengalaman
          </h2>
          <ul className="mt-4 space-y-4">
            <li>
              <h3 className="text-xl font-semibold">Perusahaan XYZ</h3>
              <p className="text-gray-400">Frontend Developer, 2019 - 2022</p>
              <p className="mt-2">
                Membangun dan memelihara aplikasi web dengan React dan Redux, serta bekerja sama dengan tim
                desain untuk menciptakan pengalaman pengguna yang luar biasa.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Perusahaan ABC</h3>
              <p className="text-gray-400">Backend Developer, 2017 - 2019</p>
              <p className="mt-2">
                Mengembangkan API dan layanan backend menggunakan Node.js dan Express, serta mengelola
                basis data dengan MongoDB.
              </p>
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-purple-500 flex items-center">
            <FontAwesomeIcon icon={faCode} className="mr-2" /> Keterampilan
          </h2>
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-white">Developer</h3>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center bg-purple-700 p-4 rounded">
                <FontAwesomeIcon icon={faReact} size="3x" />
                <span className="mt-2">React</span>
              </div>
              <div className="flex flex-col items-center bg-purple-700 p-4 rounded">
                <FontAwesomeIcon icon={faNodeJs} size="3x" />
                <span className="mt-2">Node.js</span>
              </div>
              <div className="flex flex-col items-center bg-purple-700 p-4 rounded">
                <FontAwesomeIcon icon={faCss3Alt} size="3x" />
                <span className="mt-2">CSS</span>
              </div>
              <div className="flex flex-col items-center bg-purple-700 p-4 rounded">
                <FontAwesomeIcon icon={faJsSquare} size="3x" />
                <span className="mt-2">JavaScript</span>
              </div>
              <div className="flex flex-col items-center bg-purple-700 p-4 rounded">
                <FontAwesomeIcon icon={faCogs} size="3x" />
                <span className="mt-2">C++</span>
              </div>
              <div className="flex flex-col items-center bg-purple-700 p-4 rounded">
                <FontAwesomeIcon icon={faPhp} size="3x" />
                <span className="mt-2">PHP</span>
              </div>
            </div>

            <h3 className="mt-8 text-xl font-semibold text-white">Data Analyst</h3>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center bg-purple-700 p-4 rounded">
                <FontAwesomeIcon icon={faPython} size="3x" />
                <span className="mt-2">Python</span>
              </div>
              <div className="flex flex-col items-center bg-purple-700 p-4 rounded">
                <FontAwesomeIcon icon={faDatabase} size="3x" />
                <span className="mt-2">SQL</span>
              </div>
              <div className="flex flex-col items-center bg-purple-700 p-4 rounded">
                <FontAwesomeIcon icon={faFileExcel} size="3x" />
                <span className="mt-2">Spreadsheet</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-purple-500 flex items-center">
            <FontAwesomeIcon icon={faGraduationCap} className="mr-2" /> Pendidikan
          </h2>
          <ul className="mt-4 space-y-4">
            <li>
              <h3 className="text-xl font-semibold">Universitas ABC</h3>
              <p className="text-gray-400">Sarjana Teknik Informatika, 2015 - 2019</p>
              <p className="mt-2">
                Mendalami bidang pemrograman, algoritma, dan sistem basis data. Berpartisipasi aktif dalam proyek pengembangan perangkat lunak.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">SMK NEGERI 1 MARABAHAN</h3>
              <p className="text-gray-400">Jurusan Akuntansi dan Keuangan Lembaga, 2020 - 2023</p>
              <p className="mt-2">
                Mengembangkan dasar-dasar pengetahuan dalam bidang sains dan matematika, serta berpartisipasi dalam berbagai kegiatan ekstrakurikuler.
              </p>
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-purple-500 flex items-center">
            <FontAwesomeIcon icon={faGamepad} className="mr-2" /> Hobi
          </h2>
          <p className="mt-4">
            Selain mengembangkan aplikasi, saya juga menikmati kegiatan seperti membaca buku, bermain game,
            dan berolahraga. Saya percaya bahwa keseimbangan antara pekerjaan dan hobi sangat penting untuk
            menjaga kreativitas dan produktivitas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
