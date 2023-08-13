const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // your project id
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION // "2023-08-13"

const config = {
    projectId: projectId,
    dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false,
  }
  
  export default config;