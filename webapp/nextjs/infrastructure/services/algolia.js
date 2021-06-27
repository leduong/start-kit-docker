import algoliasearch from 'algoliasearch/lite'
import algoliaConfig from '~/app/config/algolia'

const algoliaService = algoliasearch(algoliaConfig.appId, algoliaConfig.appKey)

export default algoliaService
