export const getRelevantGamesData = (data) =>  data.map(({ 
  id, 
  name, 
  slug, 
  background_image, 
  rating, 
  released 
}) => ({ 
  id, 
  name, 
  slug, 
  background_image, 
  rating, 
  released
}))

export const getRelevantPlatformsData = (data) => data.map(({ id, name }) => ({ id, name}))

export const getRelevantScreenshotsData = (data) => data.map(({ id, image }) => ({ id, image }))