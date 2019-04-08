const appState = {
    title:{
        text: 'My Redux',
        color: 'blue'
    },
    content:{
        text: 'Make a Redux',
        color: 'red'
    }
}
function dispath(action){
    switch(action.type){
        case 'UPDATE_TITLE_TEXT':
            appState.title.text = action.text
            break;
        case 'UPDATE_TITLE_COLOR':
            appState.title.color = action.color
            break;
        default:
            break;
    }
}
function renderApp(newAppState,oldAppState = {}){
    if(newAppState === oldAppState) return
    console.log('render app...')
    renderTitle(newAppState.title,oldAppState.title)
    renderContent(newAppState.content,oldAppState.content)
}
function renderTitle(newTitle,oldTitle={}){
    if(newTitle === oldTitle) return
    console.log('render title...')
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = newTitle.text
    titleDOM.style.color = newTitle.color
}
function renderContent(newContent,oldContent={}){
    if(newContent === oldContent) return
    console.log('render content...')
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = newContent.text
    contentDOM.style.color = newContent.color
}
function createStore(state,stateChanger){
    const listeners = [];
    const subscribe = (listener) => listeners.push(listener);
    const getState = () => state
    const dispatch = (action) => {
        stateChanger(state,action)
        listeners.forEach((listener) => listener())
    }
    return { getState,dispatch,subscribe }
}
renderApp(appState);
dispath({type:'UPDATE_TITLE_TEXT',text:'《My First Redux》'});
dispath({type:'UPDATE_TITLE_COLOR',color:'yellow'});
renderApp(appState);