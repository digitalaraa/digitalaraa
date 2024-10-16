// import React, { useEffect } from 'react';

// const MeetTheTeam = () => {
//   useEffect(() => {
//     // Initialize AOS for animations
//     import('aos').then(AOS => {
//       AOS.init({ duration: 100 });
//     });
//   }, []);

//   return (
//     <div className="section tekup-section-padding2">
//       <div className="container">
//         <div className="tekup-section-title center">
//           <h2>Meet the team behind Techverse</h2>
//         </div>
//         <div className="row">
//           {/* Team Member 1 */}
//           <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-duration="500">
//             <div className="tekup-team-wrap">
//               <div className="tekup-team-thumb">
//                 <img src="/assets/images/team/team1.png" alt="Marvin McKinney" />
//                 <div className="tekup-social-icon-box style-four position">
//                   <ul>
//                     <li><a href="https://www.linkedin.com/"><i className="ri-linkedin-fill"></i></a></li>
//                     <li><a href="https://twitter.com/"><i className="ri-twitter-fill"></i></a></li>
//                     <li><a href="https://www.instagram.com/"><i className="ri-instagram-fill"></i></a></li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="tekup-team-data">
//                 <a href="/">
//                   <h5>Marvin McKinney</h5>
//                 </a>
//                 <p>CEO & Founder</p>
//               </div>
//             </div>
//           </div>

//           {/* Team Member 2 */}
//           <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-duration="700">
//             <div className="tekup-team-wrap">
//               <div className="tekup-team-thumb">
//                 <img src="/assets/images/team/team2.png" alt="Sophia Rodriguez" />
//                 <div className="tekup-social-icon-box style-four position">
//                   <ul>
//                     <li><a href="https://www.linkedin.com/"><i className="ri-linkedin-fill"></i></a></li>
//                     <li><a href="https://twitter.com/"><i className="ri-twitter-fill"></i></a></li>
//                     <li><a href="https://www.instagram.com/"><i className="ri-instagram-fill"></i></a></li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="tekup-team-data">
//                 <a href="/">
//                   <h5>Sophia Rodriguez</h5>
//                 </a>
//                 <p>Creative Director</p>
//               </div>
//             </div>
//           </div>

//           {/* Team Member 3 */}
//           <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-duration="900">
//             <div className="tekup-team-wrap">
//               <div className="tekup-team-thumb">
//                 <img src="/assets/images/team/team3.png" alt="Alexander Cameron" />
//                 <div className="tekup-social-icon-box style-four position">
//                   <ul>
//                     <li><a href="https://www.linkedin.com/"><i className="ri-linkedin-fill"></i></a></li>
//                     <li><a href="https://twitter.com/"><i className="ri-twitter-fill"></i></a></li>
//                     <li><a href="https://www.instagram.com/"><i className="ri-instagram-fill"></i></a></li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="tekup-team-data">
//                 <a href="/">
//                   <h5>Alexander Cameron</h5>
//                 </a>
//                 <p>Lead Developer</p>
//               </div>
//             </div>
//           </div>

//           {/* Team Member 4 */}
//           <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-duration="1100">
//             <div className="tekup-team-wrap">
//               <div className="tekup-team-thumb">
//                 <img src="/assets/images/team/team4.png" alt="Brooklyn Simmons" />
//                 <div className="tekup-social-icon-box style-four position">
//                   <ul>
//                     <li><a href="https://www.linkedin.com/"><i className="ri-linkedin-fill"></i></a></li>
//                     <li><a href="https://twitter.com/"><i className="ri-twitter-fill"></i></a></li>
//                     <li><a href="https://www.instagram.com/"><i className="ri-instagram-fill"></i></a></li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="tekup-team-data">
//                 <a href="/">
//                   <h5>Brooklyn Simmons</h5>
//                 </a>
//                 <p>Product Designer</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MeetTheTeam;


import React, { useEffect } from 'react';

const teamMembers = [
  {
    id: 1,
    name: "Marvin McKinney",
    role: "CEO & Founder",
    image: "/assets/images/team/team1.png",
    link: "/",
  },
  {
    id: 2,
    name: "Sophia Rodriguez",
    role: "Creative Director",
    image: "/assets/images/team/team2.png",
    link: "/",
  },
  {
    id: 3,
    name: "Alexander Cameron",
    role: "Lead Developer",
    image: "/assets/images/team/team3.png",
    link: "/",
  },
  {
    id: 4,
    name: "Brooklyn Simmons",
    role: "Product Designer",
    image: "/assets/images/team/team4.png",
    link: "/",
  },
];

const MeetTheTeam = () => {
  useEffect(() => {
    // Initialize AOS for animations
    import('aos').then(AOS => {
      AOS.init({ duration: 100 });
    });
  }, []);

  return (
    <div className="section tekup-section-padding2">
      <div className="container">
        <div className="tekup-section-title center">
          <h2>Meet the Team Behind Techverse</h2>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-duration={`${(index + 1) * 200}`} key={member.id}>
              <div className="tekup-team-wrap">
                <div className="tekup-team-thumb">
                  <img src={member.image} alt={member.name} loading="lazy" />
                  <div className="tekup-social-icon-box style-four position">
                    <ul>
                      <li><a href="https://www.linkedin.com/" aria-label={`LinkedIn profile of ${member.name}`}><i className="ri-linkedin-fill"></i></a></li>
                      <li><a href="https://twitter.com/" aria-label={`Twitter profile of ${member.name}`}><i className="ri-twitter-fill"></i></a></li>
                      <li><a href="https://www.instagram.com/" aria-label={`Instagram profile of ${member.name}`}><i className="ri-instagram-fill"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="tekup-team-data">
                  <a href={member.link} aria-label={`View profile of ${member.name}`}>
                    <h5>{member.name}</h5>
                  </a>
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
