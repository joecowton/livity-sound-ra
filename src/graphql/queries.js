// eslint-disable
// this is an auto generated file. This will be overwritten

export const getRelease = `query GetRelease($id: ID!) {
  getRelease(id: $id) {
    id
    artist
    title
    src
    href
  }
}
`;
export const listReleases = `query ListReleases(
  $filter: ModelReleaseFilterInput
  $limit: Int
  $nextToken: String
) {
  listReleases(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      artist
      title
      src
      href
    }
    nextToken
  }
}
`;
