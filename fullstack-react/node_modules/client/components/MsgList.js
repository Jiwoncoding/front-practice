import MsgItem from "./MsgItem"


/*
const MsgList=()=><ul className="message">{
   [] 배열에 있는 정보를 임시로 mock데이터로 
  [].map(x=><MsgItem {...x}/>)
}</ul>
*/

const UserIds=['roy','jay']
const getRandomUserId=()=>UserIds[Math.round(Math.random())]
const msgs=Array(50).fill(0).map((_,i)=>({
  id:50-i,
  userId: getRandomUserId(),
  timestamp: 1234567890123+(50-i)*1000*60,
  text: `${50-i} mock text`,
}))

const MsgList=()=>(
  <ul className="message">
    {msgs.map(x=>(
      <MsgItem key={x.id} {...x} />
    ))}
  </ul>
)

export default MsgList