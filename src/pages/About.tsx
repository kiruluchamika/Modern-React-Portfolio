
import { motion } from 'framer-motion';
import {  MapPin,  GraduationCap } from 'lucide-react';
import profileImage from '../assets/profile.png';

export const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold gradient-text mb-4">About Me</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Full-stack developer with a passion for creating beautiful and functional web applications.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
        >
          <div>
            <img
              src={profileImage}
              alt="Profile"
              className="w-[800px] h-[800px] object-cover rounded-xl "
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">Who I Am</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-2xl">
            I'm an undergraduate software engineering student at SLIIT University, passionate 
            about exploring full-stack development. With hands-on experience in
             PHP, HTML, JavaScript, CSS, Java, React, and backend development, I have applied these skills in various university projects.
              They are particularly interested in how innovative software solutions can transform everyday life and 
              aspire to become a proficient software engineer capable of building impactful, scalable applications.
               Outside of coding, I'm enjoys hiking, playing video games, and experimenting with new technologies 
               to stay ahead in the ever-evolving tech world.
            </p>
            <div className="space-y-4">
              
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                <span className="text-gray-600 dark:text-gray-300">Matara, Sri Lanka</span>
              </div>
              
            </div>
          </div>
        </motion.div>

       

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                degree: "Bachelor of Software Engineering Honours",
                school: "Sri Lanka Institute of Information Technology",
                period: "2024 - present"
              },
              {
                degree: "A/L and O/L",
                school: "St.Servatius College",
                period: "2008 - 2022"
              }
            ].map((education, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
              >
                <GraduationCap className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{education.degree}</h3>
                <div className="text-purple-600 mb-2">{education.school}</div>
                <div className="text-gray-600 dark:text-gray-300">{education.period}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};