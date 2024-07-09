const baseUrl = process.env.PUBLIC_URL

const imagesUrls = {
  boubou: (selectedSeason) => `${baseUrl}/images/Boubou/${selectedSeason || '2020-2021'}.jpg`,
  flag: `${baseUrl}/images/France.png`
}

export default imagesUrls
