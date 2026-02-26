import { createContext, useContext, useReducer } from 'react'

const NaviContext = createContext()

const initialState = {
  showNav: false
}
function reducer (state, action) {
  switch (action.type) {
    case 'navigation/status':
      return {
        ...state,
        showNav: action.payload
      }

    default:
      throw new Error('Unrecognized actions')
  }
}

export function NavigationProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  function toggleNav (bool) {
    dispatch({
      type: 'navigation/status',
      payload: bool
    })
  }

  const { showNav } = state
  return (
    <NaviContext.Provider value={{ showNav, toggleNav }}>
      {children}
    </NaviContext.Provider>
  )
}

export const useNavi = () => useContext(NaviContext)
