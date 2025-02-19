export const queryParamsNotices = ({
  keyword = '',
  category = '',
  sex = '',
  species = '',
  locationId = '',
  expensive = '',
  cheap = '',
  popular = '',
  unpopular = '',
  page = 1,
  limit = 6,
}) => {
  const params = {};

  if (keyword) params.keyword = keyword;
  if (category) params.category = category;
  if (sex) params.sex = sex;
  if (locationId) params.locationId = locationId;
  if (species) params.species = species;
  if (expensive || cheap)
    params.byPrice = expensive ? false : cheap ? cheap : '';
  if (popular || unpopular)
    params.byPopularity = popular ? false : unpopular ? unpopular : '';
  params.page = page;
  params.limit = limit;

  return params;
};
