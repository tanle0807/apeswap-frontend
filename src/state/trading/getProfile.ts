export {}

// import { getNonFungibleApesAddress } from 'utils/addressHelpers'
// import nonFungibleApesAbi from 'config/abi/nonFungibleApes.json'
// import { getContract } from 'utils/web3'
// import nfts from 'config/constants/nfts'
// import orderBy from 'lodash/orderBy'

// const nonFungibleApesContract = getContract(nonFungibleApesAbi, getNonFungibleApesAddress())

// const getProfile = async (address: string) => {
//   try {
//     const nfasOwned = address ? await nonFungibleApesContract.methods.balanceOf(address).call() : '0'
//     if (nfasOwned === '0') {
//       return null
//     }
//     const promises = []
//     for (let i = 0; i < nfasOwned; i++) {
//       promises.push(nonFungibleApesContract.methods.tokenOfOwnerByIndex(address, i).call())
//     }
//     const nfaReturn = await (await Promise.all(promises)).map(Number)
//     const ownedNfts = nfaReturn.map((index) => nfts[index])
//     const rarestNft = ownedNfts ? orderBy(ownedNfts, ['attributes.rarityOverallRank'])[0] : null
//     const rarestImage = rarestNft.image
//     return rarestImage
//   } catch (error) {
//     return null
//   }
// }

// export default getProfile
