import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const PROFILE_BY_HANDLE_QUERY = gql`
  query ProfileByHandle($input: ProfileByHandleInput!) {
    profileByHandle(input: $input) {
      id
      name
      displayname
      email
      jobTitle
      location
      employer
      picture
      bio
      linkedinUrl
      facebookUrl
      githubUrl
      twitterUrl
      handle

      employmentHistories {
        id
        title
        company
        description
        startDate
        endDate
      }

      communityEngagement {
        questions
        answers
        reputation
      }
    }
  }
`;

export const useProfileByHandle = handle => {
  const { loading, error, data } = useQuery(PROFILE_BY_HANDLE_QUERY, { variables: { input: { handle } } });

  const profile = !loading && data ? data.profileByHandle : {};

  return { loading, error, profile };
};

// function makeCloudProfile(result: any) {
//   if (!result || !result.cloudProfile) {
//     return undefined;
//   }

//   if (
//     result.cloudProfile.employmentHistories &&
//     result.cloudProfile.employmentHistories.length > 0
//   ) {
//     result.cloudProfile.employmentHistories = result.cloudProfile.employmentHistories.map(
//       (employmentHistory: CloudProfileEmploymentHistory) => {
//         return {
//           ...employmentHistory,
//           startDate: new Date(employmentHistory.startDate),
//           endDate: employmentHistory.endDate
//             ? new Date(employmentHistory.endDate)
//             : null,
//         };
//       }
//     );
//   }

//   return result.cloudProfile;
// }
