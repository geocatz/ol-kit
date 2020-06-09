The Provider component should wrap your entire application and never be unmounted. It will automatically interface with any ol-kit children within the component tree and persist their state before they unmount; a drop-in state management tool!

Fully integrated example:
```javascript static
import React from 'react'
import { Map, Popup, Provider } from '@bayer/ol-kit'

function App() {
  return (
    <Provider>
      <Map>
        <Popup />
      </Map>
    </Provider>
  )
}

export default App
```
Make sure the <Provider> never unmounts!