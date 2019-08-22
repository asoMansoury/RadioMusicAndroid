import {AsyncStorage} from 'react-native';

export const saveState =async (state)=>{
    
    try {
        const serilizedState = JSON.stringify(state);
        await  AsyncStorage.setItem('state',serilizedState);
    } catch (error) {
        
    }
}

export const  loadState =  ()=>{
    try {
        AsyncStorage.getItem('state').then((response)=>{
            const serilizedState =JSON.parse(response) ;
            console.log(serilizedState);
            if(serilizedState===null||serilizedState===undefined)
                return true;
            
            return serilizedState.initAppReducer.isFirstTime;
        });

        return undefined;

    } catch (error) {
        console.log(error);
        return undefined;
    }
}

