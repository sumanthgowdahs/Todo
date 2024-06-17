import React from 'react'
// import { storeDeletedItems } from '../Slics'
import { store } from '../store'
import { useSelector , useDispatch } from 'react-redux'
import { recycleRemove , recycleRestore , recycleClearAll, recycleRestoreAll} from '../Slics'

function Recycle() {
  let dispatch = useDispatch()
  let {deletedItems,todoList} = useSelector((store)=>store.todo)

  if(deletedItems.length == 0){
    return(
      <div className='recycleBin'>
      <h1>No deleted tasks</h1>
      </div>
    )
  }
  else{
    return (
    <div className='recycleBin'>
      <div className="recycleOptions">
        <button onClick={()=>{dispatch(recycleRestoreAll({deletedItems,todoList}))}}   className='recycleRestoreAllButton'>Restore All</button>
      <button onClick={()=>{
        dispatch(recycleClearAll())
      }} className='recycleClearAllButton'>Clear All</button>
      </div>
      

      <div className="recycleBitItems">
       
      {deletedItems.map((item,index)=>{
        return (
          <div className="recycleItems">
            <h4>{item}</h4>
           <div className="recycleButtons">
           <button onClick={()=>{
            dispatch(recycleRestore({item,index}))
           }} className='recycleRestorButton'>Restore</button>

           <button className='recycleRemoveButton' onClick={()=>{
            dispatch(recycleRemove(index))
           }}>Remove</button>
           </div>
          </div>
        )
      })}
      </div>
      
      
    </div>
  )
}


}
export default Recycle