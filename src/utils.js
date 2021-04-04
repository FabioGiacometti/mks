export const getSubscriberStatus = (status) =>  status ? "card__trending" : "card__not-trending"

export const getCardStyles = (network) => {
  switch(network){
    case 'yt': return "youtube" 
    break
    case 'tw': return "twitter" 
    break
    case 'ig': return "instagram" 
    break
    case 'fb': return "facebook" 
    break}
}
