import { createSelector } from 'reselect';

const getUsersSelector = (state) => {
  return state.users.users;
}

export const getUsers = createSelector(
  getUsersSelector,
  users => users.filter(u => u)
);

export const getPageSize = (state) => {
  return state.users.pageSize;
}

export const getTotalUsersCount = (state) => {
  return state.users.totalUsersCount;
}

export const getCurrentPage = (state) => {
  return state.users.currentPage;
}

export const getIsFetching = (state) => {
  return state.users.isFetching;
}

export const getFollowingInProgress = (state) => {
  return state.users.followingInProgress;
}
