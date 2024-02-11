import post from './post-schema'
import page from './page-schema'
import history from './history-page-schema'
import knowledge from './knowledge-page-schema'
import author from './author'
import category from './category'


const schemas = [
    post,
    page,
    history,
    knowledge,
    author,
    category,
   ]

export default schemas


/* 
example
import navigation from './example_to_work_after/navigation'
import footer from './example_to_work_after/footer'
import mainHero from './example_of_objects/mainHero'
import quote from './example_of_objects/quote'
import featuredItems from './example_of_objects/featuredItems'
import cta from './example_of_objects/cta'
import ctaBanner from './example_of_objects/ctaBanner'
import featuredText from './example_of_objects/featuredText'
import mediaModule from './example_of_objects/mediaModule'

*/