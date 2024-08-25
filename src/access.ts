/**
 * @see https://umijs.org/docs/max/access#access
 * */
// export default function access(initialState: InitialState) {
//   const { loginUser } = initialState ?? {};
//   return {
//     // canAdmin: currentUser && currentUser.access === 'admin',
//     canUser: loginUser,
//     canAdmin: loginUser?.userRole === 'admin',
//   };
// }

/**
 * @see https://umijs.org/docs/max/access#access
 * */
export default function access(initialState: { currentUser?: API.LoginUserVO } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    canAdmin: currentUser && currentUser.userRole === 'admin',
  };
}

