import { useTranslations } from 'next-intl';
import TestimonialSlider from '@/app/_components/TestimonialSlider';

// TypeScript

interface TestimonialsPageProps {
  params: Promise<{ locale: string }>; // Define params as a Promise
}

export const metadata = {
  title: 'FDC Testimonials',
  description: 'Comments from our customers',
};

export default async function TestimonialsPage({ params }: TestimonialsPageProps) {
  const resolvedParams = await params; // Await the params Promise
  const locale = resolvedParams.locale;

  const testimonials = [
    {
      quote: "Our experience with FDC was more then we could have hoped for. They completed all work on time and as promised. The workmanship was excellent, and the little things they did to fix issues that we had for years were more then we had expected.  The entire crew was friendly and easy to work with and they happily accommodated minor changes we asked for along the way. The teamwork they demonstrated was truly impressive. The time and attention they paid to the little details truly showed their devotion to their crafts. A couple of months after the work was completed, we got a call from Roger asking how things were and if we had any issues. The minor issues we did have (slight adjustments to closet doors..) were dealt with quickly as they came by to make the required adjustments. The renovations done were 30 years after our initial purchase of the home, and it feels like we were given a brand-new home.",
      name: 'Heidi and Jacob',
      role: 'Pierrefond'
    },
    {
      quote: `Je suis très satisfaite du travail accompli par M. Larin et son équipe pour la construction de mon nouveau deck de piscine.\n\nLe travail a été fait rapidement et est de qualité supérieure. Ma cour était propre à la fin de la journée, ce que j'ai grandement apprécié.\n\nJe recommande FDC Furnishings pour vos projets de rénovations.`,
      name: 'Nick V',
      role: 'Malika Inc.'
    },
    {
      quote: `Roger a pris en charge le remplacement de toutes nos rampes d’escalier extérieur. Il a retiré les anciennes, a magasiné puis acheté les nouvelles rampes et finalement les a installées. Le tout a été fait rapidement et proprement.\n\nLa communication avec Roger était facile et il a pu nous orienter dans ce projet pour lequel nous avions beaucoup de questions. Merci encore Roger!`,
      name: 'Sophie',
      role: 'Saint Lazare'
    },
    {
      quote: `I would highly recommend Roger Larin and his team at FDC for any type of home renovation. We have used their services for a bathroom renovation as well as crown molding and pots lights in our master bedroom. FDC also installed new sliding patio doors with trim and molding repair. The final look is better than new.\n\nTheir workmanship and service is professional, courteous and trustworthy. The entire team is great, with diversified skill sets. They are punctual, hardworking and respect the timelines that were promised. Their attention to detail is appreciated and they are very knowledgeable and offer very good suggestions. Their pricing is very fair for the superior quality of work! I suggest you call them today for any of your home renovation needs.`,
      name: 'Tom',
      role: 'Pierrefond'
    },
    {
      quote: `Roger and his team at FDC Furnishings have worked with us on two projects, and we couldn't be happier with the outcomes.\n\nThe first was an update to an old fireplace that we had converted to gas. FDC Furnishings removed the old surround and mantle and replaced it with tile and a beautiful wooden mantle with a live edge. In addition to doing an incredible job building the surround, Roger also coordinated directly with the company installing the gas fireplace to ensure that his work met their specifications.\n\nFor the second project, we discovered mold in the walls of our garage. FDC Furnishings took care of removing the moldy walls and replaced them with new insulation, vapour barrier, and drywall. Additionally, they installed a new base and sealed it with a membrane to prevent future moisture infiltration.\n\nIn both instances, Roger and his team were professional, efficient, and went above and beyond to deliver exceptional results.\n\nWe are extremely pleased with the work FDC Furnishings has done for us and they are at the top of our list for future projects.`,
      name: 'Ross',
      role: 'Pointe Claire'
    },
    {
      quote: `Roger was so easy to work with. He had great ideas for our kitchen fix up. He arrived when he said he would and the job was completed on time. We are so pleased with our updated kitchen. He and his team are polite, clean, respectful and so very talented.\n\nRoger also did an excellent job putting an electric fireplace in our existing wood fireplace and we have enjoyed it since.\n\nI highly recommend FDC Furnishings and Roger for all the home renovations you may have!`,
      name: 'Sharon',
      role: 'Pierrefond'
    },
    {
      quote: "FDC Furnishings has been doing some amazing work for us here at the Luxeo condos for a couple of years and would recommend them to anyone looking for quality work",
      name: 'Manon',
      role: 'Ile Perrot'
    },
    {
      quote: "It was a wonderful experience working with FDC Furnishings. Roger was very knowledgeable and helpful throughout the whole process. His team was reliable and got the work done in a timely manner. Most importantly, I am so pleased with the final result and the attention to detail. I can’t wait to have Roger and his team back for my next project!",
      name: 'Debora',
      role: 'Lacine'
    },
    {
      quote: "We hired Roger and his crew to renovate all 3 floors of our home to prepare it for selling and they did a wonderful job. The basement, bathrooms and wood floors look especially nice. We would highly recommend them.",
      name: 'Murray and Dorothy',
      role: 'Pierrefond'
    },
    {
      quote: "FDC redid our main bathroom, basement lighting and repaired some damaged walls, we were quite happy with their work and will call on them for our next projects.",
      name: 'Julie',
      role: 'Pierrefond'
    },
    {
      quote: "These guys did a good job on my main bathroom, would recommend to anyone looking for renos.",
      name: 'Dave',
      role: 'St-Lazare'
    },
    {
      quote: "Our stairs & railings needed replacement and FDC did a nice job at great price. Would refer them to anyone looking to renovate.",
      name: 'Chris',
      role: 'Vaudreuil'
    },
    {
      quote: "Roger redid the tiles in our main bathroom and installed a new patio door. We were very pleased with the result and appreciated how clean the area was left.",
      name: 'Tom and Susan',
      role: 'Pierrefond'
    },
    {
      quote: "Roger et son équipe on fait un superbe travail à complètement réaménager notre 1er plancher et crée un espace ouvert avec nouveaux foyer gaz, chambre de bain, cuisine et salon. Nous sommes très satisfaits et nous recommandons FDC à tous ceux qui souhaitent rénover leur maison.",
      name: 'Amzath',
      role: 'Saint Lazare'
    },
    {
      quote: "I called on Rogers team to install a deck platform on my roof and repair a section of drywall in our office.\n\nThe work was completed in 1 day and the deck exceeded my expectations.\n\nThey are also very polite and easy to work with.",
      name: 'Patricia',
      role: 'Beaconsfield'
    }
  ];

  return (
    <>
      {/* <style jsx global>{`
        html, body {
          overflow: hidden;
        }
      `}</style> */}
      <div
        className="fixed top-0 left-0 right-0 bottom-0"
        style={{
          backgroundImage: 'url(/images/20220805_171610.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.7,
          zIndex: -1,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 0,
          }}
        />
      </div>
      <main 
        className="relative testimonials-page-container" 
        style={{ 
          //marginTop: '200px', 
          zIndex: 15,
          height: 'calc(100vh - 369px)',
          overflowY: 'auto'
        }}
      >
        <div className="max-w-6xl mx-auto px-2 md:px-4">
          <div className="flex justify-center" style={{ whiteSpace: "pre-wrap" }}>
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </main>
    </>
  );
}

// export default function Page({ params }: { params: { locale: string } }) {
//   const testimonials = [
//     {
//       quote: "Our experience with FDC was more then we could have hoped for. They completed all work on time and as promised. The workmanship was excellent, and the little things they did to fix issues that we had for years were more then we had expected.  The entire crew was friendly and easy to work with and they happily accommodated minor changes we asked for along the way. The teamwork they demonstrated was truly impressive. The time and attention they paid to the little details truly showed their devotion to their crafts. A couple of months after the work was completed, we got a call from Roger asking how things were and if we had any issues. The minor issues we did have (slight adjustments to closet doors..) were dealt with quickly as they came by to make the required adjustments. The renovations done were 30 years after our initial purchase of the home, and it feels like we were given a brand-new home.",
//       name: 'Heidi and Jacob',
//       role: 'Pierrefond'
//     },
//     {
//       quote: `Je suis très satisfaite du travail accompli par M. Larin et son équipe pour la construction de mon nouveau deck de piscine.\n\nLe travail a été fait rapidement et est de qualité supérieure. Ma cour était propre à la fin de la journée, ce que j'ai grandement apprécié.\n\nJe recommande FDC Furnishings pour vos projets de rénovations.`,
//       name: 'Nick V',
//       role: 'Malika Inc.'
//     },
//     {
//       quote: `Roger a pris en charge le remplacement de toutes nos rampes d’escalier extérieur. Il a retiré les anciennes, a magasiné puis acheté les nouvelles rampes et finalement les a installées. Le tout a été fait rapidement et proprement.\n\nLa communication avec Roger était facile et il a pu nous orienter dans ce projet pour lequel nous avions beaucoup de questions. Merci encore Roger!`,
//       name: 'Sophie',
//       role: 'Saint Lazare'
//     },
//     {
//       quote: `I would highly recommend Roger Larin and his team at FDC for any type of home renovation. We have used their services for a bathroom renovation as well as crown molding and pots lights in our master bedroom. FDC also installed new sliding patio doors with trim and molding repair. The final look is better than new.\n\nTheir workmanship and service is professional, courteous and trustworthy. The entire team is great, with diversified skill sets. They are punctual, hardworking and respect the timelines that were promised. Their attention to detail is appreciated and they are very knowledgeable and offer very good suggestions. Their pricing is very fair for the superior quality of work! I suggest you call them today for any of your home renovation needs.`,
//       name: 'Tom',
//       role: 'Pierrefond'
//     },
//     {
//       quote: `Roger and his team at FDC Furnishings have worked with us on two projects, and we couldn't be happier with the outcomes.\n\nThe first was an update to an old fireplace that we had converted to gas. FDC Furnishings removed the old surround and mantle and replaced it with tile and a beautiful wooden mantle with a live edge. In addition to doing an incredible job building the surround, Roger also coordinated directly with the company installing the gas fireplace to ensure that his work met their specifications.\n\nFor the second project, we discovered mold in the walls of our garage. FDC Furnishings took care of removing the moldy walls and replaced them with new insulation, vapour barrier, and drywall. Additionally, they installed a new base and sealed it with a membrane to prevent future moisture infiltration.\n\nIn both instances, Roger and his team were professional, efficient, and went above and beyond to deliver exceptional results.\n\nWe are extremely pleased with the work FDC Furnishings has done for us and they are at the top of our list for future projects.`,
//       name: 'Ross',
//       role: 'Pointe Claire'
//     },
//     {
//       quote: `Roger was so easy to work with. He had great ideas for our kitchen fix up. He arrived when he said he would and the job was completed on time. We are so pleased with our updated kitchen. He and his team are polite, clean, respectful and so very talented.\n\nRoger also did an excellent job putting an electric fireplace in our existing wood fireplace and we have enjoyed it since.\n\nI highly recommend FDC Furnishings and Roger for all the home renovations you may have!`,
//       name: 'Sharon',
//       role: 'Pierrefond'
//     },
//     {
//       quote: "FDC Furnishings has been doing some amazing work for us here at the Luxeo condos for a couple of years and would recommend them to anyone looking for quality work",
//       name: 'Manon',
//       role: 'Ile Perrot'
//     },
//     {
//       quote: "It was a wonderful experience working with FDC Furnishings. Roger was very knowledgeable and helpful throughout the whole process. His team was reliable and got the work done in a timely manner. Most importantly, I am so pleased with the final result and the attention to detail. I can’t wait to have Roger and his team back for my next project!",
//       name: 'Debora',
//       role: 'Lacine'
//     },
//     {
//       quote: "We hired Roger and his crew to renovate all 3 floors of our home to prepare it for selling and they did a wonderful job. The basement, bathrooms and wood floors look especially nice. We would highly recommend them.",
//       name: 'Murray and Dorothy',
//       role: 'Pierrefond'
//     },
//     {
//       quote: "FDC redid our main bathroom, basement lighting and repaired some damaged walls, we were quite happy with their work and will call on them for our next projects.",
//       name: 'Julie',
//       role: 'Pierrefond'
//     },
//     {
//       quote: "These guys did a good job on my main bathroom, would recommend to anyone looking for renos.",
//       name: 'Dave',
//       role: 'St-Lazare'
//     },
//     {
//       quote: "Our stairs & railings needed replacement and FDC did a nice job at great price. Would refer them to anyone looking to renovate.",
//       name: 'Chris',
//       role: 'Vaudreuil'
//     },
//     {
//       quote: "Roger redid the tiles in our main bathroom and installed a new patio door. We were very pleased with the result and appreciated how clean the area was left.",
//       name: 'Tom and Susan',
//       role: 'Pierrefond'
//     },
//     {
//       quote: "Roger et son équipe on fait un superbe travail à complètement réaménager notre 1er plancher et crée un espace ouvert avec nouveaux foyer gaz, chambre de bain, cuisine et salon. Nous sommes très satisfaits et nous recommandons FDC à tous ceux qui souhaitent rénover leur maison.",
//       name: 'Amzath',
//       role: 'Saint Lazare'
//     },
//     {
//       quote: "I called on Rogers team to install a deck platform on my roof and repair a section of drywall in our office.\n\nThe work was completed in 1 day and the deck exceeded my expectations.\n\nThey are also very polite and easy to work with.",
//       name: 'Patricia',
//       role: 'Beaconsfield'
//     }
//   ];

//   return (
//     <>
//       {/* <style jsx global>{`
//         html, body {
//           overflow: hidden;
//         }
//       `}</style> */}
//       <div
//         className="fixed top-0 left-0 right-0 bottom-0"
//         style={{
//           backgroundImage: 'url(/images/20220805_171610.jpg)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed',
//           opacity: 0.7,
//           zIndex: -1,
//         }}
//       >
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundColor: 'rgba(0, 0, 0, 0.3)',
//             zIndex: 0,
//           }}
//         />
//       </div>
//       <main 
//         className="relative testimonials-page-container" 
//         style={{ 
//           //marginTop: '200px', 
//           zIndex: 15,
//           height: 'calc(100vh - 369px)',
//           overflowY: 'auto'
//         }}
//       >
//         <div className="max-w-6xl mx-auto px-2 md:px-4">
//           <div className="flex justify-center" style={{ whiteSpace: "pre-wrap" }}>
//             <TestimonialSlider testimonials={testimonials} />
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }