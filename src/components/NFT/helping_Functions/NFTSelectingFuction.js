export default function get_NFTs_Filtered(NFTcategory, NFTCollectionsData) {
    let filtered_NFTs = [];
    for (let index = 0; index < NFTCollectionsData.length; index++) {
        if (NFTCollectionsData[index].title === NFTcategory) {
          NFTCollectionsData[index].id = index;
          filtered_NFTs.push(NFTCollectionsData[index]);
        }
      }
      return filtered_NFTs;
  }
  