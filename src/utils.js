export const getSubscriberStatus = (status) =>  status ? "card__trending" : "card__not-trending"

export const getCardStyles = (network) => {
  switch(network){
    case 'yt': return "youtube" 
    case 'tw': return "twitter" 
    case 'ig': return "instagram" 
    case 'fb': return "facebook" 
    default: return "youtube"}
}
