import Headline from '@/components/headline/Headline';
import HeroBasic from '@/components/hero-sections/HeroBasic';
import React from 'react';
import FounderSection from './_components/founder/Founder';

const aboutText = {
  headline: 'About Us',
  subheadline: 'Our Purpose',
  text: 'LockerLegends, a pioneering force in the world of locking, celebrates 20 years of unveiling the truth behind this cultural art form online. Founded two decades ago, the platform aimed to fill gaps in the historical narrative of locking, debunking inaccuracies and sharing authentic stories. From introducing the first locking-only camps to linking "SOUL TRAIN" to locking&apos;s foundation, LockerLegends continues to shape the global perception of this dance. Emphasizing unity and dispelling racial barriers, LockerLegends remains dedicated to preserving the true purpose of locking, fostering awareness, and sharing knowledge worldwide.',
};

const about = () => {
  return (
    <div className='text-black px-8 md:px-16 lg:px-32 pt-32 pb-20 w-full lg:max-w-5xl'>
      <HeroBasic
        headline={`${aboutText.headline}`}
        subheadline={`${aboutText.subheadline}`}
        text={`${aboutText.text}`}
      />
      <FounderSection />
      <article className='relative font-normal max-w-screen-sm lg:max-w-screen-lg py-20'>
        <h2 className='font-semibold text-2xl'>How it started...</h2>
        <p className='py-4 text-base lg:text-lg leading-loose'>
          Back in 2003 when we decided to create Lockerlegends, back when we saw
          a need in a then growing new locking community for education and the
          understanding of the importance of the historical history, concerning
          our wonderful world of Locking.
        </p>
        <p className='py-4 text-base lg:text-lg leading-loose'>
          <span className='font-semibold text-orange-700'>We</span> realized
          that many stories, and events in locking history were in accurate,
          because the true background and events surrounding its inception were
          never documented or taught correctly, possibly because some of those
          who profited ,believed that the true history and inclusion of others
          would stifle their dominance of the dances history. We recognized the
          lack of of a wide vision from the many perspectives that produced the
          dance you see today. One of the most neglected issues was that of the
          cultural connection during the times when the Dance style was
          developed and its acceptance into the commercial world as crossover
          entertainment. Since the inception of this website sight in 2004, We
          are proud that we have been instrumental in the knowledge and
          awareness of todays locking community, We now see many quotes, and
          post involving our writings ,teachings and concepts all over the
          world. Just google locking history &amp; there is probably something
          taken directly from our website posted there.{' '}
          </p>
          <p className='py-4 text-base lg:text-lg leading-loose'>
          <span className='font-semibold text-orange-700'>We</span> were happy
          to be involved in the first Full week camps taught by original
          generation Lockers in 2005, We are happy to see Full Locking camps now
          in existence, with the inclusion of multiple original era Pioneers, We
          were happy to have connected, The LEGENDARY dance and educational
          television show “SOUL TRAIN” train, and its social party dancing with
          the foundation of locking.{' '}
          </p>
          <p className='py-4 text-base lg:text-lg leading-loose'>
          <span className='font-semibold text-orange-700'>We </span> are proud yo
          have conducted The FIRST ever Social Party Dance className in 2005,
          TODAY we see Social Party Dance classNamees ( which are called Soul
          Dances ) taught all over the world, We were happy to introduce the
          world to the awareness of Locking before the commercial &amp;
          performance locking, which has open an international awareness to
          Locking &amp; its connection to its streets, Now we see Locking
          accepted with the other street forms at events all over the world.
          </p>
          <p className='py-4 text-base lg:text-lg leading-loose'>
          <span className='font-semibold text-orange-700'>We </span> exposed many
          early Lost Lockers &amp; their stories &amp; contributions to the
          world ,including Charles Robot , His exposure was of the utmost
          importance, because of his connection to Don Campbell (with the robot
          shuffle) This has allowed the world to understand the connection to
          Locking with the animated styles of Popping..Today we have seen a
          movement to connect the many styles of popping back to its original
          roots of Northern California to Locking and Roboting, of Southern
          </p>
          <p className='py-4 text-base lg:text-lg leading-loose'>
          California.<span className='font-semibold text-orange-700'>We </span>
          are happy to see that Locking &amp; street dance is again connected to
          the term MOVEMENT, where we were one of the first to teach of the
          early movement of the 1960s &amp; its connection to the purpose of
          Locking, today we see many new school movements , Like Soul Universal,
          Watts Soul &amp; Locking4life who have taken our lead and with many
          conversations have again producing the purpose of unity to our dance…
          </p>
          <p className='py-4 text-base lg:text-lg leading-loose'>
          <span className='font-semibold text-orange-700'>We </span> have fought
          and continue to fight the attempt to DISTORT this education, and the
          movement to proclaim Locking a African American Dance art form as a
          racial separation , With the true education of its african american
          roots , to the true purpose of its acceptance by people of many races
          , creeds, color and religious backgrounds, showing that this dance had
          a original and continuing social purpose to unite and break down
          racial barriers , which go way beyond, its acceptance as marketable
        commercial entertainment
          </p>
        <p className='py-4 text-base lg:text-lg leading-loose'>
          <span className='font-semibold text-orange-700'>We </span> have seen
          the uniting of the Original Era with the 1980s era, and later decades
          , all the way into the international scene, we have worked to explain
          the changes as this dance migrated without true documentation of a
          true foundational history ,we now provide that from a educational
          &amp; from first hand experience , In our effort to preserve,and the
          attempts to pass on this dance as not only a STYLE, but a true
          ARTFORM! Today its + 18yrs years of this websites history
        </p>
      </article>
    </div>
  );
};

export default about;
