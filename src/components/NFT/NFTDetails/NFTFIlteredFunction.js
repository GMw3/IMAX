export default function get_NFTs_Filtered_Details(NFTDetails, NFTDetailsData) {
    let filtered_NFTs = {};
    for (let index = 0; index < NFTDetailsData.length; index++) {
        if (NFTDetailsData[index].title === NFTDetails) {
            NFTDetailsData[index].id = index;
          filtered_NFTs = NFTDetailsData[index];
        }
      }
      return filtered_NFTs;
  }
  