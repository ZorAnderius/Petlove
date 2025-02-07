import { createSelector } from '@reduxjs/toolkit';

export const selectNews = state => state.news.news;

export const selectFilterValue = state => state.news.filterValue;

export const selectTotalPage = state => state.news.totalPage;

export const name = createSelector(
  [selectNews, selectFilterValue],
  (news, filterValue) =>
    news?.filter(
      ({ title, text }) =>
        title.toLowerCase().includes(filterValue.toLowerCase()) ||
        text.toLowerCase().includes(filterValue.toLowerCase()),
    ),
);
