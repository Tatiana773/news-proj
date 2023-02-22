const initialState = {
    categories: [
        { 
            id: 31, 
            title: 'Головна' 
        },
        { 
            id: 32, 
            title: 'Війна' 
        },
        { 
            id: 33, 
            title: 'Політика' 
        },
        { 
            id: 34, 
            title: 'Економіка' 
        },
        { 
            id: 35, 
            title: 'Спорт' 
        },
        { 
            id: 36, 
            title: 'Освіта' 
        },
    ]
}

export const categoriesReducer = (state = initialState, action) =>{
    switch(action.type){
        
        default: return state;
    }

}