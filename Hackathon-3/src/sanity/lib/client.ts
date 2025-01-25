import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, Sanity_token } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, 
  token : Sanity_token,
})
