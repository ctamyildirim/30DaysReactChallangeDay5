export const initialState = {
    todos: [],
    todo : {
        id : null,
        content : '',
        completed : false,
        editable : false
    }
}

const reducer = (state , action) =>{
    console.log(action)
    switch (action.type) {
        case 'SET_TODO':
            return{
                ...state,
                todo : {
                    id : action.payload.id,
                    content : action.payload.content,
                    completed : false,
                    editable : false
                }

            }
        case 'ADD_TODO':
            return{
                ...state,
                todos : [...state.todos , action.payload],
                todo: {
                    id : '',
                    content :''
                }
        
            }
        case 'REMOVE_TODO':
            return{
                ...state,
               todos : [...state.todos].filter(todo => todo.id !== action.payload)         
            }
        case 'COMPLETE_TODO':
            return{
                ...state,
                todos : state.todos.map(todo => {
                    if(todo.id !== action.payload){
                        return todo
                    }

                    return {
                        ...todo,
                        completed : !todo.completed

                    }
                })
            }
        case 'EDIT_TODO':
        return{
            ...state,
            todos : state.todos.map(todo => {
                if(todo.id !== action.payload){
                    return todo
                }

                return {
                    ...todo,
                    editable : !todo.editable

                }
            })
        }
        case 'UPDATE_TODO':
            return{
                ...state,
                todos : state.todos.map(todo => {
                    if(todo.id !== action.payload.id){
                        return todo
                    }
    
                    return {
                        ...todo,
                        content : action.payload.content
    
                    }
                }),
                todo: {
                    id : '',
                    content :'',
                    completed: false,
                    editable : false,
                    
                }
            }
            
    }
}

export default reducer