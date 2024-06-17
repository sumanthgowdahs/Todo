import { useSelector , useDispatch } from 'react-redux'
import { deleteTodoItems , storeDeletedItems } from './Slics'
import lazyImage from './lazy.png'

function Items() {
    let dispatch = useDispatch()
    let {todoList,todoListTotal} = useSelector((store) => store.todo)


    if(todoList.length==0){
        return(
            <div className='items'>
                <h1>Nothing to do </h1>
                <img src={lazyImage} alt="" />
                
            </div>
        )
    }
    else{
        return (
            <div className='items' >
                
                {todoList?.map((items,index)=>{
                    // console.log(todoList);
                    return (
                        <div key={index} className='itemDiv'>
                            <div className="task">
                            <h4>{items}</h4>
                            </div>
                            
                            <button onClick={()=>{
                                dispatch(storeDeletedItems(index

                                ))
                                dispatch(deleteTodoItems(index))

                            }}>Delete</button>
                           
        
                        </div>
                        
                    )
                })}
            </div>
          )
    }
    
//   return (
//     <div className='items' >
        
//         {todoList?.map((items,index)=>{
//             console.log(todoList);
//             return (
//                 <div key={index} className='itemDiv'>
//                     <div className="task">
//                     <h4>{items}</h4>
//                     </div>
                    
//                     <button onClick={()=>{
//                         dispatch(deleteTodoItems(index))
//                     }}><i class="fa-solid fa-circle-minus"></i></button>
                   

//                 </div>
                
//             )
//         })}
//     </div>
//   )
}

export default Items

